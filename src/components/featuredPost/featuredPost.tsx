import { getPosts } from "@/service/posts";
import PostCard from "../common/postCard";

export default async function FeaturedPost() {
    const postData = await getPosts();
    return (
        <section className="p-2">
            <h1 className="font-bold">Featured Posts</h1>
            <ul className="grid grid-cols-3 gap-3">
                {postData.map(({ image, name, description, date }, id) => {
                    return (
                        <li key={id}>
                            <PostCard
                                imageSrc={image}
                                title={name}
                                desc={description}
                                date={date}
                            />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
