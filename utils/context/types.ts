type authType ={
    token:string | null , 
    authenticated: boolean |null
}

interface AuthProps{
 authState?: {token:string |null , authenticated:boolean|null}
 onRegister?:(email:string, password:string)=>Promise<any>
 onLogin?:(email:string, password:string)=>Promise<any>
 onLogout?:()=>Promise<void>
 
}

export type {
      authType , AuthProps
}