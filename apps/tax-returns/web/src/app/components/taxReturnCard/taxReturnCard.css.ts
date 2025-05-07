import { style } from '@vanilla-extract/css'
import { themeUtils, theme } from '@island.is/island-ui/theme'

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'max-content auto',
  justifyContent: 'space-between',
  gap: 24,
  marginBottom: 24,
})

export const actions = style({
  display: 'grid',
  justifyContent: 'center',
  marginTop: 24,
  gridTemplateColumns: '1fr',
  textAlign: 'center',
  gap: 24,

  ...themeUtils.responsiveStyle({
    md: {
      justifyContent: 'space-between',
      gridTemplateColumns: 'max-content auto',
      alignItems: 'center',
    },
  }),
})

export const submitContainer = style({
  display: 'grid',
  gridTemplateColumns: "auto auto",
  justifyContent: 'center',
  marginTop: 24,
  textAlign: 'center',
  gap: 24,
})

export const checkIcon = style({
  borderRadius: '50%',
  backgroundColor: theme.color.mint400,
})
