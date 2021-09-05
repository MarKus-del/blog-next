import Link from 'next/link';
import { SITE_NAME } from '../../config/app-config';
import { Container } from './styles';

export const Footer = () => {
  return <Container>Feito por {SITE_NAME}</Container>;
};
