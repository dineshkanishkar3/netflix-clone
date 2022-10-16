import React from 'react';
import Profiles from '../components/profile'
import Header from '../components/header'
import * as ROUTE from '../constants/routes'

function ProfileContainer({user,setProfile}){
    return(
        <>
        <Header bg={false}>
        <Header.Nav>
            <Header.Logo to={ROUTE.HOME} src='/images/misc/logo.svg' alt='Netflix'></Header.Logo>
        </Header.Nav>
    </Header>
    <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>

    )
}

export default ProfileContainer