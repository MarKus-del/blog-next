import Link from 'next/link';
import {
  Container,
  PostCardCover,
  PostCardHeading,
  ImageCover,
} from './styles';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

export const PostCard = ({ cover, slug, title }: PostCardProps) => {
  return (
    <Container>
      <PostCardCover>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>
            <ImageCover src={cover} alt={title} />
          </a>
        </Link>
      </PostCardCover>

      <PostCardHeading>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>{title}</a>
        </Link>
      </PostCardHeading>
    </Container>
  );
};
