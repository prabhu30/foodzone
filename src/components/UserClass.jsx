import React from "react";
import Shimmer from "./Shimmer";

class UserClass extends React.Component {

    constructor(props) {
        console.log("Constructor Called");

        super(props);
        this.state = {
            UserInfo: {}
        }
    }

    async componentDidMount() {
        console.log("Component did mount is called");
        const apiResponse = await fetch("https://api.github.com/users/prabhu30");
        const UserInfo = await apiResponse.json();

        this.setState({ UserInfo });
    }

    componentDidUpdate() {
        console.log("Component did update is called");
    }

    render() {
        console.log("Render is called");
        const { name, login, location } = this.state.UserInfo;

        return (
            <div className="about-user">
                <p><b>Name: </b><span> {name}</span></p>
                <p><b>Location :</b> {location}</p>
                <p><b>GitHub Handle :</b> @{login}</p>
            </div>
        );
    }
}

export default UserClass;