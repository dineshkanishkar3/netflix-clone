import React,{useState,useContext,useEffect} from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import FireBaseContext from '../context/FireBaseContext'
import Form  from '../components/form'
import HeaderContainer from '../container/HeaderContainer'
import FooterContainer from '../container/footerContainer'
import * as ROUTE from '../constants/routes'

function SignUp(){
        const location = useLocation()
        const {firebase} = useContext(FireBaseContext)
        const[name,setName] = useState('')
        const [email,setEmail] = useState('')
        const [pwd,setPwd] = useState('')
        //  const [checked,setChecked] = useState(false)
         const [error,setError] = useState('')
         const history = useNavigate()
         
         const isInvalid = email ==='' || pwd==='' || name===''
         
         function handleSignUp(event){
             event.preventDefault()
             firebase.auth()
             .createUserWithEmailAndPassword(email,pwd)
             .then((result)=>result.user.updateProfile({
                 displayName: name,
                 photoURL : Math.floor(Math.random()*5)+1
             }))
             .then(()=>history.push(ROUTE.BROWSE))
             .catch((error)=>{
                setEmail('')
                setName('')
                setPwd('')
                 setError(error.messsage)
             })
         }
         useEffect(()=>{
            if(location.state){
                setEmail(location.state.data)
            }
         },[])
    return(
        < >
        <HeaderContainer isform bg={true}>
        <Form onSubmit={handleSignUp} method="POST"  error={error}>
            <Form.Title signIn>Sign Up</Form.Title>
            { error && <Form.Error>{error}</Form.Error>}
            <Form.Input value={name} type='text'
                                placeholder='Name'
                                onChange={(event)=>setName(event.target.value)}/>

            <Form.Input value={email} type='email' 
                        placeholder='Email' 
                        
                        onChange={(event)=>setEmail(event.target.value)}/>

            <Form.Input value={pwd} type='password' 
                        placeholder='Password' 
                        onChange={(event)=>setPwd(event.target.value)}/>
            <Form.Submit disabled={isInvalid} type="submit"  >
                 Sign Up
            </Form.Submit>
            
           <Form.LinkText >Need help?</Form.LinkText>
           <Form.Text>Already a user? <Form.LinkText to={ROUTE.SIGN_IN}> Sign In</Form.LinkText></Form.Text>
            <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Form.LinkText>Learn more.</Form.LinkText>
            </Form.SmallText>
        </Form>
        </HeaderContainer>
        <FooterContainer/>
    </>
    )
}

export default SignUp