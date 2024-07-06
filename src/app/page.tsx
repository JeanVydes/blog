import Image from "next/image";
import Link from "next/link";
import { Card, CardCredits } from "./(components)/components";
import articles from "./article/[id]/(articles)/articles";
import { randomIntFromInterval } from "./article/[id]/(articles)/article";

export default function Home() {
    // skip 0 because is test article
    let featured = articles[1];
    let first = articles[randomIntFromInterval(1, articles.length - 1)];
    let second = articles[randomIntFromInterval(1, articles.length - 1)];
    let third = articles[randomIntFromInterval(1, articles.length - 1)];
    let fourth = articles[randomIntFromInterval(1, articles.length - 1)];
        

    return (
        <div className="w-full h-auto md-:h-screen lg:h-screen">
            <div className="w-full h-screen grid-cols-5 grid-rows-5 p-4 gap-4 hidden md:hidden lg:grid">
                <Card className="col-span-2 row-span-3" title={featured.title} bg={featured.banner} to={`/article/${featured.match_params[0]}`} />
                <Card className="col-span-2 row-span-2" title={first.title} bg={first.banner} to={`/article/${first.match_params[0]}`} />
                <Card className="col-span-1 row-span-4" title={second.title} bg={second.banner} to={`/article/${second.match_params[0]}`} />
                <Card className="col-span-2 row-span-3" title={third.title} bg={third.banner} to={`/article/${third.match_params[0]}`} />
                <Card className="col-span-2 row-span-2" title={fourth.title} bg={fourth.banner} to={`/article/${fourth.match_params[0]}`} />
                <CardCredits className="col-span-1 row-span-1" />
            </div>

            <div className="w-full h-screen grid grid-cols-3 grid-rows-4 p-4 gap-4 hidden md:grid lg:hidden">
                <Card className="col-span-2 row-span-2" title={featured.title} bg={featured.banner} to={`/article/${featured.match_params[0]}`} />
                <Card className="col-span-1 row-span-2" title={first.title} bg={first.banner} to={`/article/${first.match_params[0]}`} />
                <Card className="col-span-1 row-span-2" title={second.title} bg={second.banner} to={`/article/${second.match_params[0]}`} />
                <Card className="col-span-1 row-span-2" title={third.title} bg={third.banner} to={`/article/${third.match_params[0]}`} />
                <Card className="col-span-1 row-span-1" title={fourth.title} bg={fourth.banner} to={`/article/${fourth.match_params[0]}`} />
                <CardCredits className="col-span-1 row-span-1" />
            </div>

            <div className="w-full h-auto grid grid-cols-2 p-4 gap-4 grid md:hidden lg:hidden">
                <Card className="col-span-2 h-72" title={featured.title} bg={featured.banner} to={`/article/${featured.match_params[0]}`} />
                <Card className="h-72" title={first.title} bg={first.banner} to={`/article/${first.match_params[0]}`} />
                <Card className="row-span-2 h-full" title={second.title} bg={second.banner} to={`/article/${second.match_params[0]}`} />
                <Card className="h-72" title={third.title} bg={third.banner} to={`/article/${third.match_params[0]}`} />
                <Card className="col-span-2 h-72" title={fourth.title} bg={fourth.banner} to={`/article/${fourth.match_params[0]}`} />
                <CardCredits className="h-32 col-span-2" />
            </div>
        </div>
    );
}