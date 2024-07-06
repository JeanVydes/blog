import * as NextLink from "next/link";

export function Title({ children }: any) {
    return (
        <h1 className="text-xl md:text-2xl font-bold py-2">{children}</h1>
    );
}

export function Subtitle({ children }: any) {
    return (
        <h1 className="text-lg md:text-xl font-semibold py-2">{children}</h1>
    );
}

export function Paragraph({ children }: any) {
    return (
        <p className="text-md md:text-sm py-2">{children}</p>
    );
}

export function Citate({ children }: any) {
    return (
        <p className="italic">{children}</p>
    );
}

export function Code({ children }: any) {
    return (
        <div className="px-0 md:px-4 lg:px-2">
            <pre className="bg-gray-800 text-white p-2 rounded-md overflow-x-auto">{children}</pre>
        </div>
    );
}

export function List({ children }: any) {
    return (
        <ul className="list-disc ml-12 text-md md:text-sm">{children}</ul>
    );
}

export function Bold({ children }: any) {
    return (
        <strong>{children}</strong>
    );
}

export function Italic({ children }: any) {
    return (
        <em>{children}</em>
    );
}

export function Underline({ children }: any) {
    return (
        <span className="underline">{children}</span>
    );
}

export function ListItem({ children }: any) {
    return (
        <li className="py-2">{children}</li>
    );
}

export function Link({ display, href }: any) {
    return (
        <NextLink.default className="text-cyan-600 underline" href={href} passHref>{display}</NextLink.default>
    );
}

export function Image({ src, alt }: any) {
    return (
        <div className="w-full h-auto px-4 rounded-md">
            <img src={src} alt={alt} className="w-full h-auto rounded-md" />
        </div>
    );
}

export function EmptyLine() {
    return (
        <div className="w-full h-4"></div>
    );
}

export function Banner({ src, alt }: any) {
    return (
        <div className="w-full h-[40vh] rounded-md bg-center bg-cover" style={{ backgroundImage: `url(${src})` }}>
            <div className="w-full h-full bg-black/20 grid place-content-center place-items-center">
                <h1 className="text-4xl font-bold text-white">{alt}</h1>
            </div>
        </div>
    );
}