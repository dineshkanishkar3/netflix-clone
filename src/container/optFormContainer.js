import React,{useState} from 'react';
import OptForm from '../components/optForm';

function OptFormContainer(){
    const [email,setEmail] = useState('')
    return(
        <OptForm>
            <OptForm.Panel>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                <OptForm.Input value={email} onChange={({target})=>setEmail(target.value)} 
                type='email' required placeholder='Email Address' />
                <OptForm.Button state={{data:email}}>Get Started<img src='\images\icons\chevron-right.png' alt=""/></OptForm.Button>
            </OptForm.Panel>
        </OptForm>
    )
}

export default OptFormContainer