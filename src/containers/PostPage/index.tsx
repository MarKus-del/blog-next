import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { MainContainer } from '../../components/MainContainer';
import { PostContainer } from '../../components/PostContainer';
import { PostCover } from '../../components/PostCover';
import { PostDetails } from '../../components/PostDetails';
import { PostData } from '../../domain/posts/post';

export type PostProps = {
  post: PostData;
};

export const PostPage = ({ post }: PostProps) => {
  return (
    <>
      <Header />
      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover coverURL={post.cover.url} alt="fundo" />
        <PostDetails
          date={post.updated_at}
          author={post.author.name}
          category={post.category.name}
        />
        <PostContainer content={post.content} />
      </MainContainer>
      <Footer />
    </>
  );
};
