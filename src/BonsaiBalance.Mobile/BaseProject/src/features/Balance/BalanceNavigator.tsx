import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Balance from './Balance'

export type BalanceTabParamList = {
    Balance: undefined
}

const Stack = createNativeStackNavigator<BalanceTabParamList>()

const BalanceNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Balance"
                component={Balance}
                options={{ title: 'Balance' }}
            />
        </Stack.Navigator>
    )
}

export default BalanceNavigator