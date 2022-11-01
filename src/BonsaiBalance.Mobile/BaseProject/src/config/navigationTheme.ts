import { DefaultTheme } from '@react-navigation/native'
import tw from '../utility/tailwind'

export const NavigationTheme = {
    ...DefaultTheme,
    theme: 'light',
    colors: {
        ...DefaultTheme.colors,
        primary: `${tw.color('primary')}`,
        notification: `${tw.color('danger')}`,
    }
}