import React from 'react';
import {Container,Input,Button,Panel,Text} from './styles/optForm'

function OptForm({children, ...restProps }){
    return(
        <Container {...restProps} >
            {children}
        </Container>
    )
}

OptForm.Panel = function OptFormPanel({ children, ...restProps }){

    return(
        <Panel { ...restProps }>
            {children}
        </Panel>
    )
}
OptForm.Input = function OptFormInput({ children, ...restProps }){

    return(
        <Input { ...restProps }>
            {children}
        </Input>
    )
}
OptForm.Button = function OptFormButton({ children, ...restProps }){
    return(
        <Button { ...restProps } to='/signup'>
            {children}
        </Button>
    )
}

OptForm.Text = function OptFormText({ children, ...restProps })
{
    return(
        <Text>
            {children}
        </Text>
    )
}
export default OptForm
