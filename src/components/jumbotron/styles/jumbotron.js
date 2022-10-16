import styled from "styled-components";

export const Item = styled.div`

        border-bottom: 8px solid #222;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        

`


export const Inner = styled.div`
    display:flex;
    flex-direction:${({direction})=>direction};
    align-items:center;
    justify-content: space-between;
    max-width:1100px;
    margin: 3em 2em;
    @media(max-width:1000px)
    {
        flex-direction:column;
        padding: 3em 1.125em ;
    }
`

export const Pane = styled.div`
            width:50%;
            @media(max-width:1000px){
                width:100%;
                text-align:center;
                
            }
    `

export const Image = styled.img`
    max-width:100%;
    height:auto;
`

export const Title = styled.h1`
            font-size:  3.125rem;
            line-height: 1.1;
            margin-bottom: 8px;
            @media(max-width:600px){
                font-size: 2.1875rem;;
            }
    `

export const Content = styled.h2`
            font-size: 1.625rem;
            font-weight: normal;
            line-height: normal;
            @media(max-width:600px){
                font-size: 1.125rem;;
            }
        `

export const Container = styled.div`
        background-color:black;
        color:white;
        display:flex;
        flex-direction:column;
        align-items:center;
        @media (max-width: 1000px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 3em;
        } 
        }
        
`