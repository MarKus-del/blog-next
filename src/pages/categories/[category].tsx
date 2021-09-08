import { GetServerSideProps } from 'next';
import HomePage from '../../containers/HomePage';
import { getAllPost } from '../../data/posts/get-all-posts';
import { PostData } from '../../domain/posts/post';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

const Category = ({ posts, category }: CategoryProps) => {
  return <HomePage posts={posts} category={category} />;
};

export default Category;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { category } = ctx.query;
  const urlQuery = `_sort=id:desc&_start=0&_limit=30&category.name_contains=${category}`;
  const posts = await getAllPost(urlQuery);

  return {
    props: { posts, category },
  };
};
