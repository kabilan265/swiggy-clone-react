import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userDetails: {
                name: "dummy",
                id: "dummy"
            }
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/kabilan265");
        const json = await data.json();
        this.setState({userDetails: json})
        console.log(json)
    }
    componentDidUpdate(){
        console.log("component updated")
    }
    componentWillUnmount(){
        console.log("component unmounted")
    }
    render() {
        const { login , id } = this.state.userDetails;
        return (
            <div>
                <h1>Name: {login}</h1>
                <h2>Location: {id}</h2>
                {/* <h4>count: {count}</h4>
                <h4>count1: {count1}</h4> */}
                {/* <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count1: this.state.count1 + 1
                    })
                }}>count increase</button> */}
            </div>
        )
    }
}
export default UserClass;