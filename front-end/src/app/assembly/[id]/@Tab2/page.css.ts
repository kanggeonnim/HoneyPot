import { vars } from '@/globalTheme.css';
import { createVar, globalStyle, style } from '@vanilla-extract/css';

export const window = style({
  width: '100%',
  overflowY: 'hidden',
  overflowX: 'scroll',
  position: 'relative',
});
globalStyle(`${window}::-webkit-scrollbar`, {
  visibility: 'hidden',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  overflow: 'hidden',
  paddingBottom: '12px',
});

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  height: '38px',
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
});

export const title = style({
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '38px',
});

export const totalContWrapper = style({
  fontSize: '14px',
  lineHeight: '38px',
});

export const number = style({
  fontWeight: 600,
  lineHeight: '38px',
});

export const arrowButtonPositionRigiht = createVar();
export const categoriesWrapper = style({
  display: 'flex',
  gap: '48px',
  width: 'fit-content',
  transform: `translateX( ${arrowButtonPositionRigiht})`,
  transition: 'transform 0.2s ease',
});

export const billListWithChartWrapper = style({
  display: 'flex',
  gap: '8px',
  justifyContent: 'space-between',
  padding: '0px 4px',
});

export const billswrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const chartWrapper = style({
  width: '100%',
  height: '100%',
});
