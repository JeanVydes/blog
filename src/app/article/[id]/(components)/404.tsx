import Link from "next/link"

export default function Article404() {
    return (
        <div className="w-full h-screen grid place-content-center place-items-center text-[#0f0f0f]">
            <p className="text-lg">The article you are looking for does not exist.</p>
            <Link href="/">
                <div className="py-2 px-20 rounded-lg bg-[#0f0f0f]/70 hover:bg-[#0f0f0f]/80 backdrop-blur-sm text-[#f7f7f7] hover:cursor-pointer">
                    Home
                </div>
            </Link>
        </div>
    );
}