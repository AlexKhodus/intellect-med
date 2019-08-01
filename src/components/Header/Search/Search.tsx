import React from "react";
import search from './search.svg';
import './style.css';

class Search extends React.Component{

    constructor(props: any){
        super(props);
        this.state ={
            active: false
        };
        this.openSearch = this.openSearch.bind(this);
    }

    openSearch(){
        this.setState(state => ({
            active: true
        }));
    }

    render(){
        return (
            <button className="headerSearch" onClick={(e)=>this.openSearch()}>
                <img src={search} title='logotype' alt="logotype" />
            </button>
        );
    };
};

export default Search;