import { getPosts } from "@/service/posts";

type Props = {
    params: {
        slug: string;
    };
};

export default function PostPage({ params }: Props) {
    return <h1>{decodeURIComponent(params.slug)}</h1>;
}

export async function generateStaticParams() {
    const posts = await getPosts();

    return posts.map((post) => ({
        slug: encodeURIComponent(post.name),
    }));
}
