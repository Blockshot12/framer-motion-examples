type Colors = {
  black: string
  blue: string
  border: string
  borderDark: string
  danger: string
  gray100: string
  gray200: string
  gray300: string
  gray400: string
  gray500: string
  gray600: string
  gray700: string
  green: string
  greenDark: string
  purple: string
  red: string
  white: string
  yellow: string
}

type Fonts = {
  bold: string
  medium: string
  regular: string
  thin: string
}

type ZIndex = {
  dropdown: Number,
  fixed: Number,
  modal: Number,
  modalBackdrop: Number,
  popover: Number,
  sticky: Number,
  tooltip: Number,
}

const colors: Colors = {
  black: '#000',
  blue: '#C7EBF6',
  border: '#D9D9D9',
  borderDark: '#3B3B3B',
  danger: '#ff5470',
  gray100: '#F5F5F5',
  gray200: '#D9D9D9',
  gray300: '#B2B2B2',
  gray400: '#999',
  gray500: '#666',
  gray600: '#333',
  gray700: '#191919',
  green: '#C7F6CA',
  greenDark: '#407943',
  purple: 'purple',
  red: '#F6C7C7',
  white: '#FFF',
  yellow: '#FAF4C3',
}

const fonts: Fonts = {
  bold: 'catamaran-v6-latin-ext_latin-700, sans-serif',
  medium: 'catamaran-v6-latin-ext_latin-500, sans-serif',
  regular: 'catamaran-v6-latin-ext_latin-regular, sans-serif',
  thin: 'catamaran-v6-latin-ext_latin-100, sans-serif',
}

const zIndex: ZIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
}

const theme = {
  colors: { ...colors },
  fonts: { ...fonts },
  radius: '3px',
  zIndex: { ...zIndex },
}

export type ThemeType = {
  colors: Colors
  fonts: Fonts
  zIndex: ZIndex
}

export default theme
