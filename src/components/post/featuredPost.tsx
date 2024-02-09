import Posts from "./posts";

export default async function FeaturedPost() {
    return (
        <section className="p-2">
            <h1 className="font-bold">Featured Posts</h1>
            <Posts category="All Posts" />
        </section>
    );
}
