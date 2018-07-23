import React from 'react';
import SearchBar from "./searchBar";
import Results from "./results"

export default class Search extends React.Component {
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


// module.exports = Search;