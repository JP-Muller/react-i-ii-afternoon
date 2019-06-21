import React, {Component} from 'react'
import data from './data'

class MainContent extends Component {
    constructor() {
        super()

        this.state = {
            i: 0
        }
        this.handleNext = this.handleNext.bind(this)
        this.handlePrevious = this.handlePrevious.bind(this)
    }
    handleNext() {
        if (this.state.i < data.length-1){
            let i = ++this.state.i
            this.setState({
                i
            })
            console.log(this.state.i)
        }
    }

    handlePrevious() {
        if(this.state.i > 0){
            let i = --this.state.i
            this.setState({
                i
            })
            }
        
        console.log(this.state.i)
    }


    render() {
        console.log(data)
        return (
            <div id="parentDiv"> 
                <div id='mainContent'> <div id='counter'>{data[this.state.i].id}/{data.length}</div>
                    <div id="firstNameLast">{`${data[this.state.i].name.first} ${data[this.state.i].name.last}`}</div>
                    <div id='bornIn'><b>From:</b> {`${data[this.state.i].city}, ${data[this.state.i].country}`}</div>
                    <div id="jobTitle"><b>Job Title:</b> {`${data[this.state.i].title}`}</div>
                    <div id="employer"><b>Employer:</b> {data[this.state.i].employer}</div>

                    <div id='favMovies'><b>Favorite Movies:</b> </div>
                    <div>1. {data[this.state.i].favoriteMovies[0]}</div>
                    <div>2. {data[this.state.i].favoriteMovies[1]}</div>
                    <div>3. {data[this.state.i].favoriteMovies[2]}</div>
                    
                </div>
                <div className="button-row">
                    <button className="nextPrev" onClick={this.handlePrevious}>{'<Previous'}</button>
                    <div className="middle-buttons">
                    <button className="buttons">New</button>
                    <button className="buttons">Edit</button>
                    <button className="buttons">Delete</button>
                    </div>
                    <button className="nextPrev" onClick={this.handleNext}>{'Next>'}</button>
                </div>                
            </div>

        )
    }

}

export default MainContent