import Footer from '../components/footer'
import footerData from '../fixtures/footer.json'
function FooterContainer(){
    return(
        <Footer>
            <Footer.Title>
                 Questions? Call 000-800-040-1843
            </Footer.Title>
            <Footer.Row>
            {
                footerData.map((col,id)=>{
                    return <Footer.Column key={id}>
                        {
                            col.map((link,linkid)=>(
                                <Footer.Link key={linkid} href='#'>{link}</Footer.Link>
                            ))
                        }
                    </Footer.Column>
                })
            }
            </Footer.Row>
            <Footer.Text>
            Netflix India
            </Footer.Text>
        </Footer>
    )
}

export default FooterContainer