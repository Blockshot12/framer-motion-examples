type Breakpoints = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

type breakpointKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number

const breakpoints: Breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1240,
  xl: 1440,
}

export const mqMax = (n: breakpointKeys): string => {
  if (typeof n === 'number') {
    return `max-width:${n - 0.01}px`
  }
  return `max-width: ${breakpoints[n] - 0.01}px`
}

export const mqMin = (n: breakpointKeys): string => {
  if (typeof n === 'number') {
    return `min-width:${n}px`
  }
  return `min-width: ${breakpoints[n]}px`
}
