import React from "react";
import Result from "./result";
export default class Results extends  React.Component{

    constructor(props)
    {
        super(props)
        this.state = {
            foundProducts : props.products
        }
    }

    componentWillReceiveProps(nextProps)
    {
        console.log("results"+ nextProps.query);
        console.log(nextProps.products);
        let foundProducts = nextProps.products.filter( product => {
            return product.name.toLowerCase().match(nextProps.query.toLowerCase()) || product.description.toLowerCase().match(nextProps.query.toLowerCase())
        })
        console.log(foundProducts);
        this.setState({foundProducts: foundProducts});
    }

    render() {
        return(<div>
            {this.state.foundProducts.map(
                function (product, i) {
                    return <Result product={product} key={i}/>
                }
            )}
        </div>);
    }
}

