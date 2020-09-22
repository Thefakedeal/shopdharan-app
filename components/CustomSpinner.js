import React from 'react'
import {ActivityIndicator} from 'react-native-paper';
import {View} from 'react-native';
import colors from '../defaults/colors.json'

export default function CustomSpinner() {
    return (
        <View>
            <ActivityIndicator animating={true} color={colors.PRIMARY_RED} />
        </View>
    )
}
