import React from 'react';
import Head from 'next/head';

export default function Meta() {
    const title = 'Lingadevaru H P | AI and Blockchain Portfolio';
    const description = 'Lingadevaru H P portfolio: MCA student focused on Blockchain Systems, LLM fine-tuning, and AI-driven applications.';
    const url = 'https://lingadevaru.in';

    return (
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="author" content="Lingadevaru H P (lingadevaruhp)" />
            <meta name="keywords" content="lingadevaru, lingadevaruhp, blockchain portfolio, solana developer, llm fine tuning, ai engineer" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            <meta name="image" content="images/logos/fevicon.png" />
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
            <meta itemProp="image" content="images/logos/fevicon.png" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:site" content="@lingadevaruhp" />
            <meta name="twitter:creator" content="@lingadevaruhp" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />

            <meta name="og:title" content={title} />
            <meta name="og:description" content={description} />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content={url} />
            <meta name="og:site_name" content="Lingadevaru Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
        </Head>
    );
}
