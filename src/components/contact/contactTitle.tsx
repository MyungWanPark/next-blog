import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function ContactTitle() {
    return (
        <>
            <h1 className="font-bold text-2xl p-2">Contact me</h1>
            <p>info@gmail.com</p>
            <div className="grid grid-cols-3 gap-3 text-2xl p-1">
                <Link href={"https://github.com/"}>
                    <FaGithub />
                </Link>
                <Link href={"https://www.linkedin.com/"}>
                    <FaLinkedin />
                </Link>
                <Link href={"https://www.youtube.com/"}>
                    <FaYoutube />
                </Link>
            </div>
            <h1 className="font-bold text-2xl p-2">Or Send me an email</h1>
        </>
    );
}
