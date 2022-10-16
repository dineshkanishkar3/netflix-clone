import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
                /* padding-top:2em; */
                padding-bottom:2em;
`

export const Inner = styled.div``

export const Panel = styled.form`
        max-width: 800px;
        margin: 0 auto;
        padding:1em;
        display:grid;
        grid-template-columns: 67% 33%;
        grid-template-areas:
                'text text'
                'input button';
        @media(max-width:1499px){
                max-width:700px;
        }
        @media(max-width:950px){
                width:60%;
                min-width:475px;
                grid-template-columns: 1fr;
                grid-template-areas:'text' 'input' 'button';
                
        }
       


`

export const Input = styled.input`
            grid-area: input; 
            font-size: 1rem;
            padding-left:1em;
            border-radius: .25em 0 0 .25em;
            @media(max-width:1499px){
                font-size:.75;
                
        }
        @media(max-width:950px){
                padding: 1em .75em;
                margin-bottom:1.5em;
        }
            
`

export const Button = styled(Link)`
            color:#fff;
            text-decoration:none;
            grid-area: button; 
            background-color: #e50914;
            font-size:2rem;
            padding: .5em .75em;
            display:flex;
            justify-content:space-around;
            border-radius:0 .1em .1em 0;
            img{
                    width:.75em;
                    align-self: center;
                    filter: brightness(0) invert(1);
            }    
            &:hover{
                    background-color:red;
                    cursor: pointer;
            }
            @media(max-width:1499px){
                font-size: 1.8rem;
        }
        @media(max-width:950px){
                font-size:1.2rem;
                width:fit-content;
                border-radius:.1em;
                justify-self:center;
        }
`


export const Text = styled.p`
            grid-area: text;
            font-size:1.125rem;
            text-align:center;
            margin-bottom: 1.2em;
`
