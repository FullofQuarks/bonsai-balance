import React from 'react'
import { View } from 'react-native'
import AppButton from '../../components/AppButton'
import tw from '../../utility/tailwind'
import { useAuth } from '../Auth/hooks'

const Home = () => {
    const { setIsSignedIn } = useAuth()

    return (
        <View style={tw`p-4`}>
            <AppButton text='Log Out' onPress={() => setIsSignedIn(false)}/>
            <View style={tw`mt-4`}>
                <AppButton 
                    text="BLAH BLAH BLAH DOID I WORK"
                    color='primary'
                    onPress={() => {}}
                />
            </View>
        </View>
    )

}

export default Home