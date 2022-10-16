import {useEffect,useState,useContext} from 'react'
import FireBaseContext from '../context/FireBaseContext'

function useContent(target){

    const [content,setContent] = useState(null)
    const {firebase} = useContext(FireBaseContext)

    useEffect(()=>{
        firebase.firestore().collection(target).get()
        .then((snapshot)=>{
            const allContent = snapshot.docs.map((contentObj)=>({
                ...contentObj.data(),
                docId: contentObj.id
            }))
            setContent(allContent)
        }).catch((error)=>console.log(error.message))
    },[])

    return {[target]:content}
}

export {useContent}
