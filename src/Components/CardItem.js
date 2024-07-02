import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Cards(props) {
    return (
        <>
        <div className="my-4 mx-lg-4">
        <Card style={{ width: '18rem' }} className="border-3 border-secondary rounded-0">
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="pb-5">
        {props.body}
        </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item className="border-bottom border-secondary">{props.list1}</ListGroup.Item>
        <ListGroup.Item className="border-bottom border-secondary">{props.list2}</ListGroup.Item>
        <ListGroup.Item>{props.list3}</ListGroup.Item>
        </ListGroup>
        </Card>
        </div>
        
        </>
    );
}

export default Cards;