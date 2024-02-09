"use client";
import { Category } from "@/app/posts/page";
import PostCard from "../common/postCard";
import { useEffect, useState } from "react";

export type Post = {
    name: string;
    description: string;
    date: string;
    image: string;
    category: string;
};

export default function Posts({ category }: { category: Category }) {
    const [posts, setPosts] = useState<Post[]>();
    useEffect(() => {
        (async () => {
            const response = await fetch("/api/posts");
            const { posts } = await response.json();
            setPosts(posts);
        })();
    }, []);

    return (
        <ul className="grid grid-cols-3 gap-3">
            {posts &&
                posts
                    .filter((post) => {
                        if (category === "All Posts") {
                            return post;
                        }
                        return post.category === category;
                    })
                    .map(({ image, name, description, date, category }, id) => {
                        return (
                            <li key={id}>
                                <PostCard
                                    imageSrc={image}
                                    title={name}
                                    desc={description}
                                    date={date}
                                    category={category}
                                />
                            </li>
                        );
                    })}
        </ul>
    );
}
