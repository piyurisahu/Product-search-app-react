import React from 'react';

export  default class SearchBar extends React.Component{


    render() {
        return(<div className="search-bar">
            <input onChange={this.props.onQuery} placeholder="Search"/>
        </div>);
    }
}
