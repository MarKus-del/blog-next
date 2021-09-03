/* eslint-disable @typescript-eslint/no-empty-interface */
import { theme } from './theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaulTheme extends Theme {}
}
