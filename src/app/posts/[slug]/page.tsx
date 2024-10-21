import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import {getPostMetadata} from "../../utils/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "articles/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const post = getPostContent(slug);
  return (
    <div className="flex flex-col items-center">
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <article className="prose text-black">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;