let React =  require('react');
let ReactDOM =  require('react-dom');


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
                <Result query={this.state}/>
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


class Result extends  React.Component{

    componentWillReceiveProps(nextProps)
    {
        console.log("results"+ nextProps.query);
    }

    render() {
        debugger
        return(<div className="results">
            <div className="in-stock">
                <h2><a href="#">ToothPaster</a></h2>
                <p>$2.99</p>
                <p>This is toothpaster in stock</p>
            </div>
        </div>);
    }
}
ReactDOM.render(<Search/>, document.getElementById('app'))