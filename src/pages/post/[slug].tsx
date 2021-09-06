import { GetStaticPaths, GetStaticProps } from 'next';
import { countAllPost } from '../../data/posts/count-all-posts';
import { getAllPost } from '../../data/posts/get-all-posts';
import { getPost } from '../../data/posts/get-post';
import { PostData } from '../../domain/posts/post';

export type PostProps = {
  post: PostData;
};

const Post = ({ post }: PostProps) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPost();
  const posts = await getAllPost(`_limit=${numberOfPosts}`);

  const postsPaths = posts.map(({ slug }) => {
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths: postsPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const post = await getPost(slug);

  return {
    props: { post },
  };
};
