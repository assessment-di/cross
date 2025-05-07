import { style } from '@vanilla-extract/css'
import { themeUtils } from '@island.is/island-ui/theme'

export const title = style({
  display: 'grid',
  gridTemplateColumns: '1fr min-content',
  gap: 12,
})

export const container = style({
  display: 'grid',
  gridTemplateColumns: '1fr min-content min-content',
  alignItems: 'baseline',
  width: '100%',
  gap: 24,
  marginTop: 24,
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
