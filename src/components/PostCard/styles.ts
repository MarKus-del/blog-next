import styled, { css } from 'styled-components';

export const Container = styled.div`
  transition: opacity 300ms ease-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const PostCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};
`;

export const ImageCover = styled.img`
  width: 100%;
  display: block;
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    a {
      color: ${({ theme }) => theme.colors.darkGray};
    }
  `}
`;
