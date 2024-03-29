import Image from "next/image";
import Link from "next/link";

type Props = {
    imageSrc: string;
    title: string;
    desc: string;
    date: string;
    category: string;
};

export default function PostCard({
    imageSrc,
    title,
    desc,
    date,
    category,
}: Props) {
    const imageDir = "/images/posts";
    return (
        <article className="pb-2 shadow-md rounded-md">
            <Link href={`/posts/${encodeURIComponent(title)}`}>
                <Image
                    src={`${imageDir}/${imageSrc}`}
                    alt={title}
                    width={600}
                    height={300}
                    className="aspect-video rounded-t-md"
                />
                <p className="text-right pr-2 text-sm">{date}</p>
                <h1 className="text-center font-semibold">{title}</h1>
                <p className="text-center text-sm">{desc}</p>
                <div className="flex justify-center my-2">
                    <span className="text-sm bg-green-500 px-2 rounded-md text-white">
                        {category}
                    </span>
                </div>
            </Link>
        </article>
    );
}
