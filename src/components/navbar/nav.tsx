import Link from "next/link";

const COMMON_CSS = "p-2";

export default function Nav() {
    const blogName = "Wans Blog";
    const categories = ["home", "about", "posts", "contact"];
    return (
        <nav className="flex justify-between">
            <span className={`block ${COMMON_CSS}`}>{blogName}</span>
            <ul className="flex">
                {categories.map((category, id) => {
                    return (
                        <li key={id} className={`flex ${COMMON_CSS}`}>
                            <Link href={`/${category}`}>{category}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
