import { getPosts } from "@/service/posts";

export default async function FeaturedPost() {
    const postData = await getPosts();
    console.log("postData = ", postData);
    return <h1></h1>;
}
