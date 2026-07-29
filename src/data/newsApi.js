const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function loadNews() {
  const res = await fetch(`${API_URL}/api/news`);
  if (!res.ok) throw new Error("Yangiliklarni olishda xatolik");
  return res.json();
}

export async function addNews({ title, desc, full, date, image }, pin) {
  const res = await fetch(`${API_URL}/api/news`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-admin-pin": pin,
    },
    body: JSON.stringify({ title, desc, full, date, image }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Yangilik qo'shishda xatolik");
  }
  return res.json();
}

export async function deleteNews(id, pin) {
  const res = await fetch(`${API_URL}/api/news/${id}`, {
    method: "DELETE",
    headers: { "x-admin-pin": pin },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "O'chirishda xatolik");
  }
  return res.json();
}
