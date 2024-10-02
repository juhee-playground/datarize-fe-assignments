import { colors } from '@/styles/colors';

const RED_LUMINANCE_WEIGHT = 299;
const GREEN_LUMINANCE_WEIGHT = 587;
const BLUE_LUMINANCE_WEIGHT = 114;
const LUMINANCE_WEIGHT_SUM = RED_LUMINANCE_WEIGHT + GREEN_LUMINANCE_WEIGHT + BLUE_LUMINANCE_WEIGHT; // 가중치 합계 상수

export const darkenColor = (color: string, amount: number) => {
  const [r, g, b] = color.match(/\w\w/g)!.map(c => parseInt(c, 16));
  return `rgb(${Math.max(0, r - amount)}, ${Math.max(0, g - amount)}, ${Math.max(0, b - amount)})`;
};

export const getBrightness = (color: string) => {
  const [r, g, b] = color.match(/\w\w/g)!.map(c => parseInt(c, 16));
  // 인간의 눈이 색상을 인식하는 방식에 따라 각각의 가중치를 부여한 것
  return (r * RED_LUMINANCE_WEIGHT + g * GREEN_LUMINANCE_WEIGHT + b * BLUE_LUMINANCE_WEIGHT) / LUMINANCE_WEIGHT_SUM;
};

export const getCustomColor = (color?: string) => {
  switch (color) {
    case 'primary':
      return colors.primary;
    case 'error':
      return colors.error.default;
    case 'warning':
      return colors.warning.default;
    case 'success':
      return colors.success.default;
    case 'info':
      return colors.info.default;
    case 'cancel':
    case 'default':
      return colors.cancel.default;
    default:
      return color || colors.primary;
  }
};

const hexToRgb = (hex: string) => {
  let r = 0,
    g = 0,
    b = 0;
  // 3자리 hex 코드일 경우
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6자리 hex 코드일 경우
  else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return { r, g, b };
};

export const getRgbaColor = (hex: string, opacity: number) => {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
