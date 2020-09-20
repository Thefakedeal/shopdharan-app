import React from 'react'
import {Text} from 'react-native'
import font from '../defaults/fontname.json'

export default function CustomText({children, fontSize, color}) {
    return (
        <Text style={{ fontFamily: font.Righteous, fontSize: fontSize||20, color: color||'#000' }}>
          {children}
        </Text>
    )
}
