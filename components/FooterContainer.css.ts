import { style } from '@vanilla-extract/css'

export const root = style({
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
  backgroundColor: '#333',
  padding: '10px 20px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
})

export const childDiv = style({
  padding: '5px',
})

export const lastChildDiv = style({
  width: '50px',
  marginLeft: 'auto',
})
