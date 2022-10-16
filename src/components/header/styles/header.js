import styled from "styled-components";
import { Link as ReachRouterLink } from 'react-router-dom';

export const BackGroundContainer = styled.header`
        /* height: calc(100vh + 8px); */
        
        background-color:#000;
        background : linear-gradient(rgba(0, 0, 0, 0.5),
                       rgba(0, 0, 0, 0.5)), url(${({ src,bg }) => (src ? `/images/misc/${src}.jpg` :bg?'/images/misc/background.jpg':'none')}) no-repeat;
                       background-size: cover ;
        border-bottom : ${({bg})=>bg?'8px solid #222':'none'};
        background-blend-mode:darken,luminosity ;
        color:#fff;
        display:flex;
        flex-direction:column;
        margin:0;
        @media(max-width:600px){
        background : linear-gradient(rgba(0, 0, 0, 0.5),
                       rgba(0, 0, 0, 0.5)), url(${({ src,bg }) => (src ? `/images/misc/${src}.jpg` :'none')}) no-repeat;
                       background-size: cover ;
        }
`
export const Nav = styled.nav`
        padding: 1.5em 3em;
        display:flex;
        align-items: flex-start;
        justify-content:space-between;
        @media(max-width:600px){
                padding: 1em 1.5em;
        } 
       
      
`
export const Logo = styled.img`
        width:175px;
        cursor : pointer;
        @media(max-width:1500px){
              width:150px;  
        }
        @media(max-width:600px){
                width:100px;
        }
`

export const SignIn = styled(ReachRouterLink)`
        background-color: #e50914;
        padding: .5em 1em;
        border-radius: 3px;
        font-size:1.2rem;
        text-decoration: none;
        color:white;
        cursor: pointer;
        &:hover{
                background-color:red;
        }
        @media(max-width:1500px){
        /* padding: .25em  .5em;
        font-size:  1.1em; */
        }
        @media(max-width:600px){
                font-size:1rem;
                padding: .25em .75em;
        }
`

export const Form = styled.div`
        max-width:800px;
        height:100%;
        margin:0 auto;
        display:flex;
        flex-direction:column;
        justify-content:center;
        padding: ${({isform})=>isform?0:'6em 0' };
        @media(max-width:1499px){
                max-width:700px;
        }
        @media(max-width:950px){
                width:65%;
                min-width:475px;
                padding:0;
        }

`
export const Group = styled.div`
        padding:0;
        display:flex;
        align-items:center;
`

export const LinkText = styled.p`
        color:#fff;
        text-decoration:none;
        margin: 0 1em;
        cursor: pointer;
        font-weight: ${({active})=>active?'bold':'normal'};
`
export const Picture = styled.img`
                width: 30px;
                cursor:pointer;
`



export const Title = styled.h1`
       font-size:3rem;
       margin:0;

        @media(max-width:900px){
                font-size:2rem;
        }
       @media(max-width:600px){
               font-size:1.5rem;
       }
`
export const DropDown = styled.div`
                display: none;
                position:absolute;
                top: 32px;
                right: 10px;
                background-color: black;
                padding: 10px;
                width: 100px;
                ${Group}{
                        margin-bottom:10px;
                        &:last-of-type {margin-bottom: 0;}
                        ${LinkText}{
                        cursor:pointer;
                       margin:0;
                         }
                         ${Picture}{
                        cursor:default;
                        }

                }
                
               
                

`

export const Search=styled.div`
        display: flex;
  align-items: center;
  svg {
    color: white;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: none;
  }
`

export const Feature = styled.div`
                padding: 9em 3em 20em;
                
                @media(max-width:1090px){
                        padding: 5% 3% 7%;
                }
                @media(max-width:900px){
                padding:3em;
        }

                @media(max-width:600px){
                        padding: 1em;
                }
`
export const Text = styled.p`

                width:50%;
                font-size:1.3rem;
                line-height: 2rem;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

                @media(max-width:900px){
                        font-size: 1rem;
                        width:60%;
                        line-height:1.2rem;
        }
                @media(max-width:600px){
                        font-size:.85rem;
                        width:75%;
                        line-height:1rem;
                        /* display:none; */
                }
                
`
export const Profile = styled.div`
                display:flex;
                align-items:center;
                position:relative;
                margin-left:1em;
                &:hover > ${DropDown}{
                                display:flex;
                                flex-direction:column;     
                }
                ${Group}{
                        display:flex;
                        justify-content:space-between;
                }
`

export const SearchIcon = styled.button`
                        cursor: pointer;
                        background-color: transparent;
                        border: 0;
                        outline: 0;
                        height: 32px;
                        width: 32px;
                        padding: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img {
                        filter: brightness(0) invert(1);
                        width: 16px;
                        }
`
export const SearchInput = styled.input`
       background-color: rgba(64, 64, 64, 0.5);
        color: white;
        border: 1px solid white;
        transition: width 0.5s;
        height: 30px;
        font-size: 14px;
        border-radius: 4px;
        margin-left: ${({ active }) => (active === true ? '10px' : '0')};
         padding: ${({ active }) => (active === true ? '0 10px' : '0')};
         opacity: ${({ active }) => (active === true ? '1' : '0')};
        width: ${({ active }) => (active === true ? '200px' : '0px')};
  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const PlayButton = styled.button`
        padding: .25em 1.2em;
        font-size:1.2rem;
        border-radius: 5px;
        box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
        background-color: #e6e6e6;
        cursor: pointer;
        transition: background-color 0.5s ease;
        &:hover {
        background-color: #ff1e1e;
        color: white;
        }

        @media(max-width:900px){
               font-size:1rem;
        }

                @media(max-width:600px){
                        font-size:.85rem;                }
`