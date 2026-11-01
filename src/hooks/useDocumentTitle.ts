import { useEffect } from 'react';

const SITE_NAME = 'FGM Gold Mining Limited';

/**
 * Sets `document.title` for the current page ("About · FGM Gold Mining Limited").
 * Pass `undefined` for the home page to show just the site name.
 */
export function useDocumentTitle(pageTitle?: string): void {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} · ${SITE_NAME}` : SITE_NAME;
  }, [pageTitle]);
}
