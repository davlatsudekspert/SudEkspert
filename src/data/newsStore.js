import { supabase } from "../lib/supabase";

const BUCKET = "news-images";

export async function uploadMedia(file) {
  const ext = (file.name.split(".").pop() || "bin").toLowerCase();
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const { error } = await supabase.storage.from(BUCKET).upload(fileName, file, {
    cacheControl: "3600",
    upsert: false,
  });
  if (error) {
    console.error("Fayl yuklashda xatolik:", error);
    throw error;
  }
  const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(fileName);
  return urlData.publicUrl;
}

export async function deleteImage(url) {
  if (!url) return;
  const fileName = url.split("/").pop();
  if (!fileName) return;
  await supabase.storage.from(BUCKET).remove([fileName]);
}function sortDate(item) {
  const d = item?.date;
  if (typeof d === "string") {
    const m = d.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})/);
    if (m) return new Date(+m[3], +m[2] - 1, +m[1]).getTime();
    const iso = new Date(d);
    if (!Number.isNaN(iso.getTime())) return iso.getTime();
  }
  return item?.id || 0;
}

export async function loadNews() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.error("Yangiliklarni yuklashda xatolik:", error);
    return [];
  }
  return (data || []).sort((a, b) => sortDate(b) - sortDate(a) || b.id - a.id);
}

export async function saveNews(news) {
  const { error } = await supabase.from("news").upsert(
    news.map(({ id, title, description, body, date, image }) => ({
      id,
      title,
      description,
      body,
      date,
      image,
    }))
  );

  if (error) {
    console.error("Yangiliklarni saqlashda xatolik:", error);
  }
}

export async function addNews(item) {
  const upload = async (f) => (f instanceof File ? await uploadMedia(f) : f || null);

  const image = await upload(item.image);
  const image2 = await upload(item.image2);
  const image3 = await upload(item.image3);
  const video = await upload(item.video);

  const { error } = await supabase.from("news").insert({
    id: Date.now(),
    title: item.title,
    description: item.desc,
    body: item.full,
    date: item.date,
    image,
    image2,
    image3,
    video,
  });

  if (error) {
    console.error("Yangilik qo'shishda xatolik:", error);
    throw error;
  }
}

export async function deleteNews(item) {
  for (const url of [item?.image, item?.image2, item?.image3, item?.video]) {
    if (url) await deleteImage(url);
  }

  const { error } = await supabase.from("news").delete().eq("id", item.id);

  if (error) {
    console.error("Yangilik o'chirishda xatolik:", error);
    throw error;
  }
}
