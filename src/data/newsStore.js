import { supabase } from "../lib/supabase";

const BUCKET = "news-images";

export async function uploadImage(file) {
  const ext = file.name.split(".").pop() || "jpg";
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const { error } = await supabase.storage.from(BUCKET).upload(fileName, file);
  if (error) {
    console.error("Rasm yuklashda xatolik:", error);
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
  return data;
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
  const imageUrl = item.image instanceof File
    ? await uploadImage(item.image)
    : item.image;

  const { error } = await supabase.from("news").insert({
    id: Date.now(),
    title: item.title,
    description: item.desc,
    body: item.full,
    date: item.date,
    image: imageUrl,
  });

  if (error) {
    console.error("Yangilik qo'shishda xatolik:", error);
    throw error;
  }
}

export async function deleteNews(item) {
  if (item?.image) await deleteImage(item.image);

  const { error } = await supabase.from("news").delete().eq("id", item.id);

  if (error) {
    console.error("Yangilik o'chirishda xatolik:", error);
    throw error;
  }
}
