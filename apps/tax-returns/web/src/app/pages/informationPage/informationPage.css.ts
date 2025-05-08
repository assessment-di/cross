import { style } from '@vanilla-extract/css'
import { themeUtils } from '@island.is/island-ui/theme'

export const container = style({
  ...themeUtils.responsiveStyle({
    lg: {
      marginLeft: '300px',
    },
    xl: {
      marginRight: '300px',
    }
  }),
})

export const box = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  gap: 24,

  ...themeUtils.responsiveStyle({
    xl: {
      gridTemplateColumns: '1fr 250px',
      textAlign: 'left',
    }
  }),
})

export const relatedInfo = style({
  display: 'none',
  width: '300px',
  position: 'absolute',
  left: '48px',

  ...themeUtils.responsiveStyle({
    lg: {
      display: 'block',
    },
  }),
})
