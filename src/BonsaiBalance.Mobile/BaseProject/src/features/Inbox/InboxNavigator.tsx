import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Inbox from './Inbox'

export type InboxTabParamList = {
    Inbox: undefined
}

const Stack = createNativeStackNavigator<InboxTabParamList>()

const InboxNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Inbox"
                component={Inbox}
                options={{ title: 'Inbox' }}
            />
        </Stack.Navigator>
    )
}

export default InboxNavigator