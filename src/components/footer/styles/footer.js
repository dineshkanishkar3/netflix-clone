import styled from 'styled-components'

export const Container = styled.footer`
        padding:3em;
        color:#757575;
        font-size: 0.875rem;
`

export const Inner = styled.div`
        max-width:1100px;
        margin: 0 auto;
`

export const Row = styled.div`
        display:grid;
        grid-template-columns:  repeat(auto-fill, minmax(230px, 1fr));
        margin:.5em;
        @media(max-width: 800px){
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            grid-gap: 1.2em;
        }

`

export const Column = styled.div`
        display:flex;
        flex-direction:column;
`

export const Title = styled.p`
        padding:.5em 0;
        font-size:1.2rem;
`

export const Text = styled.p`
        padding:.5em;
`

export const Link = styled.a`

        padding:.5em 0;

`