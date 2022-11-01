import React from 'react'
import { Pressable, PressableStateCallbackType, Text } from 'react-native'
import tw from '../../utility/tailwind'

interface AppButtonProps {
    text: string
    onPress: () => void
    color?: 'primary' | 'danger' | 'cancel' | 'white'
}

type ColorMap = Record<
    'primary' | 'danger' | 'cancel' | 'white',
    {
        text: string
        background: string
        backgroundPressed: string
        border?: string
    }
>

const colorMap: ColorMap = {
    primary: {
        text: 'text-white',
        background: 'bg-primary',
        backgroundPressed: 'bg-primary-dark',
    },
    danger: {
        text: 'text-white',
        background: 'bg-danger',
        backgroundPressed: 'bg-danger-dark',
    },
    cancel: {
        text: 'text-white',
        background: 'bg-gray-400',
        backgroundPressed: 'bg-gray-500',
    },
    white: {
        text: 'text-black',
        background: 'bg-white',
        backgroundPressed: 'bg-gray-200',
        border: 'border-4 border-gray-400',
    },
}

const AppButton = ({ text, onPress, color = 'primary' }: AppButtonProps) => {
    const buttonStyle = ({ pressed }: PressableStateCallbackType) => tw.style(`text-base text-center`, colorMap[color].border,
        {
            [colorMap[color].background]: !pressed,
            [colorMap[color].backgroundPressed]: pressed,
        })

    return (
        <Pressable onPress={onPress} style={buttonStyle} accessibilityRole="button">
            <Text
                numberOfLines={1}
                style={tw.style(`text-base text-center`, colorMap[color].text)}
            >
                {text}
            </Text>
        </Pressable>
    )
}

export default AppButton