import { useState } from 'react'
import { View, Text } from 'react-native'
import Login from '../modules/Login'
import SignUp from '../modules/Signup'

const Auth = () => {
    const [showLogin , setShowLogin] = useState(false)

  return (
    <View style ={{flex:1}}>
        {showLogin ? 
        <Login setShowLogin ={setShowLogin} /> : 
        <SignUp setShowLogin ={setShowLogin}/>    
    }
    </View>
  )
}

export default Auth