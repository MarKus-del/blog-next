import { GetStaticProps, NextPage } from 'next';
import HomePage from '../containers/HomePage';
import { getAllPost } from '../data/posts/get-all-posts';
import { PostData } from '../domain/posts/post';

export type HomeProps = {
  posts: PostData[];
};

const Home = ({ posts }: HomeProps) => {
  return <HomePage posts={posts} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPost();

  return {
    props: { posts },
  };
};
