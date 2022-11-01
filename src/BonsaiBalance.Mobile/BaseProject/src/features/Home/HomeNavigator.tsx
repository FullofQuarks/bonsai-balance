import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './Home'


export type HomeTabParamList = {
    Home: undefined
}

const Stack = createNativeStackNavigator<HomeTabParamList>()

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        </Stack.Navigator>
    )
}

export default HomeNavigator