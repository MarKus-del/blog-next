import Link from 'next/link';
import Image from 'next/image';
import { Container, PostCardCover, PostCardHeading } from './styles';

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
            <Image
              width={280}
              height={280}
              className="img"
              layout="responsive"
              src={cover}
              alt={title}
            />
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
