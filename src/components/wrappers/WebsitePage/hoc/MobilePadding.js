import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const MobilePadding = styled.div`
${breakpointsMedia({
    xs: css`padding-bottom: 75px;`,
    md: css`padding-bottom: 0;`,
  })}
`;
