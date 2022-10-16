import React from "react"
import { Container,Title,Text,SmallText,Error,Input,Submit,LinkText,Label } from "./styles/form"

function Form({children,...restProps}){

        return(
            <Container {...restProps}>{children}</Container>
        )
}

Form.Title = function FormTitle({children,...restProps}){
    return(
        <Title {...restProps}>{children}</Title>
    )
}

Form.Input = function FormInput({children, ...restProps}){
    return(
        <Input {...restProps}>{children}</Input>
    )
}

Form.Text = function FormText({signIn,children,...restProps}){
    return(
        <Text signIn={signIn} {...restProps}>{children}</Text>
    )
}

Form.SmallText = function FormSmallText({children,...restProps}){
    return(
        <SmallText {...restProps}>{children}</SmallText>
    )
}

Form.Submit = function FormSubmit({children,...restProps}){
    return(
        <Submit {...restProps}>{children}</Submit>
    )
}

Form.Error = function FormError({children,...restProps}){
    return(
        <Error {...restProps}>{children}</Error>
    )
}

Form.LinkText = function FormLinkText({to='',children,...restProps}){
    return(
        <LinkText to={to} {...restProps}>{children}</LinkText>
    )
}

Form.Label = function FormLabel({to,children,...restProps})
{
    return (
        <Label {...restProps}>{children}</Label>
    )
}

export default Form