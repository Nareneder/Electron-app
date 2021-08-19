import React,{useState, useEffect } from "react";
import {Container,Row,Col} from 'react-bootstrap';
import Rytsec from './component/Rytsec'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactHlsPlayer from 'react-hls-player/dist';
import ReactPlayer from 'react-player';
import {HashRouter,Link,Route,Switch} from "react-router-dom";
import {auth} from './component/Fire';
import Chat from './component/Chat'
// import SendMessage from './component/SendMessage'

export default function Profile() {
  const logout=()=>{
      auth.signOut();
  }
  return (
    <HashRouter>
      <div className="main-div">
        <Row>
          <Col className="main_col_dv-l pr-0" md={2 }>
      <div className="left_dv lft-log">
        <img className="lft_tb_log" src="src/js/img/logo.png" />
        <ul>
        <li><img src='src/js/img/icon-2.png' alt="icon" /><span className="nv_dtl"><Link to="/" style={{color: "red", textDecoration: "none",}}>Profile</Link></span></li>
          <li><img src='src/js/img/icon-2.png' alt="icon" /><span className="nv_dtl"><Link to="/Mycorner" style={{color: "red", textDecoration: "none",}}>My Corner</Link></span></li>
          <li><img src='src/js/img/icon-2.png' alt="icon" /><span className="nv_dtl"><Link to="/Pdf" style={{color: "red", textDecoration: "none",}}>Pdf Corner</Link></span></li>
          <li><img src='src/js/img/icon-2.png' alt="icon" /><span className="nv_dtl"><Link to="/Onlinetst" style={{color: "red", textDecoration: "none",}}>Online Test</Link></span></li>
          <li><button className="btn btn-primary" onClick={logout}>Logout</button></li>
        </ul>
        </div>
        </Col>

       <Col className="main_col_dv-r pl-0" md={10}>
         <Rytsec />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Mycorner" component={Mycorner}/>
          <Route exact path="/Video" component={Video}/>
          <Route exact path="/Livvideo" component={Livvideo}/>
          <Route exact path="/Livvdinn" component={Livvdinn}/>
          <Route path="/Pdf">
            <Pdf />
          </Route>
          <Route path="/Onlinetst">
            <Onlinetst />
          </Route>
        </Switch>
        </Col>
        </Row>
      </div>
    </HashRouter>
  );
}

// You can think of these components as "pages"
// in your app.
function Home (){
    const [currentUser, setCurrentUser] = useState()
    useEffect(() => {
        const userid = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        })
        return userid
    }, []);
  return (
    <div className="fed_contnt">
      <Row>
        <Col md={4}>
          <div className="f_l">
        <div className="frd_top_cont">
        <img src='src/js/img/doremon.png' alt="icon" />
      
      <div className="prof_dtail">
        <ul>
          <li>Name</li>
          <li>Email<span className="prof_in_dtil">{currentUser && currentUser.email}</span></li>
          <li>Phone<span className="prof_in_dtil">1234567890</span></li>
          <li>Adderss<span className="prof_in_dtil"></span></li>
        </ul>
      </div>
      </div>
      </div>
        </Col>

        <Col md={8}>
        <div className="f_l">
        <div className="fd_ryt_dv fed_contnt">
      <h3>Lorem Lorem</h3>

      <div className="content">
        <ul>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
        </ul>
      </div>
      </div>
    </div>
        </Col>
      </Row>
    </div>
  );
}

function Mycorner() {
  return (
    <HashRouter>
    <div className="mycorner">
      <Container>
        <Row style={{paddingTop: "15px",}}>
          <Col md={3}>
            <div className="corner_crd">
             <Link to="/Video"><figure style={{margin: "0"}}>
                <img src="src/js/img/img-3.jpg" alt="image"/>
              </figure></Link>
            </div>
          </Col>
         
        </Row>
      </Container>
    </div>
    </HashRouter>
  );
}

function Pdf() {
  return (
    <div>
    <div className="mycorner">
  <Container>
    <Row style={{paddingTop: "15px",}}>
      <Col md={3}>
        <div className="corner_crd">
         <Link to=""><figure style={{margin: "0"}}>
            <img src="src/js/img/img-5.jpg" alt="image" download/>
          </figure></Link>
          <span className="pdf_txt">PDF Corner</span>
        </div>
      </Col>
      
    </Row>
  </Container>
</div>
</div>
  );
}

