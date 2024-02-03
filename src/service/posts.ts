import { promises as fs } from "fs";
import path from "path";

export async function getPosts() {
    const filePath = path.join(process.cwd(), "data", "posts.json");
    const rawData = await fs.readFile(filePath, "utf-8");
    const posts = JSON.parse(rawData);
    return posts;
}
