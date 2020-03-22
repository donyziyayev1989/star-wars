import React from 'react';
import axios from 'axios';

import {
    Link, 
    NavLink 
  } from "react-router-dom";

class Header extends React.Component {
    state = {
        count:0,
        items:[],
        selectType: "people",
        searchText: '',
        loading:false
    }
    sendDataToParent() {
        this.props.searchTerms(this.state)
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        
    }

    fetchItems(selectedType, searchData){
        let url = `https://swapi.co/api/${selectedType}/?search=${searchData}`;
        axios.get(url)
            .then(response => {
                this.setState({
                    count: response.data.count,
                    items: response.data.results,
                    loading:false
                });
                this.sendDataToParent()
            })
            .catch(err => console.log(err))
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading:true
        });
        
        
        let selectedType = this.state.selectType;
        let searchData = this.state.searchText;
        this.fetchItems(selectedType, searchData)
    }
    render() {
    //    console.log(this.state);
        return(
            <header>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">Star War</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/films">films </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/people">people</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/planets">planets </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/species">species </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/starships">starships</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/vehicles">vehicles</NavLink>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                                <select 
                                    className="form-control mr-sm-2" 
                                    name="selectType"
                                    value={this.state.selectType} onChange={this.handleInputChange}>
                                    <option value="films">films</option>
                                    <option value="people">people</option>
                                    <option value="planets ">planets </option>
                                    <option value="species">species</option>
                                    <option value="starships">starships</option>
                                    <option value="vehicles">vehicles</option>
                                </select>
                                <input 
                                    className="form-control mr-sm-2" 
                                    type="text" placeholder="Search" 
                                    name="searchText"
                                    value={this.state.searchText} onChange={this.handleInputChange} />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;