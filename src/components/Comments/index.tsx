import { DiscussionEmbed } from 'disqus-react';
import { SITE_URL } from '../../config/app-config';
import { Container } from './styles';

export type CommentsProps = {
  slug: string;
  title: string;
};

export const Comments = ({ slug, title }: CommentsProps) => {
  return (
    <Container>
      <DiscussionEmbed
        shortname="my-blog-pyfdm6zgec"
        config={{
          url: `${SITE_URL}/post/${slug}`,
          title: title,
          identifier: slug,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
};
