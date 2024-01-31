import React, { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext"

/* export default About = ()=>{
    return (
        <UserClass name="kabilan" Location="chennai" contact="889298983" />
    )
} */

export default class UserClass extends React.Component {
    constructor(props) {
        super(props)
        console.log("parent constructor")
    }
    componentDidMount() {
        console.log("parent mounted")
    }
    render() {
        console.log("parent render")
        return (
            <div>
                LoggedInUser:
                <UserContext.Consumer>{({ loggedInUser }) => {
                    return (<span>{loggedInUser}</span>)
                }}</UserContext.Consumer>
                <UserClass />
            </div>
        )
    }
}