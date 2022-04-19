import React from 'react';

import {Button, Card, Col} from "react-bootstrap";
import {AiFillDelete, AiFillEdit} from "react-icons/all";

const UserItem = props => {
    return (
        <Col>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={`http://localhost:3002/${props.image}`} alt={props.name} style={{height: '250px'}} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.price}</Card.Subtitle>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="primary">Edit <AiFillEdit/></Button>
                    <Button style={{marginLeft:'102px'}} variant="danger"> <AiFillDelete/></Button>

                </Card.Body>
            </Card>
        </Col>
        // <li className="user-item">
        //     <Card className="user-item__content">
        //         <Link to={`/${props.id}/places`}>
        //             <div className="user-item__image">
        //                 <Avatar image={`http://localhost:5000/${props.image}`} alt={props.name} />
        //             </div>
        //             <div className="user-item__info">
        //                 <h2>{props.name}</h2>
        //                 <h3>
        //                     {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
        //                 </h3>
        //             </div>
        //         </Link>
        //     </Card>
        //src={`http://localhost:5000/${props.image}`}
        // </li>

    );
};

export default UserItem;
