import { supabase } from "./supabase";

export async function submitAppeal({ name, phone, type, message }) {
  const id = `MU-${Date.now().toString().slice(-6)}`;
  const { error } = await supabase.from("murojaatlar").insert({
    id,
    name,
    phone,
    type,
    message,
    status: "Qabul qilindi",
  });
  if (error) throw error;
  return id;
}

export async function checkAppealStatus(id) {
  const { data, error } = await supabase
    .from("murojaatlar")
    .select("*")
    .eq("id", id.toUpperCase())
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function listAppeals() {
  const { data, error } = await supabase
    .from("murojaatlar")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function updateAppealStatus(id, status) {
  const { error } = await supabase.from("murojaatlar").update({ status }).eq("id", id);
  if (error) throw error;
}
