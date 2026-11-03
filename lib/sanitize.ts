import sanitizeHtml from "sanitize-html";

const SAFE_SCHEMES = ["http", "https"];

const BLOG_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: [
    "h1", "h2", "h3", "h4", "h5", "h6",
    "p", "br", "hr", "div", "span",
    "ul", "ol", "li",
    "a", "img", "figure", "figcaption",
    "blockquote", "code", "pre",
    "strong", "b", "em", "i", "u", "s", "sub", "sup", "mark",
    "table", "thead", "tbody", "tfoot", "tr", "th", "td", "caption",
  ],
  allowedAttributes: {
    a: ["href", "title", "target", "rel"],
    img: ["src", "alt", "title", "width", "height"],
    th: ["colspan", "rowspan"],
    td: ["colspan", "rowspan"],
    "*": ["dir", "lang"],
  },
  allowedSchemes: SAFE_SCHEMES,
  allowedSchemesByTag: { a: [...SAFE_SCHEMES, "mailto"], img: SAFE_SCHEMES },
  allowProtocolRelative: false,
  disallowedTagsMode: "discard",
  // Drop the whole element (content included) for dangerous containers.
  nonTextTags: ["script", "style", "textarea", "option", "noscript", "iframe", "object", "embed"],
  transformTags: {
    a: (tagName, attribs) => {
      const next = { ...attribs };
      if (next.target === "_blank") {
        next.rel = "noopener noreferrer";
      } else {
        delete next.target;
        delete next.rel;
      }
      return { tagName, attribs: next };
    },
  },
};

/** Sanitize untrusted backend HTML for safe rendering via dangerouslySetInnerHTML. */
export function sanitizeBlogHtml(html: string | null | undefined): string {
  if (!html) return "";
  return sanitizeHtml(html, BLOG_OPTIONS);
}
