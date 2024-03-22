import { vars } from '@/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const cursor = createVar();
export const svgWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: cursor,
});

export const defaultColor = createVar();
export const hoverColor = createVar();
export const focusColor = createVar();

export const widthProps = createVar();
export const heightProps = createVar();
export const styledSvg = style({
  width: widthProps,
  height: heightProps,
  fill: defaultColor,

  selectors: {
    [`${svgWrapper}:hover > &`]: {
      fill: hoverColor,
    },
    [`${svgWrapper}:focus > &`]: {
      fill: focusColor,
    },
  },
});

export const fontSize = createVar();
export const hoverBorder = createVar();
export const focusBorder = createVar();
export const categoryName = style({
  width: '100%',
  color: defaultColor,
  fontSize: fontSize,
  textAlign: 'center',
  textWrap: 'nowrap',
  borderBottom: `2px solid transparent`,
  paddingBottom: '8px',

  selectors: {
    [`${svgWrapper}:hover > &`]: {
      color: hoverColor,
      borderBottom: `2px solid ${hoverBorder}`,
    },
    [`${svgWrapper}:focus > &`]: {
      color: focusColor,
      borderBottom: `2px solid ${focusBorder}`,
    },
  },
});
