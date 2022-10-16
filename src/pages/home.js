import React from 'react';
import JumbotronContainer from '../container/JumbotronContainer';
import FooterContainer from '../container/footerContainer';
import FaqsContainer from '../container/FaqsContainer';
import HeaderContainer from '../container/HeaderContainer';
import Feature from '../components/feature'
import OptFormContainer from '../container/optFormContainer'

function Home()
{
    return(
        <>
            <HeaderContainer>
                <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
                <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
                <OptFormContainer />
            </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </>
    )
}

export default Home