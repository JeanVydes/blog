"use client"

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import articles from "./(articles)/articles";
import Article404 from "./(components)/404";
import { Article } from "./(articles)/article";
import Head from "next/head";

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

    return (
        <div>
            <div className="w-full h-screen flex justify-center text-[#0f0f0f]">
                <article className="w-full md:w-2/3 lg:w-1/2 border-r border-r-[#0f0f0f] border-l border-l-[#0f0f0f] px-4 md:px-6 lg:px-12 overflow-y-auto">
                    <h1 className="text-2xl font-bold w-full py-4 text-center">{article.title}</h1>
                    <div className="w-full">
                        <p className="text-md text-center">Published by {article.author} at {article.date.toDateString()}</p>
                    </div>
                    {article.content}
                </article>
            </div>
        </div>
    );
}

export function setMetadata(metaTags: any) {
    metaTags.forEach((tag: any) => {
        let meta: HTMLMetaElement | null;
        if (tag.name) {
            meta = document.querySelector(`meta[name="${tag.name}"]`);
        } else if (tag.property) {
            meta = document.querySelector(`meta[property="${tag.property}"]`);
        } else {
            return;
        }

        if (meta) {
            meta.content = tag.content;
        } else {
            meta = document.createElement('meta');
            if (tag.name) {
                meta.name = tag.name;
            }
            if (tag.property) {
                meta.setAttribute('property', tag.property);
            }
            meta.content = tag.content;
            document.head.appendChild(meta);
        }
    });
}