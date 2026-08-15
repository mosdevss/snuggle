import { createFileRoute } from "@tanstack/react-router";

import { NotFound } from "../components/NotFound";

// A real, matchable route (not a thrown notFound()) so static prerendering
// can render it successfully to dist/client/404/index.html. It's included
// in prerendering automatically by TanStack Start's default
// autoStaticPathsDiscovery (it has no path params), no extra `pages` config
// needed. See scripts/generate-404.mjs, which copies that file to
// dist/client/404.html for static hosts (GitHub Pages, Cloudflare Pages)
// that look for a 404 file at the site root.
export const Route = createFileRoute("/404")({
  component: NotFound,
});
