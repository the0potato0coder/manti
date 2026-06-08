import Script from "next/script";

/**
 * Injects GA4 (gtag.js) tracking scripts into the page.
 *
 * - Reads the Measurement ID from NEXT_PUBLIC_GA_MEASUREMENT_ID.
 * - Renders nothing when the env var is missing (safe for dev/preview).
 * - Uses `afterInteractive` strategy so the scripts load after hydration
 *   without blocking first paint.
 * - Disables the automatic page_view so RouteChangeTracker can fire it
 *   manually on every client-side navigation.
 */
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!gaId) return null;

  return (
    <>
      <Script
        id="ga-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="ga-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', { send_page_view: false });
          `,
        }}
      />
    </>
  );
}
