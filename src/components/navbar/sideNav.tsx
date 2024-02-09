"use client";

import { Category } from "@/app/posts/page";
import { Dispatch, SetStateAction } from "react";

export default function SideNav({ setCategory }) {
    const categories = [
        "All Posts",
        "my story",
        "frontend",
        "backend",
        "javascript",
    ];
    const handleClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => {
        setCategory(event.currentTarget.textContent);
    };
    return (
        <article>
            <h1 className="font-bold">Category</h1>
            <ul className="cursor-pointer">
                {categories.map((category, id) => {
                    return (
                        <li key={`${category}_${id}`} onClick={handleClick}>
                            {category}
                        </li>
                    );
                })}
            </ul>
        </article>
    );
}
