import React from "react"
import Accordion from "../components/accordion"
import OptFormContainer from "./optFormContainer"
import faqs from '../fixtures/faqs.json'

function FaqsContainer()
{
    return(
    <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion.Frame>
            {
                faqs.map(faq=>{
                    return <Accordion.Item key={faq.id}>
                        <Accordion.Header>{faq.header}</Accordion.Header>
                        <Accordion.Body>{faq.body}</Accordion.Body>
                    </Accordion.Item>
                })
            }
        </Accordion.Frame>
        
        <OptFormContainer/>
    </Accordion>
    )
}
export default FaqsContainer