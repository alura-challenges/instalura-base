import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../../foundation/Text';

export const MenuWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
  ${breakpointsMedia({
    xs: css`
      align-self: ${({ logged }) => (logged ? 'center' : null)};
      margin-bottom: ${({ logged }) => (logged ? '18px' : '0px')};
    `,
    md: css`
      justify-content: flex-start;
      margin-top: ${({ logged }) => (logged ? '-5px' : '32px')};
      margin-left: auto;
      margin-right: auto;
      margin-bottom: ${({ logged }) => (logged ? '0px' : null)};
      width: ${({ logged }) => (logged ? '75%' : '100%')};
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}

  ${({ logged }) => logged && breakpointsMedia({
    md: css`
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.04);
      border-radius: 24px 24px 0px 0px;
      background: #FFFFFF;
    `,
    xs: css`
      box-shadow: unset;
      border-radius: unset;
      background: unset;
    `,
  })}
`;

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  ${breakpointsMedia({
    md: css`
        width: 131px;
        height: 32px;
      `,
  })}
  ${breakpointsMedia({
    md: css`
      order: initial;
      padding-right: 16px;
    `,
  })}
`;

MenuWrapper.CentralSide = styled.div`
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
  border-top: 1px solid #88989E;
  border-bottom: 1px solid #88989E;
  padding: 12px;

  ${({ logged }) => logged && breakpointsMedia({
    xs: css`
      display: none;
    `,
  })}

  ${breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-between;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })}
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989E;
    transition: 200ms ease-in-out;
    ${breakpointsMedia({
    xs: css`
        ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070C0E;
    }
  }
`;

MenuWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
  z-index: 1000;

  ${({ logged }) => logged && css`
      width: 100%;
      list-style: none;
      align-items: center;
      padding: 12px;
    `
}

  ${({ logged }) => logged && breakpointsMedia({
    xs: css`
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0px;
      justify-content: center;
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.04);
      border-radius: 24px 24px 0px 0px;
      background: #FFFFFF;
    `,
    md: css`
      position: unset;
      bottom: unset;
      justify-content: flex-end;
      box-shadow: unset;
      border-radius: unset;
      background: unset;
    `,
  })}

  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
  })}
`;
