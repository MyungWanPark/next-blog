import { Post } from "@/service/posts";

type Props = {
    params: {
        slug: string;
    };
};

export default function PostPage({ params }: Props) {
    return <h1>{decodeURIComponent(params.slug)}</h1>;
}

export async function generateStaticParams() {
    const response = await fetch("api/posts");
    const posts: Post[] = await response.json();

    return posts.map((post) => ({
        slug: encodeURIComponent(post.name),
    }));
}
