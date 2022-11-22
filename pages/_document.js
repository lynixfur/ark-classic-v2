import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <link rel="icon" type="image/png" href="https://cdn.discordapp.com/attachments/885607142051184700/989491522225463316/unknown.png"></link>
      </Head>
      <body className="bg-gray-900 dark">
      <div class="hidden bg-gray-800 border-l-4 border-red-500 text-gray-300 p-4 fixed bottom-0 md:bottom-10 right-0 md:right-10 z-50" role="alert">
        <p class="font-bold animate-pulse">Alert! Intermittent Web Server Issues</p>
        <p>We are currently facing server issues and is currently trying to resolve them as soon as possible!</p>
      </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}