import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #222;
    text-align: center;
    padding: 165px 45px;
`;

export const Title = styled.h1`
        font-size: 4rem;
        text-align:center;
        font-weight: 700;
        margin:.5;
        margin-bottom: .25em;
        padding: 0 5%;
        @media(max-width:1500px){
                font-size:3rem;
        }
        @media(max-width:600px){
                font-size: 1.8rem;
                padding:0;
                
        }
`

export const SubTitle = styled.h2`
        text-align:center;
        margin: .5em 0 0 0;
        font-weight:normal;
        @media(max-width:1500px){
                font-size:1.5rem;
        }
        @media(max-width:600px){
                font-size:1rem;
        }
`