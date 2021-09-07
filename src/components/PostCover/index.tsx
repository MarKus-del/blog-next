import { Container } from './styles';

export type PostCoverProps = {
  coverURL: string;
  alt: string;
};

export const PostCover = ({ coverURL, alt }: PostCoverProps) => {
  return <Container src={coverURL} alt={alt} />;
};
