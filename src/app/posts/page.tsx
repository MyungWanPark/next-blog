"use client";

import SideNav from "@/components/navbar/sideNav";
import Posts from "@/components/post/posts";
import { useState } from "react";

export type Category =
    | "All Posts"
    | "my story"
    | "frontend"
    | "backend"
    | "javascript";

export default function PostsPage() {
    const [category, setCategory] = useState<Category>("All Posts");
    console.log("category = ", category);
    return (
        <section className="flex">
            <Posts category={category} />
            <SideNav setCategory={setCategory} />
        </section>
    );
}
