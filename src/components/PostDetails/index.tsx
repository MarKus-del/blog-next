import { formatDate } from '../../utils/format-date';
import { Date } from '../Date';
import { Container } from './styles';

export type PostDetailsProps = {
  date: string;
  category: string;
  author: string;
};

export const PostDetails = ({ date, author, category }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} | {category}
    </Container>
  );
};
