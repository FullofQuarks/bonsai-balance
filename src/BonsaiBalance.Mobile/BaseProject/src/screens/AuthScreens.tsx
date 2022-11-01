import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../features/Auth/screens/Login'

export type AuthStackScreens = {
    Login: undefined
}
const Stack = createNativeStackNavigator<AuthStackScreens>()

const AuthScreens = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: 'Login', headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default AuthScreens