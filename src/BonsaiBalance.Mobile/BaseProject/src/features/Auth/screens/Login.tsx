import React from 'react'
import { View, Text, SafeAreaView } from "react-native"
import AppButton from "../../../components/AppButton"
import tw from '../../../utility/tailwind'
import { useAuth } from "../hooks"

const Login = () => {
    const { setIsSignedIn } = useAuth()

    return (
        <SafeAreaView style={tw`py-10 px-4`}>
            <Text style={tw`text-lg`}>Login Screen</Text>
            <View>
                <AppButton text="Log in" onPress={() => setIsSignedIn(true)}/>
            </View>
        </SafeAreaView>
    )
}

export default Login