import axios, { AxiosResponse } from 'axios'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { AuthProps, authType } from './types'
import * as Keychain from 'react-native-keychain'

const AuthContex = createContext<AuthProps>({
    authState:{authenticated:false , token:null},
})
export const useAuth = ()=>{
    return useContext(AuthContex)
}
type childrenType = {
    children :ReactNode
}

export const AuthProvider = ({children}:childrenType) =>{

const [authState , setAuthState] = useState<authType>({token:null , authenticated:null})


const register = async(email:string , password:string)=>{
    try {
        const result:AxiosResponse = await axios.post('url' , {email ,password})
        await Keychain.setGenericPassword('token' , result.data.token)
        setAuthState({
            token:result.data.token,
            authenticated:true
        })

        axios.defaults.headers.post['Authorization'] = `Bearer ${authState.token}`


    } catch (error:any) {
        return {error:true , msg:error.response.data.msg }
    }
}
const login = async(email:string , password:string)=>{
    try {
        const result:AxiosResponse = await axios.post('url' , {email ,password})
        await Keychain.setGenericPassword('token' , result.data.token)
        setAuthState({
            token:result.data.token,
            authenticated:true
        })

        axios.defaults.headers.post['Authorization'] = `Bearer ${authState.token}`
        return {token:result.data.token}


    } catch (error:any) {
        return {error:true , msg:error.response.data.msg }
    }
}

const logout = async ()=>{
     Keychain.resetGenericPassword()
    setAuthState({token:null , authenticated:null})
}

const value:AuthProps = {
    onRegister: register,
    onLogout:logout,
    onLogin:login,
    authState
}

useEffect(()=>{
    const loadToken = async ()=>{
        const credentials = await Keychain.getGenericPassword()
        if(credentials){
            const {password:token} = credentials
            axios.defaults.headers.post['Authorization'] = `Bearer ${token}`
            setAuthState({
                token , authenticated:true
            })
        }
    }
    loadToken()
},[])
return(
    <AuthContex.Provider value={value}>
        {children}
    </AuthContex.Provider>
)
}
