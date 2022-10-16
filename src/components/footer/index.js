import React from 'react';
import {Container,Row,Column,Title,Text,Link,Inner} from './styles/footer'

function Footer({children,...restProps})
{
    return(
        <Container {...restProps}>
            <Inner>
            {children}
            </Inner>
        </Container>
    )
}

Footer.Row = function({children,...restProps}){
    return(
        <Row {...restProps}>{children}</Row>
    )
}
Footer.Column = function({children,...restProps}){
    return(
        <Column {...restProps}>{children}</Column>
    )
}
Footer.Title = function({children,...restProps}){
    return(
        <Title {...restProps}>{children}</Title>
    )
}
Footer.Text = function({children,...restProps}){
    return(
        <Text {...restProps}>{children}</Text>
    )
}

Footer.Link = function({children,...restProps}){
    return(
        <Link>{children}</Link>
    )
}




export default Footer