import Image from "next/image";
import Link from "next/link";
import { Card, CardCredits } from "./(components)/components";

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