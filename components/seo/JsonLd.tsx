type JsonLdData = Record<string, unknown> | Record<string, unknown>[];

/** Serializes JSON-LD safely: `<` is escaped so content can never close the script tag. */
export function serializeJsonLd(data: JsonLdData): string {
  return JSON.stringify(data).split("<").join("\\u003c");
}

export default function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
