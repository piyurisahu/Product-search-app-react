import React from "react";

export  default class Result extends React.Component {
    render()
    {
        return (<div className="results">
            <div className="in-stock">
                <h2><a href="#">{this.props.product.name}</a></h2>
                <p>{this.props.product.price}</p>
                <p>{this.props.product.description}</p>
            </div>
        </div>)
    }
}