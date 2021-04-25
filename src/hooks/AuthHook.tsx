import React,{ createContext,useCallback,useState,useContext } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../services/api'

interface authState{
    token:string
    user:object
}

interface UserInterface{
    id:string
    name:string
    email:string
}

interface signInCredentials{
    email:string
    password:string
}
interface signUpCredentials{
    name:string
    email:string
    password:string
}

interface authContext{
    user:UserInterface
    signin(credentials:signInCredentials):Promise<void>
    signout():void
    signup(credentials:signUpCredentials):Promise<void>
    updateUser(user:UserInterface):void

}

const AuthContext = createContext<authContext>({} as authContext)

const AuthProvider: React.FC = ({children}) => {
    const history = useHistory()
    const[data,setData]=useState<authState>(()=>{
        const token = localStorage.getItem('@ignews:token')
        const user = localStorage.getItem('@ignews:user')
        
        if(token && user){
            return{
                token,
                user:JSON.parse(user)
            }
        }

        return {} as authState
    })


    const signin = useCallback(async({email,password})=>{
        
        const { data } = await api.post('auth',{email,password})    
        const { token,user } = data
        console.log(data)

        localStorage.setItem('@ignews:token',token)
        localStorage.setItem('@ignews:user',JSON.stringify(user))

        setData({ token,user })
    },[])

    const signup = useCallback(async ({name,email,password})=>{
        await api.post('users',{name,email,password})    
        setData({} as authState)
    },[])

    const signout = useCallback(()=>{
        localStorage.removeItem('@ignews:token')
        localStorage.removeItem('@ignews:user')

        history.push('/')

        setData({} as authState)
    },[history])
    
    const updateUser = useCallback((user:UserInterface)=>{
        localStorage.setItem('@ignews:user',JSON.stringify(user))
        setData({
            token:data.token,
            user
        })
    },[setData,data.token])

    
    return(
      <>
        <AuthContext.Provider value={{ user:data.user as UserInterface , signin, signup, signout,updateUser }}>
            {children}
        </AuthContext.Provider>
    
      </>
    )
}

const useAuth = ():authContext =>{

    const context = useContext(AuthContext)
    
    if(!context){
        throw new Error('useAuth must be use within an AuthProvider')
    }

    return context
}

export { AuthProvider,useAuth}

