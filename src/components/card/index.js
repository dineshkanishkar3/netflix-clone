import React,{useState,createContext,useContext} from 'react'
import { Container,Group,Title,SubTitle,Feature,FeatureTitle,FeatureText,Item,Image,Meta,Text,Entities,Content,FeatureClose,Maturity } from './styles/card'

const FeatureContext = createContext()
function Card({children, ...restProps}){
  
    const [showFeature,setShowFeature] = useState(false)
    const [itemFeature,setItemFeature] = useState({})

    return(
        <FeatureContext.Provider value={{showFeature,setShowFeature,itemFeature ,setItemFeature}}>
            <Container {...restProps} >{children}</Container>
        </FeatureContext.Provider>
    )
} 

Card.Group = function CardGroup({children,...restProps}){
        return(
            <Group {...restProps}>
                {children}
            </Group>
        )
}

Card.Title = function CardTitle({children,...restProps}){
    return(
        <Title {...restProps}>
            {children}
        </Title>
    )
}

Card.SubTitle = function CardSubTitle({children,...restProps}){
    return(
        <SubTitle {...restProps}>
            {children}
        </SubTitle>
    )
}
Card.Feature = function CardFeature({children,category,...restProps}){
    const {showFeature,setShowFeature,itemFeature} = useContext(FeatureContext)
    return showFeature?(
        <Feature {...restProps}  src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
        <Content>
            <FeatureTitle>
                {itemFeature.Title}
            </FeatureTitle>
            <FeatureText>
                {itemFeature.description}
            </FeatureText>
            <FeatureClose onClick={()=>setShowFeature(false)}>
                <img src={'images/icons/close.png'}/>
            </FeatureClose>
            <Group margin="30px 0" flexDirection="row" alignItems="center">
                <Maturity rating={itemFeature.maturity}>
                    {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
                </Maturity>
                <FeatureText fontWeight="bold" textTransform="capitalize ">
                    {itemFeature.genre}
                </FeatureText>
            </Group>
            {children}
        </Content>
        </Feature>
    ):null
}


Card.FeatureTitle = function CardFeatureTitle({children,...restProps}){
    return(
        <FeatureTitle {...restProps}>
            {children}
        </FeatureTitle>
    )
}

Card.FeatureText = function CardFeatureText({children,...restProps}){
    return(
        <FeatureText {...restProps}>
            {children}
        </FeatureText>
    )
}

Card.Meta = function CardMeta({children,...restProps}){
    return(
        <Meta {...restProps}>
            {children}
        </Meta>
    )
}

Card.Image = function CardImage({...restProps}){
    return(
        <Image {...restProps} />
    )
}

Card.Item = function CardItem({item,children,...restProps}){
    const {setItemFeature,setShowFeature} = useContext(FeatureContext)
    return(
        <Item {...restProps} onClick={()=>{
            setItemFeature(item) 
            setShowFeature(true)}}>
            {children}
        </Item>
    )
}

Card.Text = function CardText({children,...restProps}){
    return(
        <Text {...restProps} >{children}</Text>
    )
}

Card.Entities = function CardEntities({children,...restProps}){
    return(
        <Entities {...restProps} >{children}</Entities>
    )
}
Card.Content = function CardContent({children,...restProps}){
    return(
        <Content {...restProps} >{children}</Content>
    )
}
Card.Maturity = function CardMaturity({children,...restProps}){
    return(
        <Maturity {...restProps} >{children}</Maturity>
    )
}

export default Card