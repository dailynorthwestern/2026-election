export const escapeHTML = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function safeURL(value = '') {
  return /^(https?:\/\/|mailto:|#|\/(?!\/))/.test(value) ? value : '#';
}
// Intentionally limited inline Markdown. Raw HTML is always escaped.
export function inline(text = '') {
  const pattern = /\[([^\]]+)\]\(([^\s)]+)\)|\*\*(.+?)\*\*|\*(.+?)\*/g;
  let result = '', start = 0;
  for (const match of text.matchAll(pattern)) {
    result += escapeHTML(text.slice(start, match.index));
    result += match[1] !== undefined ? `<a href="${escapeHTML(safeURL(match[2]))}">${inline(match[1])}</a>` : match[3] !== undefined ? `<strong>${inline(match[3])}</strong>` : `<em>${inline(match[4])}</em>`;
    start = match.index + match[0].length;
  }
  return result + escapeHTML(text.slice(start));
}
export const asset = (path) => typeof path === 'string' && path.startsWith('/') && !path.startsWith('//') ? `${import.meta.env?.BASE_URL || '/'}${path.slice(1)}` : path;
