import Head from "next/head";

export default function HeadDefault(props) {
  return(
    <Head>
      <title>{(props.title || 'Home') + ' | Promo faster'}</title>
      <meta name="description" content="Descrição" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet" />
    </Head>
  )
}

HeadDefault.defau