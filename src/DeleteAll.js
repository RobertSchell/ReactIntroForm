// create a component button that will empty the table
import React, { Component } from 'react'

class DeleteAll extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.removeAllMovies()}>Delete All Movies</button>
            </div>
        )
    }
}

export default DeleteAll