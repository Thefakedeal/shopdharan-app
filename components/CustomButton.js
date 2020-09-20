import React from 'react'
import {Button} from 'react-native-paper'
import colors from '../defaults/colors.json'

export default function CustomButton({children, onPress, disabled, contentStyle}) {
    return (
        <Button mode={"contained"}
            dark={true}
            color={colors.PRIMARY_RED}
            onPress={onPress}
            contentStyle={contentStyle}
            disabled={disabled}
        >
            {children}
        </Button>
    )
}
