import styled from 'styled-components';
import { propToStyle } from '../../../../theme/utils/propToStyle';

export const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('placeContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}

  ${propToStyle('top')}
  ${propToStyle('bottom')}
  ${propToStyle('left')}
  ${propToStyle('right')}

  ${propToStyle('filter')}
  ${propToStyle('color')}
  ${propToStyle('fontSize')}
  ${propToStyle('textAlign')}

  ${propToStyle('boxShadow')}
  ${propToStyle('padding')}

  ${propToStyle('width')}
  ${propToStyle('height')}
  ${propToStyle('listStyle')}
  ${propToStyle('margin')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginRight')}
  ${propToStyle('position')}
  ${propToStyle('borderRadius')}
  ${({ theme, borderRadiusTheme }) => borderRadiusTheme && `border-radius: ${theme.borderRadius}`};
`;
