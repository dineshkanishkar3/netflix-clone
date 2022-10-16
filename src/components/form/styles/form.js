import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.form`
            display:grid;
            align-self:flex-end;
            width: 450px;
            height:600px;
            padding: 3em 4em;
            grid-row-gap: 1em;
            grid-template: repeat(5,auto)/ 1fr 1fr; 

            grid-template-areas:
                    'title title'
                    'error error'
                    'name name'
                    'email email'
                    'password password'
                    'submit submit'
                    'checkbox helpLink'
                    'signup signup'
                    'recaptcha recaptcha';
            margin : 0 auto;
            margin-bottom:3em;
            background-color : rgba(0,0,0,0.70);
            min-height:80%;
            @media(max-width:1500px){
              max-width:100%;  
        }
            
            
            
`

export const Input = styled.input`
            border-radius:5px;
            background-color:#1c1c1c;
            padding:1em;
            border-bottom:1px;
            border-right:1px;
            color:#fff;

            &[type='text']{
                grid-area:name;
            }
            &[type='email']{
                grid-area:email;
                margin-bottom:.30em;
                
            }
            &[type='password']{
                grid-area:password;
                margin-bottom: 2em;
            }
            &[type='checkbox']{
                grid-area:checkbox;
            }
            &:focus{
                :not([type='checkbox']){
                outline:none;
                box-shadow: 0 1px 0 0 orange;
                }
                
            }
`
export const Title = styled.h1`
    margin: 0;
    margin-top: 1em;
    grid-area: title;
    font-size: 1.75rem;
    font-weight:600;
    display:flex;
    align-items:center;
  
`

export const Submit = styled.button`
              grid-area:submit;
              color:white;
              font-size:1.2rem;
              background-color:#e50914;
              padding: .5em;
              border-radius:5px;
              text-align:center;
              &:hover{
                  background-color:red;
                  cursor: pointer;
              }
              &:disabled{
                    background-color:#f55;
              }
`

export const LinkText = styled(RouterLink)`
            grid-area: helpLink;
            font-size: .85rem;
            place-self: center end;
            text-decoration:none;
            color:grey;
            &:hover{
                text-decoration:underline;
            }
            
`

export const Error = styled.div`
            grid-area:error;
            background-color:yellow;
            color:red;
`

export const Text = styled.p`
           grid-area:signup;
           font-size: 1rem;
           color: grey;
           ${LinkText}{
               font-size:1rem;
               text-decoration: none;
               color:#fff;
               &:hover{
                   text-decoration:underline;
               }
           }

`

export const SmallText = styled.p`
        grid-area:recaptcha;
        font-size:.8rem;
        color:grey;
        margin:0;
        padding-right:.5em;
        ${LinkText}{
            text-decoration:none;
            color:blue;
            &:hover{
                   text-decoration:underline; 
            }
        }
`

export const Label = styled.label`
            grid-area:checkbox;
            font-size:0.85rem;
            display:flex;
            align-items:center;

`


