"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a GA4 `page_view` event on every client-side route change.
 *
 * Next.js App Router performs SPA-style navigations that don't trigger a
 * full page reload, so the default gtag.js snippet (which only fires on
 * hard loads) would miss those transitions.  This component bridges that
 * gap by listening to pathname / search-param changes via Next.js hooks
 * and calling `window.gtag()` accordingly.
 *
 * Renders no visible UI — purely a side-effect hook.
 */
function RouteChangeTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    const url = searchParams.size
      ? `${pathname}?${searchParams.toString()}`
      : pathname;

    window.gtag("event", "page_view", {
      page_path: url,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}

/**
 * Wrapper that satisfies Next.js requirement for `useSearchParams` to be
 * rendered inside a `<Suspense>` boundary.
 */
export default function RouteChangeTracker() {
  return (
    <Suspense fallback={null}>
      <RouteChangeTrackerInner />
    </Suspense>
  );
}
