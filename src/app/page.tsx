import Image from "next/image";
import Link from "next/link";
import { Card, CardCredits } from "./(components)/components";
import articles from "./article/[id]/(articles)/articles";
import { getUniqueArticlesByMatchParams, randomIntFromInterval } from "./article/[id]/(articles)/article";

export default function Home() {
    // skip 0 because is test article
    let featured = articles[1];

    let available_articles = articles.slice(2);
    let uniqueArticles = getUniqueArticlesByMatchParams(available_articles, 4);
    let first = uniqueArticles[0];
    let second = uniqueArticles[1];
    let third = uniqueArticles[2];
    let fourth = uniqueArticles[3];
        
    return (
        <div className="max-w-screen">
            <div className="w-full h-[40vh] grid place-items center place-content-center text-center items-center relative flex flex-col items-center justify-center">
                <h3 className="text-[10vh] absolute w-full text-center font-bold tracking-[0.3em]">Jean Blog</h3>
            </div>
            <div className="w-full h-auto md:h-screen lg:h-screen">
                <div className="w-full h-screen grid-cols-5 grid-rows-5 p-4 gap-4 hidden md:hidden lg:grid">
                    <Card featured className="col-span-2 row-span-3" title={featured.title || ""} bg={featured.banner || ""} to={`/article/${featured.match_params[0]  || ""}`} />
                    <Card className="col-span-2 row-span-2" title={first.title || ""} bg={first.banner || ""} to={`/article/${first.match_params[0]  || ""}`} />
                    <Card className="col-span-1 row-span-5" title={second.title || ""} bg={second.banner || ""} to={`/article/${second.match_params[0]  || ""}`} />
                    <Card className="col-span-2 row-span-3" title={third.title || ""} bg={third.banner || ""} to={`/article/${third.match_params[0]  || ""}`} />
                    <Card className="col-span-2 row-span-2" title={fourth.title || ""} bg={fourth.banner || ""} to={`/article/${fourth.match_params[0]  || ""}`} />
                </div>

                <div className="w-full h-screen grid grid-cols-3 grid-rows-4 p-4 gap-4 hidden md:grid lg:hidden">
                    <Card featured className="col-span-2 row-span-2" title={featured.title || ""} bg={featured.banner || ""} to={`/article/${featured.match_params[0]  || ""}`} />
                    <Card className="col-span-1 row-span-2" title={first.title || ""} bg={first.banner || ""} to={`/article/${first.match_params[0] || ""}`} />
                    <Card className="col-span-1 row-span-2" title={second.title || ""} bg={second.banner || ""} to={`/article/${second.match_params[0] || ""}`} />
                    <Card className="col-span-1 row-span-2" title={third.title || ""} bg={third.banner || ""} to={`/article/${third.match_params[0] || ""}`} />
                    <Card className="col-span-1 row-span-2" title={fourth.title || ""} bg={fourth.banner || ""} to={`/article/${fourth.match_params[0] || ""}`} />
                </div>

                <div className="w-full h-auto grid grid-cols-2 p-4 gap-4 grid md:hidden lg:hidden">
                    <Card featured className="col-span-2 h-72" title={featured.title || ""} bg={featured.banner || ""} to={`/article/${featured.match_params[0] || ""}`} />
                    <Card className="h-72" title={first.title || ""} bg={first.banner || ""} to={`/article/${first.match_params[0] || ""}`} />
                    <Card className="row-span-2 h-full" title={second.title || ""} bg={second.banner} to={`/article/${second.match_params[0] || ""}`} />
                    <Card className="h-72" title={third.title || ""} bg={third.banner || ""} to={`/article/${third.match_params[0] || ""}`} />
                    <Card className="col-span-2 h-72" title={fourth.title || ""} bg={fourth.banner || ""} to={`/article/${fourth.match_params[0] || ""}`} />
                </div>
            </div>
            <div className="w-full h-screen text-center items-center relative overflow-hidden">
                <div className="overflow-hidden w-full h-screen w-full">
                    <iframe className="block ml-auto mr-auto overflow-hidden t-0 r-0 l-0 b-0 w-full h-screen" scrolling="no"
                       src="https://53f307a9.sibforms.com/serve/MUIFAGw_IYJIETYeG0Qp6xu28y17oS5PQJQsvp9dskBDAA1E4glEkr2NSRI9FxbhuwGX4IzyLUmlmtkfmQ-qtMw_EAllSG9UKTVPCPzt_sM2bnAYYa6ULwvejfndE-g19Ew_fF8_iZqn5qvXgTZNX5UUD1QXGuZ5Pb_EU5dAINDVSBszXaskJKgGDNN3OxYBern5HZ_GNdCI1xa_"></iframe>
                </div>
            </div>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {articles.slice(1).reverse().map((article, index) => <>
                    <Card className="col-span-1" title={article.title || ""} bg={article.banner || ""} to={`/article/${article.match_params[0]  || ""}`} />
                </>)}
            </div>
            <div className="w-full flex flex-row items-center h-screen text-center justify-center">
                <span>a blog by Jean</span>
            </div>
        </div>
    );
}