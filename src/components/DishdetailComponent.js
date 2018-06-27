import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component{

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
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

    renderComments(dish) {
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

    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.props.selectedDish != null && <h4>Comments</h4>}
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
            </div>
        );
    }
}

export default Dishdetail
