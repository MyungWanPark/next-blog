import Image from "next/image";
import profilePic from "../../../public/images/profile.jpg";
import Link from "next/link";

export default function Profile() {
    return (
        <article className="flex flex-col items-center">
            <Image
                src={profilePic}
                alt="profile picture"
                width={200}
                height={200}
                className="rounded-full aspect-square"
            />
            <h1 className="text-2xl font-bold">Hi, I&#39;m myungwan</h1>
            <h3 className="text-lg">Full stack engineer</h3>
            <p>유용한 기능을 개발하는 사람</p>
            <Link
                href={"/contact"}
                className="bg-yellow-600 px-1 rounded-md text-white"
            >
                Contact me!
            </Link>
        </article>
    );
}
