import { useEffect } from "react";

type PageMetaProps = {
  title: string;
  description: string;
};

/**
 * Lightweight replacement for TanStack Start's per-route `head()` config.
 * Sets the document title and description meta tag on mount.
 */
export function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);
  }, [title, description]);

  return null;
}
