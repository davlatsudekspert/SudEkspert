import { Helmet } from "react-helmet-async";

const BASE = "Andijon Forensic — Respublika Sud Tibbiy Ekspertiza Ilmiy-Amaliy Markazi Andijon Filiali";

export default function SeoHead({ title, description }) {
  const fullTitle = title ? `${title} | ${BASE}` : BASE;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  );
}
