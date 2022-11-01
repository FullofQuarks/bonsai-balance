import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppScreens from './AppScreens'
import AuthScreens from './AuthScreens'
import { useAuth } from '../features/Auth/hooks'
import { NavigationTheme } from '../config/navigationTheme'

export type RootStackScreens = {
    App: undefined
    Auth: undefined
}

const Stack = createNativeStackNavigator<RootStackScreens>()

const RootScreens = () => {
    const { isSignedIn } = useAuth()
    return (
        <NavigationContainer theme={NavigationTheme}>
            <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
                {isSignedIn ? (<Stack.Screen name="App" component={AppScreens} />
                    ) : (
                        <Stack.Screen name="Auth" component={AuthScreens} />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootScreens