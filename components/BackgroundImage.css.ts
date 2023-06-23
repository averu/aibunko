import { keyframes, style } from '@vanilla-extract/css'

export const change = keyframes({
  '0%': { opacity: 0 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0 },
})

export const images = style({
  selectors: {
    '&:nth-of-type(1)': {
      animationDelay: '0s',
    },
    '&:nth-of-type(2)': {
      animationDelay: '5s',
    },
  },
  position: 'absolute',
  opacity: 0,
  animation: `${change} 10s infinite`,
  width: '100%',
  height: 'auto',
  '@media': {
    'screen and (max-width: 900px)': {
      width: 'fit-content',
      height: '100%',
    },
  },
})

export const root = style({
  width: '100%',
  height: 'auto',
  display: 'flex',
  justifyContent: 'center',
  objectFit: 'cover',
})
