import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    margin: ${theme.spacings.medium};
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    position: absolute;
    bottom: 0;
    left: 40%;
    right: 40%;
  `}
`;
