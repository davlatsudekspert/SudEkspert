import { jsPDF } from "jspdf";

export function downloadAppealReceipt({ id, name, phone, type, message }) {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("Murojaat tasdiqnomasi", 20, 20);
  doc.setFontSize(11);
  doc.text(`Murojaat raqami: ${id}`, 20, 35);
  doc.text(`Ism: ${name}`, 20, 45);
  doc.text(`Telefon: ${phone}`, 20, 55);
  doc.text(`Turi: ${type}`, 20, 65);
  doc.text(`Sana: ${new Date().toLocaleString("uz-UZ")}`, 20, 75);
  const lines = doc.splitTextToSize(`Matn: ${message}`, 170);
  doc.text(lines, 20, 88);
  doc.setFontSize(9);
  doc.text(
    "Holatni tekshirish uchun murojaat raqamingizni saytdagi 'Murojaat holati' bo'limiga kiriting.",
    20,
    120
  );
  doc.save(`murojaat-${id}.pdf`);
}
