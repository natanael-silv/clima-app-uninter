import fs from "fs";
import matter from "gray-matter";

export interface PostMetadata {
    title: string;
    date: string;
    subtitle: string;
    slug: string;
  }

export const getPostMetadata = (): PostMetadata[] => {
  const folder = "articles/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`articles/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};