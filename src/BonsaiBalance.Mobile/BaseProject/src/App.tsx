import React from 'react'
import AuthProvider from './features/Auth/AuthProvider'
import RootScreens from './screens/RootScreens'

const App = () => {
  return (
    <AuthProvider>
      <RootScreens />
    </AuthProvider>
  )
}

export default App