import { supabase } from "../lib/supabase";

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
  const { error } = await supabase.from("news").insert({
    id: Date.now(),
    title: item.title,
    description: item.desc,
    body: item.full,
    date: item.date,
    image: item.image,
  });

  if (error) {
    console.error("Yangilik qo'shishda xatolik:", error);
    throw error;
  }
}

export async function deleteNews(id) {
  const { error } = await supabase.from("news").delete().eq("id", id);

  if (error) {
    console.error("Yangilik o'chirishda xatolik:", error);
    throw error;
  }
}
