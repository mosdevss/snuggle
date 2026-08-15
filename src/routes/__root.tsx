import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import { NotFound } from '../components/NotFound'

import appCss from '../styles/styles.scss?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="app-layout">
          <main className="app-layout__main">{children}</main>
        </div>

        <Scripts />
      </body>
    </html>
  )
}
