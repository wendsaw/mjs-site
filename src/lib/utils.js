export function cn(...xs) {
  return xs.filter(Boolean).join(" ");
}

export function formatPhoneForTel(phone) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export function formatMailTo(email, subject = "", body = "") {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return `mailto:${email}${subject || body ? `?subject=${s}&body=${b}` : ""}`;
}