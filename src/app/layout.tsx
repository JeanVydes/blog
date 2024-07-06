import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";

import { SpeedInsights } from "@vercel/speed-insights/next"

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jean Blog",
    description: "Explore a variety of topics on this blog, with a deep dive into the world of technology and programming. Find insightful articles, helpful tutorials, and engaging discussions on everything from the latest gadgets to coding best practices. Dive in and expand your knowledge base!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="scroll-smooth overscroll-none" lang="en">
            <Head>
                <title>{metadata.title?.toString()}</title>
                <meta name="description" content={metadata.description?.toString()} key="description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className={`w-full max-h-screen ${font.className} text-md text-[#f0f0f0]`}>
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}
