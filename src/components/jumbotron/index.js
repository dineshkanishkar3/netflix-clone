import React from 'react';
import {Inner,Item,Title,Pane,Container,Content,Image} from "./styles/jumbotron"

function Jumbotron({children, direction, ...restProps}){
    return(
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}

Jumbotron.Title = function ({children,...restProps})
{
    return <Title {...restProps}>{children}</Title>
} 

Jumbotron.Content = function ({children,...restProps})
{
    return <Content {...restProps}>{children}</Content>
} 

Jumbotron.Image = function ({...restProps})
{
    return <Image {...restProps} />
}

Jumbotron.Pane = function ({children,...restProps})
{
    return <Pane {...restProps}>{children}</Pane>
} 


Jumbotron.Container = function ({children,...restProps})
{
    return <Container {...restProps}>{children}</Container>
} 


export default Jumbotron