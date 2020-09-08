import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameString: "",
            convertedString:""
        }
    }

    handleNameChange = (event) =>{
        this.setState({
            nameString : event.target.value
        })
    }
    handleSubmit= (event) =>{
        this.setState({
            convertedString : this.state.nameString.toUpperCase()
        })
       
        // alert (`Conversion Done`)
        event.preventDefault()
    }
    
    render() {
        let {convertedString, nameString} = this.state
        return (
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <label >Name</label>
                    <input placeholder = "Enter the string to convert it to capital" type='text' value = {nameString} onChange = {this.handleNameChange}></input></div>
                <div><button type = "Submit">Change to Uppercase</button></div> <br></br>
        <div >{convertedString}</div>
            </form>
        )
    }
}

export default Form
