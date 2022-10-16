import React,{useState} from 'react';

import { BackGroundContainer,Logo,SignIn,Form, 
    Nav,Group,LinkText,Picture,Search,DropDown,
    Feature,Text,Title,Profile, SearchIcon, SearchInput,
    PlayButton } from "./styles/header";
import {Link} from 'react-router-dom'

function Header({ children,bg=true, ...restProps }){
    return(
        <BackGroundContainer bg={bg} { ...restProps }>{children}</BackGroundContainer>
    )
}
Header.Nav = function HeaderNav({ children, ...restProps }){
    return(
        <Nav { ...restProps }>{children}</Nav>
    )
}

Header.Logo = function HeaderLogo({ children, to , ...restProps }){
    return(
        <Link to={to} ><Logo { ...restProps }>{children}</Logo></Link>
    )
}

Header.SignIn = function HeaderSignIn({ children, ...restProps }){
    return(
        <SignIn { ...restProps }>{children}</SignIn>
    )
}
Header.Form = function HeaderForm({ children, ...restProps }){
    return(
        <Form { ...restProps }>{children}</Form>
    )
}

Header.Group = function HeaderGroup({children,...restProps}){
   return  <Group {...restProps} >{children}</Group>
}

Header.LinkText = function HeaderLinkText({children,...restProps}){
    return <LinkText{...restProps}>{children}</LinkText>
}

Header.Picture = function HeaderPicture({src,...restProps}){
    return <Picture {...restProps} src={`/images/users/${src}.png`}/>
}

Header.DropDown = function HeaderDropDown({children,...restProps}){
    return <DropDown {...restProps} >{children}</DropDown>
}

Header.Search = function HeaderSearch({searchTerm,setSearchTerm,...restProps}){
    
    const [searchActive,setSearchActive] = useState(false)
    return(
<Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>)
}

Header.Feature = function HeaderFeature({children,...restProps}){
    return(<Feature {...restProps}>{children}</Feature>)
}

Header.Text = function HeaderText({children,...restProps}){
    return(<Text {...restProps}>{children}</Text>)
}

Header.Title = function HeaderTitle({children,...restProps}){
    return(<Title {...restProps}>{children}</Title>)
}

Header.Profile = function HeaderProfile({children,...restProps}){
    return <Profile {...restProps} >{children}</Profile>
}

Header.PlayButton = function HeaderPlayButton({children,...restProps}){
    return <PlayButton {...restProps}>{children}</PlayButton>
}
export default Header