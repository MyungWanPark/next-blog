import { promises as fs } from "fs";
import path from "path";

type Post = {
    name: string;
    description: string;
    date: string;
    image: string;
    category: string;
};

export async function getPosts(): Promise<Post[]> {
    const filePath = path.join(process.cwd(), "data", "posts.json");
    const rawData = await fs.readFile(filePath, "utf-8");
    const posts = JSON.parse(rawData);
    return posts;
}
