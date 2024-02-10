"use client";

export default function SideNav({ setCategory }: any) {
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
        const target = event.currentTarget;
        setCategory(target.textContent);
        handleCategoryClick(target);
    };

    const handleCategoryClick = (target: EventTarget & HTMLLIElement) => {
        const lists = document.querySelectorAll(".category-list");
        lists.forEach((list) => {
            list.classList.remove("text-blue-400");
            list.classList.remove("underline");
        });
        target.classList.add("text-blue-400");
        target.classList.add("underline");
    };
    return (
        <article className="w-56 text-center sticky top-0 h-40">
            <h1 className="font-bold">Category</h1>
            <ul className="cursor-pointer">
                {categories.map((category, id) => {
                    return (
                        <li
                            key={`${category}_${id}`}
                            onClick={handleClick}
                            className="category-list hover:underline hover:text-blue-400"
                        >
                            {category}
                        </li>
                    );
                })}
            </ul>
        </article>
    );
}
