import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';


const ThreadContentCard = () => 
{
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
                <Col className='thread-comment-content' sm="9"><p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec bibendum dui. Phasellus nec magna vitae augue vehicula ornare nec vel augue. Nunc purus leo, vestibulum ac lacus non, egestas consectetur tellus. Nullam sit amet hendrerit quam. Maecenas quis pellentesque tellus, in laoreet tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed metus risus, mattis sit amet urna vel, ornare imperdiet ligula.
                
                Sed lorem arcu, pretium in molestie non, finibus et nibh. Cras laoreet pellentesque mi nec viverra. Phasellus in congue risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce est purus, cursus sit amet enim quis, lobortis gravida purus. Ut ultricies nec eros sed gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam non mattis dictum. Quisque eleifend mauris tortor, eget fermentum magna scelerisque sit amet. Nullam sed turpis a libero ornare pellentesque nec vitae sapien. Praesent ut mi at mi pulvinar eleifend ac vel arcu.
                
                Nunc massa eros, auctor in pellentesque a, convallis id sem. Cras id lacus nec lectus blandit venenatis. Curabitur sit amet lectus eget nisl porta volutpat sit amet aliquet erat. Nam non enim id neque volutpat gravida vel non lorem. Vestibulum vel dolor blandit, laoreet urna in, sollicitudin massa. Pellentesque sollicitudin vulputate est, eget blandit sapien sollicitudin a. Donec et lacus in enim aliquam laoreet. Quisque lacus ligula, tempus vitae leo vel, suscipit vehicula lorem.
                
                Suspendisse elementum nisi in malesuada faucibus. Etiam laoreet nulla vel dapibus pharetra. Donec viverra mauris eget iaculis tincidunt. Suspendisse porta scelerisque lectus eget hendrerit. Etiam in tempus augue. Suspendisse sodales egestas velit, at pulvinar magna venenatis non. Aenean ultrices sed metus a varius. Curabitur sit amet erat ut erat pretium dignissim non nec leo. Aliquam eget interdum ante, eget sodales felis. Aenean pharetra faucibus justo sit amet feugiat. Morbi euismod quam non leo tristique, eu tincidunt massa auctor.
                
                Ut faucibus venenatis odio ac euismod. Phasellus pharetra suscipit velit, vitae sodales quam imperdiet vestibulum. Nulla facilisi. Pellentesque egestas sapien metus, fringilla ultricies dolor suscipit quis. Nam eget sollicitudin neque. Quisque massa enim, gravida tincidunt elit vel, varius pharetra risus. In hac habitasse platea dictumst. Etiam non sagittis mi. Sed lobortis scelerisque odio vel auctor. Morbi lobortis congue nibh. In ut mauris sollicitudin, molestie libero sit amet, volutpat dui. Curabitur in arcu quis enim sagittis ornare. Aenean pharetra mi non rhoncus rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Col>
            </Row>
        </Container>
        </>
    );
};
 
export default ThreadContentCard;