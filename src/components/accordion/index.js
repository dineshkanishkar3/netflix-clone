import React,{useState,useContext,createContext} from "react";
import { Container,Inner,Frame,Title,Item,Header,Body } from "./styles/accordion";

const ToggleContext = createContext()

function Accordion({children,...restProps}){

    return (
        <Container {...restProps}><Inner>{children}</Inner></Container>
    )
}

Accordion.Frame = function({children,...restProps}){
    return(
        <Frame>{children}</Frame>
    )
}
Accordion.Title = function({children,...restProps}){
    return(
        <Title>{children}</Title>
    )
}
Accordion.Item = function AccordionItem({children,...restProps}){

    const [isToggled,setIsToggled] = useState(false)

    return(
        <ToggleContext.Provider value={{isToggled,setIsToggled}}>
        <Item>{children}</Item>
        </ToggleContext.Provider>
    )
}
Accordion.Header = function AccordionHeader({children,...restProps}){
    const {isToggled,setIsToggled} = useContext(ToggleContext)
    return(
        <Header onClick={()=>setIsToggled(prev=>!prev)}>
            {children}
            {isToggled?<img src='/images/icons/close-slim.png'alt=""/>:<img src='/images/icons/add.png' alt=""/>}
        </Header>
    )
}
Accordion.Body = function AccordionBody({children,...restProps}){
    const {isToggled} = useContext(ToggleContext)
    return(
        isToggled?<Body>{children}</Body>:null
    )
}

export default Accordion