import React from 'react'
import Jumbotron from '../components/jumbotron'
import jumbotronData from '../fixtures/jumbo.json'

function JumbotronContainer(){
return(
    <Jumbotron.Container>
        {jumbotronData.map(data => {
            return <Jumbotron key={data.id} direction={data.direction}>
                <Jumbotron.Pane>
                    <Jumbotron.Title>{data.title}</Jumbotron.Title>
                    <Jumbotron.Content>{data.subTitle}</Jumbotron.Content>
                </Jumbotron.Pane>
                <Jumbotron.Pane>
                    <Jumbotron.Image  src={data.image} alt={data.alt} />
                </Jumbotron.Pane>
            </Jumbotron>

        })}
    </Jumbotron.Container>
)
}

export default JumbotronContainer