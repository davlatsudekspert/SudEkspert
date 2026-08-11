import { jsPDF } from "jspdf";

const STATUS_FLOW = ["Ko'rib chiqilmoqda", "Qabul qilindi", "Bajarildi"];

export function downloadAppealReceipt({ id, name, phone, type, message, status }) {
  const doc = new jsPDF();
  const currentIdx = Math.max(0, STATUS_FLOW.indexOf(status));

  doc.setTextColor(19, 40, 90);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("MUROJAAT HUJJATI", 20, 20);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(20, 20, 20);
  doc.text(`Murojaat raqami: ${id}`, 20, 35);
  doc.text(`Ism: ${name}`, 20, 45);
  doc.text(`Telefon: ${phone}`, 20, 55);
  doc.text(`Murojaat turi: ${type}`, 20, 65);
  doc.text(`Yuborilgan sana: ${new Date().toLocaleString("uz-UZ")}`, 20, 75);

  const lines = doc.splitTextToSize(`Murojaat matni: ${message}`, 170);
  doc.text(lines, 20, 88);
  const afterMessage = 88 + lines.length * 6 + 10;

  doc.setTextColor(19, 40, 90);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Holatlar tarixi", 20, afterMessage);
  doc.setFont("helvetica", "normal");

  STATUS_FLOW.forEach((stage, i) => {
    const y = afterMessage + 12 + i * 9;
    const reached = i <= currentIdx;
    doc.setDrawColor(19, 40, 90);
    doc.roundedRect(20, y - 4.5, 7, 7, 1, 1);
    if (reached) {
      doc.setFillColor(19, 40, 90);
      doc.roundedRect(20, y - 4.5, 7, 7, 1, 1, "F");
      doc.setTextColor(19, 40, 90);
    } else {
      doc.setTextColor(150, 150, 150);
    }
    doc.setFont("helvetica", reached ? "bold" : "normal");
    doc.setFontSize(11);
    doc.text(stage + (i === currentIdx ? "  (joriy holat)" : ""), 32, y);
    doc.setFont("helvetica", "normal");
  });

  doc.setTextColor(100, 100, 100);
  doc.setFontSize(9);
  doc.text(
    "Holatni kuzatish uchun murojaat raqamingizni saytdagi 'Murojaat holati' bo'limiga kiriting.",
    20,
    afterMessage + 45
  );
  doc.save(`murojaat-${id}.pdf`);
}
