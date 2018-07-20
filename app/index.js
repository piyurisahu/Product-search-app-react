let React =  require('react');
let ReactDOM =  require('react-dom');
let products = require('./products');

class Search extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            query : ""
        }
    }
    handleQuery(event)
    {
        let query = event.target.value;
        this.setState({query: query.toLowerCase().trim()});
    }
    render() {
        return(
            <div className="search">
                <SearchBar onQuery={this.handleQuery.bind(this)}/>
                <Results products = {this.props.products}query={this.state.query}/>
            </div>
        )    }
}



class SearchBar extends React.Component{


    render() {
        return(<div className="search-bar">
            <input onChange={this.props.onQuery} placeholder="Search"/>
        </div>);
    }
}


class Results extends  React.Component{

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

class Result extends React.Component {
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
ReactDOM.render(<Search products={products}/>, document.getElementById('app'))