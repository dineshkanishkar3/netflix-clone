import React,{useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import FireBaseContext from '../context/FireBaseContext'
import Form  from '../components/form'
import HeaderContainer from '../container/HeaderContainer'
import FooterContainer from '../container/footerContainer'
import * as ROUTE from '../constants/routes'

function SignIn(){
        const {firebase} = useContext(FireBaseContext)
        const [email,setEmail] = useState('')
        const [pwd,setPwd] = useState('')
        const [checked,setChecked] = useState(false)
        const [error,setError] = useState('')
        const history = useNavigate()
        const isInvalid = email ==='' || pwd===''
        const handleSignin = (event)=>{
            event.preventDefault();
            firebase.auth()
            .signInWithEmailAndPassword(email, pwd)
            .then(() => history.push(ROUTE.BROWSE))
            .catch((error) => {
              setEmail('');
              setPwd('');
              setError(error.message);
            });
        }

       
    return(
        < >
            <HeaderContainer  >
            <Form onSubmit={handleSignin} method="POST"   error={error}>
                <Form.Title signIn>Sign In</Form.Title>
                { error && <Form.Error>{error}</Form.Error>}
                <Form.Input value={email} type='email' 
                            placeholder='Email' 
                            
                            onError={()=>setError(prev=>!prev)}
                            onChange={(event)=>setEmail(event.target.value)}/>

                <Form.Input value={pwd} type='password' 
                            placeholder='Password' 
                            onChange={(event)=>setPwd(event.target.value)}/>
                <Form.Submit disabled={isInvalid} type="submit"  data-testid="sign-in">
                     Sign In
                </Form.Submit>
                
                <Form.Label >
                    <Form.Input type='checkbox' checked={checked} onChange={(event)=>setChecked(event.target.checked)}/>
                    Remember Me</Form.Label> 
               <Form.LinkText >Need help?</Form.LinkText>
               <Form.Text>New to Netflix? <Form.LinkText to={ROUTE.SIGN_UP}> Sign up now</Form.LinkText></Form.Text>
                <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Form.LinkText>Learn more.</Form.LinkText>
                </Form.SmallText>
            </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}
export default SignIn