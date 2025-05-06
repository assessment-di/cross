import { style } from '@vanilla-extract/css'
import { theme, themeUtils } from '@island.is/island-ui/theme'
import { responsiveStyleMap } from '@island.is/island-ui/vanilla-extract-utils'

export const container = responsiveStyleMap({
  height: { xs: 80, md: 112 },
})

export const infoContainer = style({
  ...themeUtils.responsiveStyle({
    md: {
      borderLeftWidth: '1px',
      borderStyle: 'solid',
      borderColor: theme.color.dark100,
    },
  }),
})

export const title = style({
  display: 'none',
  ...themeUtils.responsiveStyle({
    sm: {
      display: 'initial',
      fontWeight: 600,
      fontSize: '16px',
      verticalAlign: 'middle',
    },
  }),
})
