import {useState,useContext,useEffect} from 'react'
import FireBaseContext from '../context/FireBaseContext'

function useAuthListener(){
    const {firebase} = useContext(FireBaseContext)
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('authUser')))

    useEffect(()=>{
            const authListener = firebase.auth().onAuthStateChanged((authUser)=>{
                if(authUser){
                    localStorage.setItem('authUser',JSON.stringify(authUser))
                    setUser(authUser)
                }
                else{
                    localStorage.removeItem('authUser')
                    setUser(null)
                }
            })

            return ()=>authListener()
    },[])

    return {user}
}

export {useAuthListener}