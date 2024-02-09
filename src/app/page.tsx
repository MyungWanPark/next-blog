import FeaturedPost from "@/components/post/featuredPost";
import Profile from "@/components/profile/profile";
import MayLikePosts from "@/components/youMayLikePost/posts";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <Profile />
            <FeaturedPost />
            <MayLikePosts />
        </main>
    );
}
