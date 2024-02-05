import Image from "next/image";
import Link from "next/link";

type Props = {
    imageSrc: string;
    title: string;
    desc: string;
    date: string;
};

export default function PostCard({ imageSrc, title, desc, date }: Props) {
    const imageDir = "/images/posts";

    return (
        <article className="py-2 shadow-md rounded-md">
            <Link href={`/posts/${encodeURIComponent(title)}`}>
                <Image
                    src={`${imageDir}/${imageSrc}`}
                    alt={title}
                    width={800}
                    height={200}
                    className="aspect-video rounded-t-md"
                />
                <p className="text-right pr-2 text-sm">{date}</p>
                <h1 className="text-center font-semibold">{title}</h1>
                <p className="text-center text-sm">{desc}</p>
            </Link>
        </article>
    );
}
