import { GetStaticProps, NextPage } from 'next';
import { getAllPost } from '../data/posts/get-all-posts';
import { PostData } from '../domain/posts/post';

export type HomeProps = {
  posts: PostData[];
};

const Home = ({ posts }: HomeProps) => {
  return (
    <div>
      {posts.map((post) => (
        <h2 key={post.slug}>{post.title}</h2>
      ))}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPost();

  return {
    props: { posts },
  };
};
