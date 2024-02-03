import FeaturedPost from "@/components/featuredPost/featuredPost";
import Profile from "@/components/profile/profile";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <Profile />
            <FeaturedPost />
        </main>
    );
}
