import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="title" content="Overwatch 2 Stadium Database" />
        <meta name="description" content="Overwatch 2 Unofficial Stadium Database" />
        <meta property="og:title" content="Overwatch 2 Stadium Database" />
        <meta property="og:description" content="Overwatch 2 Unofficial Stadium Database" />
        <meta property="og:image" content="https://overwatch-stadium-db.vercel.app/thumbnail.webp" />
        <meta property="og:url" content="https://overwatch-stadium-db.vercel.app/" />
        <meta property="twitter:title" content="Overwatch 2 Stadium Database" />
        <meta property="twitter:description" content="Overwatch 2 Unofficial Stadium Database" />
        <meta property="twitter:image" content="https://overwatch-stadium-db.vercel.app/thumbnail.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/fontawesome.min.css" integrity="sha512-d0olNN35C6VLiulAobxYHZiXJmq+vl+BGIgAxQtD5+kqudro/xNMvv2yIHAciGHpExsIbKX3iLg+0B6d0k4+ZA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/solid.min.css" integrity="sha512-pZlKGs7nEqF4zoG0egeK167l6yovsuL8ap30d07kA5AJUq+WysFlQ02DLXAmN3n0+H3JVz5ni8SJZnrOaYXWBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/brands.min.css" integrity="sha512-8RxmFOVaKQe/xtg6lbscU9DU0IRhURWEuiI0tXevv+lXbAHfkpamD4VKFQRto9WgfOJDwOZ74c/s9Yesv3VvIQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preload" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.1/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.1/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css" />
      </Head>
      <body className="antialiased min-w-screen min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
