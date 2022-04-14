import {React,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';


const ThreadContentCard = (props) => 
{
    const [thread, setThread] = useState(null)

    const fetchSections = async (_mounted) => {
        const url = "http://localhost:3002/forum/get-thread";
        const urlId= url+props.idThread
        const reponse = await fetch(url);
        const newThread = await reponse.json();
        if(_mounted)
        setThread(newThread);
      }
      useEffect(() => {
          let isMounted = true;  
          
          fetchSections(isMounted)
          
          return () => { isMounted = false };
      },[]);
    return(
        <>
        <Container className='thread-content-card'>
            <Row>
                <Col className='thread-profile-info' sm="3">
                    <Container>
                        <img src= {require("assets/img/eva.jpg").default}  alt="" />
                        <Link to={"#"}>Doctor Profile Name</Link>
                        <h5>Badge Specialite</h5>
                    </Container>
                    
                </Col>
                <Col className='thread-comment-content' sm="9">
                <h3>Title</h3>
                <p>
                Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae  

                Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae Rzae 
                </p></Col>
            </Row>
        </Container>
        </>
    );
};
 
export default ThreadContentCard;