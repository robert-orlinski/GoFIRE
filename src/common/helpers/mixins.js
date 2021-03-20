import { css } from 'styled-components';

export const hideElement = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;

export const pointer = css`
  &:hover {
    cursor: pointer;
  }
`;
