import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="w-full h-auto md-:h-screen lg:h-screen">
            <div className="w-full h-screen grid-cols-5 grid-rows-5 p-4 gap-4 hidden md:hidden lg:grid">
                <Card className="col-span-2 row-span-3" title="A new way to programming" bg="https://i.pinimg.com/564x/90/1c/78/901c78ba1616782f6634dc8183e98460.jpg" />
                <Card className="col-span-2 row-span-2" title="The art of state of API backend" bg="https://i.pinimg.com/564x/b3/1f/f0/b31ff031bf8f0aab74bd9f09bb19500d.jpg" />
                <Card className="col-span-1 row-span-4" title="Rust Superpowers" bg="https://i.pinimg.com/564x/ae/22/bb/ae22bb15adcff06955869d61fe6301e5.jpg" />
                <Card className="col-span-2 row-span-3" title="The depressive state of NextJS" bg="https://i.pinimg.com/564x/86/50/17/8650179d91d1af6fe6628f6d27d17185.jpg" />
                <Card className="col-span-2 row-span-2" title="No more programmers" bg="https://i.pinimg.com/736x/7e/c7/8f/7ec78f06c2f461e7566cb88b87c42c47.jpg" />
                <CardCredits className="col-span-1 row-span-1" />
            </div>

            <div className="w-full h-screen grid grid-cols-3 grid-rows-4 p-4 gap-4 hidden md:grid lg:hidden">
                <Card className="col-span-2 row-span-2" title="A new way to programming" bg="https://i.pinimg.com/564x/90/1c/78/901c78ba1616782f6634dc8183e98460.jpg" />
                <Card className="col-span-1 row-span-2" title="The art of state of API backend" bg="https://i.pinimg.com/564x/b3/1f/f0/b31ff031bf8f0aab74bd9f09bb19500d.jpg" />
                <Card className="col-span-1 row-span-2" title="Rust Superpowers" bg="https://i.pinimg.com/564x/ae/22/bb/ae22bb15adcff06955869d61fe6301e5.jpg" />
                <Card className="col-span-1 row-span-2" title="The depressive state of NextJS" bg="https://i.pinimg.com/564x/86/50/17/8650179d91d1af6fe6628f6d27d17185.jpg" />
                <Card className="col-span-1 row-span-1" title="No more programmers" bg="https://i.pinimg.com/736x/7e/c7/8f/7ec78f06c2f461e7566cb88b87c42c47.jpg" />
                <CardCredits className="col-span-1 row-span-1" />
            </div>

            <div className="w-full h-auto grid grid-cols-2 p-4 gap-4 grid md:hidden lg:hidden">
                <Card className="col-span-2 h-72" title="A new way to programming" bg="https://i.pinimg.com/564x/90/1c/78/901c78ba1616782f6634dc8183e98460.jpg" />
                <Card className="h-72" title="The art of state of API backend" bg="https://i.pinimg.com/564x/b3/1f/f0/b31ff031bf8f0aab74bd9f09bb19500d.jpg" />
                <Card className="row-span-2 h-full" title="Rust Superpowers" bg="https://i.pinimg.com/564x/ae/22/bb/ae22bb15adcff06955869d61fe6301e5.jpg" />
                <Card className="h-72" title="The depressive state of NextJS" bg="https://i.pinimg.com/564x/86/50/17/8650179d91d1af6fe6628f6d27d17185.jpg" />
                <Card className="col-span-2 h-72" title="No more programmers" bg="https://i.pinimg.com/736x/7e/c7/8f/7ec78f06c2f461e7566cb88b87c42c47.jpg" />
                <CardCredits className="h-32 col-span-2" />
            </div>
        </div>
    );
}

export function Card({ className, title, bg }: {
    className?: string;
    title: string;
    bg: string;
}) {
    return (
        <div className={`${className} rounded-lg bg-cover bg-center`} style={{ backgroundImage: `url(${bg})` }}>
            <div className="w-full h-full m-0 p-0 md:p-4 lg:p-8 bg-black/40 hover:backdrop-blur-sm grid grid-cols-1 place-items-center place-content-center text-center rounded-lg break-normal gap-y-2">
                <p className="text-xl md:text-2xl lg:text-4xl text-center text-[#f0f0f0] font-bold break-normal text-ellipsis">{title}</p>

                <div className="py-2 px-12 rounded-lg bg-[#f0f0f0]/30 hover:bg-[#f0f0f0]/50 backdrop-blur-sm text-[#f7f7f7] hover:cursor-pointer">
                    Read
                </div>
            </div>
        </div>
    )
}


export function CardCredits({ className }: {
    className?: string;
}) {
    return (
        <div className={`${className} rounded-lg bg-cover bg-center`}>
            <div className="w-full h-full m-0 p-0 md:p-4 lg:p-8 hover:backdrop-blur-sm grid grid-cols-1 place-items-center place-content-center text-center rounded-lg break-normal gap-y-2 text-center text-[#0f0f0f]">
                <p className="text-md md:text-md lg:text-lg font-semibold">Jean</p>
            </div>
        </div>
    )
}