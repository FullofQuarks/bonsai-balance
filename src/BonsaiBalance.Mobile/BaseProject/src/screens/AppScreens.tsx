import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigator from '../features/Home/HomeNavigator'
/**
 * TODO: Rest of Navigatable screens here.
 * Inbox, Learn, More, Balance, whatever
 */
import {
    BookOpenIcon,
    HomeIcon,
    InboxIcon,
} from 'react-native-heroicons/outline'

export type AppTabsParamList = {
    HomeNavigator: undefined
}

const Tab = createBottomTabNavigator<AppTabsParamList>()

const AppScreens = () => {
    return (
        <Tab.Navigator>
            <Tab.Group screenOptions={{ headerShown: false }}>
                <Tab.Screen 
                    name="HomeNavigator" 
                    component={HomeNavigator} 
                    options={{ 
                        title: 'Home', 
                        tabBarIcon: ({ color, size }) =>  (
                        <HomeIcon color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Group>
        </Tab.Navigator>
    )
}

export default AppScreens