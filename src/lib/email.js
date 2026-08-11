import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const APPEAL_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_APPEAL_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function isConfigured() {
  return !!(SERVICE_ID && PUBLIC_KEY && CONTACT_TEMPLATE_ID && APPEAL_TEMPLATE_ID);
}

export async function sendContactEmail({ name, phone, email, message }) {
  if (!isConfigured()) {
    console.error("EmailJS sozlamalari .env faylida topilmadi");
    return null;
  }
  return emailjs.send(
    SERVICE_ID,
    CONTACT_TEMPLATE_ID,
    {
      from_name: name,
      from_number: phone,
      from_email: email || "—",
      message,
    },
    { publicKey: PUBLIC_KEY }
  );
}

export async function sendAppealEmail({ name, phone, type, message }) {
  if (!isConfigured()) {
    console.error("EmailJS sozlamalari .env faylida topilmadi");
    return null;
  }
  return emailjs.send(
    SERVICE_ID,
    APPEAL_TEMPLATE_ID,
    {
      from_name: name,
      phone_number: phone,
      subject_type: type,
      message,
    },
    { publicKey: PUBLIC_KEY }
  );
}
