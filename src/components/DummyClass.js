import React from "react";

export default class Dummy extends React.Component{
    constructor(){
        super();
        console.log("nested child cons")
    }
    render(){
        console.log("nested child render")
        return (
            <h6>Dummy</h6>
        )
    }
    componentDidMount(){
        console.log("nested child mounted")
    }
}