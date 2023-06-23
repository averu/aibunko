import { style } from '@vanilla-extract/css'

export const root = style({
  width: '70vw',
  '@media': {
    'screen and (max-width: 900px)': {
      width: '100vw',
    },
  },
})
