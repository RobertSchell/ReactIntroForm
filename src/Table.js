import React, { Component } from 'react'

//TABLE HEADER SIMPLE COMPONENT
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Title</th>
                <th>Actors</th>
                <th>Plot</th>
                <th>imdbRating</th>
                <th>Director</th>
                <th>Year</th>
                <th>Date Added</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

//TABLE BODY SIMPLE COMPONENT
const TableBody = (props) => {

    //construct rows
    //use map to iterate over each row and wrap it in
    //a html table row  
    //registered an on click listener to remove the character

    const rows = props.data.map((row, index) => {
        return (      
            <tr key={index}>
                <td>{row.title}</td>
                <td>{row.actors}</td>
                <td>{row.plot}</td>
                <td>{row.imdbRating}</td>
                <td>{row.director}</td>
                <td>{row.year}</td>
                <td>{row.dateAdded}</td>
                <td><button onClick={() => props.removeMovie(index)}> Delete</button></td>  
            </tr>
        )      
    })
    //return rows wrapped in tbody
    return <tbody>{rows}</tbody>
}

// TABLE is our main Component
class Table extends Component {
    render() {
        //read props passed in from App.js
        const {
            movieData,
            removeMovie
        } = this.props;
  
        return (
            <table>
                <TableHeader/>
                <TableBody
                data={movieData}
                removeMovie={removeMovie}
                />
            </table>
        )
    }
}

export default Table
