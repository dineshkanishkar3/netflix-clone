import styled from 'styled-components';

export const Container=styled.section`
        border-bottom: 8px solid #222;
        padding: 3em 0;
        color:white;
        
`
export const Inner = styled.div`
    max-width:1100px;
    margin: 0 auto;
    padding:3em;
    @media(max-width:600px){
         padding:0;
    }

`

export const Frame = styled.div`

        padding:0 7%;    
`

export const Title = styled.h1`
        text-align:center;
        font-size:3rem;
        
`

export const Item = styled.div`
        background-color:#303030;
        margin-bottom: 1em;
`

export const Header = styled.h2`
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom: 3px solid black;
        padding:  .75em 1em;
        margin:0;

        img {
        filter: brightness(0) invert(1);
        width: 1.2em;
        
        @media (max-width: 600px) {
            width: 1em;
        }
        @media (max-width: 600px) {
            font-size: 0.875em;
        }

    }
`

export const Body = styled.p`
        margin:0;
        padding: 1.4em 1.2em;
        font-size: 1.8rem;
        line-height: 1.5em;
        @media(max-width:600px){
            font-size: 1.2rem;
            
        }
`
