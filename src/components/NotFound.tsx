import { Link } from "@tanstack/react-router";

/**
 * Shared "not found" UI, used two ways:
 *
 *  1. As the root route's `notFoundComponent` (src/routes/__root.tsx) - the
 *     client-side fallback TanStack Router renders when a JS-loaded
 *     navigation doesn't match any route.
 *  2. As the `component` of a real `/404` route (src/routes/404.tsx) - a
 *     route that matches successfully (not a thrown notFound()), so static
 *     prerendering can render it to dist/client/404/index.html for hosts
 *     that need an actual 404 file (GitHub Pages, Cloudflare Pages, etc.).
 *     See scripts/generate-404.mjs.
 */
export function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>This page doesn&apos;t exist.</p>
      <Link to="/">Back home</Link>
    </div>
  );
}
