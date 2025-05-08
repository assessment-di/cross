import { style } from '@vanilla-extract/css'
import { themeUtils } from '@island.is/island-ui/theme'

export const container = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  position: 'relative',

  ...themeUtils.responsiveStyle({
    lg: {
      gridTemplateColumns: '350px 1fr 100px',
      gap: 24,
      marginLeft: '-100px',
    },
  }),
})
