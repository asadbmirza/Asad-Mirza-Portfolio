/**
 * Shared text highlighting utilities.
 * Keeps component files DRY — import from here instead of duplicating.
 */

/** Wraps every occurrence of "Amazon" in the given text with Amazon-orange styling. */
export function highlightAmazon(text: string): React.ReactNode {
  if (!text.includes("Amazon")) return text;
  return text.split(/(Amazon)/g).map((part, i) =>
    part === "Amazon" ? (
      <span key={i} className="text-[#FF9900]">
        Amazon
      </span>
    ) : (
      part
    )
  );
}
