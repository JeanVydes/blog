export interface Article {
    match_params: string[];
    title: string;
    content: any;
    author: string;
    date: Date;
    tags: string[];
    preview: string;
    banner: string;
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

export function randomIntFromInterval(min: any, max: any) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export function getUniqueArticlesByMatchParams(articles: any, numArticles: number) {
    let uniqueMatchParams = new Set();
    let uniqueArticles = [];

    while (uniqueMatchParams.size < numArticles) {
        let randomIndex = randomIntFromInterval(0, articles.length - 1);
        let selectedArticle = articles[randomIndex];
        let matchParams = selectedArticle.match_params[0]; // Assuming match_params contains unique IDs

        if (!uniqueMatchParams.has(matchParams)) {
            uniqueMatchParams.add(matchParams);
            uniqueArticles.push(selectedArticle);
        }
    }

    return uniqueArticles;
}