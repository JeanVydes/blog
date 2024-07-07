"use client"

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import articles from "./(articles)/articles";
import Article404 from "./(components)/404";
import { Article, randomIntFromInterval, setMetadata } from "./(articles)/article";
import Head from "next/head";
import Link from "next/link";

export default function ArticlePage() {
    const [article, setArticle] = useState<Article | null>(null);
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            const foundArticle = articles.find(article =>
                article.match_params.includes(params.id.toString())
            );

            if (!foundArticle) return;

            setArticle(foundArticle);
        }
    }, [params.id]);

    if (!params.id || !article) {
        return <Article404 />;
    }

    document.title = article.title;

    const metaTags = [
        { name: 'description', content: article.preview },
        { name: 'author', content: article.author },
        { name: 'keywords', content: article.tags.join(', ') },
        { name: 'date', content: article.date.toISOString() },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: article.title },
        { property: 'og:description', content: article.preview },
        { property: 'og:type', content: 'article' },
        { property: 'og:site_name', content: 'Jean Blog' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: article.title },
        { name: 'twitter:description', content: article.preview },
        { name: 'twitter:site', content: '@jeanblog' },
        { name: 'twitter:creator', content: '@jeanblog' }
    ];

    setMetadata(metaTags);

    let random_article = articles[randomIntFromInterval(1, articles.length - 1)];

    return (
        <div>
            <div className="w-full h-auto flex justify-center text-[#0f0f0f]">
                <article className="w-full md:w-2/3 lg:w-1/2">
                    <div className="flex flex-row items-center justify-between text-center px-6 fixed w-full md:w-2/3 lg:w-1/2 h-12 bg-[#fafafa]/60 backdrop-blur-sm">
                        <Link className="w-full h-12 grid place-items-center" href={"/"}>Home</Link>
                        <h1 className="w-full">Jean's Blog</h1>
                        <Link className="w-full h-12 grid place-items-center" href={`/article/${random_article.match_params[0]}`}>Random</Link>
                    </div>
                    <div className="px-4 md:px-6 lg:px-12 mt-12">
                        <div className="w-full text-sm opacity-60">
                            <p className="text-md text-center">Published by {article.author} at {article.date.toDateString()}</p>
                        </div>
                        <h1 className="text-2xl font-bold w-full pb-4 text-center">{article.title}</h1>
                        {article.content}
                        <div className="w-full flex flex-col justify-center h-14 items-center text-center py-24">
                            <span>Tags</span>
                            <div className="flex flex-row space-x-1 text-sm opacity-80 mb-6">
                                {article.tags.map((tag, index) => (
                                    <span key={index} className="mx-2">{tag}</span>
                                ))}
                            </div>
                            <span onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                alert("Link copied to clipboard!");
                            }} className="grid place-items-center text-center items-center hover:cursor-pointer focus:border py-2">Copy Link</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}