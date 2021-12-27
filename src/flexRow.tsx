import React from 'react'
import { View } from 'react-native'
import Styles from '../styles'

interface Props {
  rowStyle?: any,
  children: any
}

const FlexRow = (props: Props) => {
  const { rowStyle, children } = props
  return (
    <View style={[Styles.flex1, Styles.flexDirectionRow, rowStyle || {}]}>
      {children}
    </View>
  )
}

export default FlexRow
 