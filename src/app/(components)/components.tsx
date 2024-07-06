import Link from "next/link";

export function Card({ className, title, bg, to }: {
    className?: string;
    title: string;
    bg: string;
    to: string
}) {
    return (
        <Link href={to} className={`${className} rounded-lg bg-cover bg-center`} style={{ backgroundImage: `url(${bg})` }}>
            <div className="w-full h-full m-0 p-0 md:p-4 lg:p-8 bg-black/40 hover:backdrop-blur-sm grid grid-cols-1 place-items-center place-content-center text-center rounded-lg break-normal gap-y-2">
                <p className="text-xl md:text-2xl lg:text-4xl text-center text-[#f0f0f0] font-bold break-normal text-ellipsis">{title}</p>

                <div className="py-2 px-12 rounded-lg bg-[#f0f0f0]/30 hover:bg-[#f0f0f0]/50 backdrop-blur-sm text-[#f7f7f7] hover:cursor-pointer">
                    Read
                </div>
            </div>
        </Link>
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