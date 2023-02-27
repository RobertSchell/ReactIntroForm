import React, { Component } from 'react';

class MovieForm extends Component {
    // constructors are initialized when Form is created (instantiated)
    // we set the initial state of our form and save it to state.
    constructor(props){
        super(props); //inheriting props from component.

        //set the initial state of the Form
        this.initalState = {
            title: '',
            actors: '',
            plot: '',
            imdbRating: '',
            director: '',
            year: '',
            // dateAdded: `${(new Date())}`,
            dateAdded: new Date().toString(),
        };

        //set our initial state to state.
        this.state = this.initalState;
    }

    handleChange = event => {
        //get name and value out of target (element that changed)
        const { name, value } = event.target;

        //update our state 
        this.setState ({
            [name]: value
        });
    }

    // onFormSubmit = (event) => {

    //     //standard for onSubmits
    //     event.preventDefault();

    //     //this.setState({dateAdded: new Date()});
    
    //     //set the current state of our form to the handle submit
    //     this.props.addMovie(this.state);
    
    //      //clear inputs by setting form to initial state
    //     this.setState(this.initalState);
        
    // }

    onFormSubmit = (event) => {
        //standard code for onSubmits 
        event.preventDefault();
        //const newDate = new Date().toString();
        
        this.setState({dateAdded:new Date().toString()});
        
        //set the current state of our form to the handle submit
        this.props.addMovie(this.state);

        //clear inputs by setting form to inital state
        //this.initalState.date = newDate;
        //this.setState(this.initalState);   
    } 

    render() {
        //hook in data from state
        const { title, actors, plot, imdbRating, director, year } = this.state;
        return (
            <form onSubmit={this.onFormSubmit}>
                <h2>Add a New Movie Here:</h2>
                <label htmlFor="title">Title:</label>
                <input 
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={this.handleChange}
                />
                <label htmlFor="actor">Actors:</label>
                <input
                    type="text"
                    id="actors"
                    name="actors"
                    value={actors}
                    onChange={this.handleChange}
                />
                <label htmlFor="plot">Plot:</label>
                <input
                    type="text"
                    id="plot"
                    name="plot"
                    value={plot}
                    onChange={this.handleChange}
                />
                <label htmlFor="imdbRating">imdb Rating:</label>
                <input
                    type="text"
                    id="imdbRating"
                    name="imdbRating"
                    value={imdbRating}
                    onChange={this.handleChange}
                />
                <label htmlFor="director">Director:</label>
                <input
                    type="text"
                    id="director"
                    name="director"
                    value={director}
                    onChange={this.handleChange}
                />
                <label htmlFor="year">Year:</label>
                <input
                    type="text"
                    id="year"
                    name="year"
                    value={year}
                    onChange={this.handleChange}
                />
                <br/>
                <button type="submit">
                    Submit Movie to List
                </button>
            </form> 
        );
    }

}

export default MovieForm
