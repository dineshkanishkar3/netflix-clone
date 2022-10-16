import React,{useEffect,useState,useContext} from 'react'
import FireBaseContext from '../context/FireBaseContext'
import ProfileContainer from './profilleContainer'
import Loading from '../components/loading'
import Header from '../components/header'
import Card from '../components/card'
import Player from '../components/player'
import FooterContainer from './footerContainer'
import Fuse from 'fuse.js'


function BrowseContainer({slides}){
    const {firebase}  = useContext(FireBaseContext)
    const [searchTerm,setSearchTerm] = useState('')
    const [profile,setProfile] = useState({})
    const [loading,setLoading] = useState(true)
    const [category,setCategory] = useState('series')
    const [slideRows,setSlideRows] = useState([])

    const user = firebase.auth().currentUser || {}
    
    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, [profile.displayName]);
    
      useEffect(() => {
        setSlideRows(slides[category]);
      }, [slides, category]);
    
      useEffect(() => {
        const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] })
        const results = fuse.search(searchTerm).map(({item})=>item)
        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
          setSlideRows(results);
        } else {
          setSlideRows(slides[category])
        }
      }, [searchTerm])


    return profile.displayName? (
        <>
        {loading?<Loading src={user.photoURL} bg={true}/>:<Loading.ReleaseBody/>}
        <Header src='joker1' bg={false}>
       <Header.Nav>
       <Header.Group>
       <Header.Logo to='' src='/images/misc/logo.svg'/>
           <Header.LinkText to="\browse" active={category==='series'?true:false} onClick={()=>setCategory('series')}> 
               Series
           </Header.LinkText>
           <Header.LinkText to="\browse" active={category==='films'?true:false} onClick={()=>setCategory('films')}>
               Films
           </Header.LinkText>
       </Header.Group>
       <Header.Group>
       <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
           <Header.Profile>
           <Header.Picture src={user.photoURL} />
           <Header.DropDown>
               <Header.Group>
                 <Header.Picture src={user.photoURL} />
                 <Header.LinkText to={''}>{user.displayName}</Header.LinkText>
           </Header.Group>
           <Header.Group>
               <Header.LinkText onClick={()=>firebase.auth().signOut()}>SignOut</Header.LinkText>
           </Header.Group>
           </Header.DropDown>
           </Header.Profile>
       </Header.Group>
       </Header.Nav>

        <Header.Feature>
            <Header.Title>Watch Joker Now</Header.Title>
            <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
            futile attempt to feel like he's part of the world around him.
            </Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
        </Header>
        <Card.Group>
            {slideRows.map((slide)=>{
                return <Card key={`${category}-${slide.title}`}>
                    <Card.Title>{slide.title}</Card.Title>
                    <Card.Entities>
                        {
                            
                             slide.data.map((item)=>(
                                <Card.Item key={item.id} item={item}>
                                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>

                                </Card.Item>
                             ))
                        }
                    </Card.Entities>
                    <Card.Feature category={category}>
                      <Player>
                          <Player.Button/>
                          <Player.Video src="/videos/bunny.mp4"/> 
                      </Player>
                    </Card.Feature> 
                </Card>
            })}
        </Card.Group>


        <FooterContainer/>
        </>
    )
        : <ProfileContainer user={user} setProfile={setProfile}/>
  

}

export default BrowseContainer