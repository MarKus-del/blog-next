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
  const posts = await getAllPost('_sort=id:desc&_start=0&_limit=30');

  return {
    props: { posts },
  };
};
