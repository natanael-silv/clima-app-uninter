import { getPostMetadata } from "../utils/getPostMetadata";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="text-black mt-10 flex items-center justify-center">
      <div className="">
        <h1 className="text-xl font-semibold mb-6">
          Confira alguns dos nosso artigos
        </h1>
        <div className="grid grid-cols-2 gap-4">{postPreviews}</div>
      </div>
    </div>
  );
};

export default HomePage;
