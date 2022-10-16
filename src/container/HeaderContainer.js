import React from 'react'
import Header from '../components/header'
import * as ROUTE from '../constants/routes'

function HeaderContainer({children,...restProps})
{   
    return(
        <Header {...restProps}>
            <Header.Nav>
                <Header.Logo to={ROUTE.HOME} src='/images/misc/logo.svg'></Header.Logo>
                <Header.SignIn to={ROUTE.SIGN_IN}>Sign In</Header.SignIn>
            </Header.Nav>
            <Header.Form {...restProps}>
                {children}
            </Header.Form>
        </Header>
    )
}

export default HeaderContainer