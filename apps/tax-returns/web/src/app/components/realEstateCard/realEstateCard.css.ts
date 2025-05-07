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