function Onlinetst() {
  return (
    <div className="liv_tst">
      <h2>Online Test available in IOS APP</h2>
    </div>
  );
}

function Video() {
  return (
    <div>
        <div className="mycorner">
      <Container>
        <Row style={{paddingTop: "15px",}}>
          <Col md={3}>
            <div className="corner_crd">
             <Link to="/Livvideo"><figure style={{margin: "0"}}>
                <img src="src/js/img/img-4.jpg" alt="image"/>
              </figure></Link>
            </div>
          </Col>
         
        </Row>
      </Container>
    </div>
    </div>
  );
}


function Livvideo() {
  return (
    <div>
        <div className="mycorner">
      <Container>
        <Row style={{paddingTop: "15px",}}>
          <Col md={3}>
            <div className="corner_crd">
             <Link to="/Livvdinn"><figure style={{margin: "0"}}>
                <img src="src/js/img/img-5.jpg" alt="image"/>
              </figure></Link>
            </div>
          </Col>
          
        </Row>
      </Container>
    </div>
    </div>
  );
}

function Livvdinn() {
  return (
    <div>
        <div className="mycorner">
      <Container>
        <Row style={{paddingTop: "15px",}}>
          <Col md={3}>
            <div className="corner_crd">
             <figure style={{margin: "0"}} data-toggle="modal" data-target="#hlbModal">
                <img src="src/js/img/img-6.jpg" alt="image"/>
              </figure>
            </div>
          </Col>

          <Col md={3}>
            <div className="corner_crd">
             <figure style={{margin: "0"}} data-toggle="modal" data-target="#mpforModal">
                <img src="src/js/img/img-6.jpg" alt="image"/>
              </figure>
            </div>
          </Col>

          <Col md={3}>
            <div className="corner_crd">
             <figure style={{margin: "0"}} data-toggle="modal" data-target="#yutbleModal">
                <img src="src/js/img/img-6.jpg" alt="image"/>
              </figure>
            </div>
          </Col>
         
        </Row>
      </Container>
    </div>
    
    <div className="modal fade" id="hlbModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-xl modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="modal-close-movie">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <Row>
          <Col md={9}>
          <ReactHlsPlayer
               src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
               
                    autoPlay={false}
                    controls={true}
                    width="100%"
                    id="modal-video"
                    height="100%"
                    hlsConfig={{
                      maxLoadingDelay: 4,
                      minAutoBitrate: 0,
                      lowLatencyMode: true,
                      maxBufferLength: 30,
                      maxMaxBufferLength: 600,
                      startPosition: -1,
                      debug: false,
                      liveSyncDurationCount: 3,
                      liveMaxLatencyDurationCount: Infinity,
                      liveDurationInfinity: false,
                    }}
                  />,
          </Col>

          <Col md={3}>
            <Chat />
          </Col>   
        </Row>
     
      </div>
    
    </div>
  </div>
</div>
<div className="modal fade" id="mpforModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-xl modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">  

      <Row>
      <Col md={9}>
        { <ReactPlayer url='http://media.w3.org/2010/05/bunny/movie.mp4' 
                  autoPlay={true}
                  controls={true}
                  width="100%"
                  height="100%"
                /> }    
        </Col>

        <Col md={3}>
          <Chat />
        </Col>   
      </Row>
     
      </div>
     
    </div>
  </div>
</div>



<div className="modal fade" id="yutbleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-xl modal-dialog" role="document">
    <div className="modal-content fram">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body "> 
      <Row>
      <Col md={9}>
          { <ReactPlayer url='https://www.youtube.com/watch?v=932fiU2mENM' 
                  autoPlay={true}
                  controls={true}
                  width="100%"
                  height="100%"
                /> }
          </Col>

          <Col md={3}>
           <Chat />
          </Col>          
      </Row> 
      
      </div>
     
    </div>
  </div>
</div>
    
    </div>
  );
}


