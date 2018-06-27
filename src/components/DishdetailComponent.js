import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    function RenderComments({dish}) {
        if (dish != null)
            
            return dish.comments.map((comm) => {
                return (
                    <ul key={comm.id} className="list-unstyled">
                        <li>{comm.comment}</li>
                        <li>-- {comm.author} , {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}</li>
                    </ul>
                );
            });
            

        else
            return(
                <div></div>
            );
    }

    const Dishdetail = (props) => {
        return (
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.selectedDish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    {props.selectedDish != null && <h4>Comments</h4>}
                    <RenderComments dish={props.selectedDish} />
                </div>
            </div>
            </div>
        );
    }


export default Dishdetail
