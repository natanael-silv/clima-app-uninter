import Link from "next/link";
import { PostMetadata } from "../utils/getPostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="text-black max-w-[300px] shadow-md p-6 rounded-lg relative">
      <Link href={`/posts/${props.slug} `}>
        <h2 className="font-semibold mb-6">{props.title}</h2>
        <p className="absolute bottom-4">{props.date}</p>
      </Link>
    </div>
  );
};

export default PostPreview;
