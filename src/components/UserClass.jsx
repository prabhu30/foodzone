import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Constructor Called");

    super(props);
    this.state = {
      UserInfo: {},
    };
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
    const { name, login, location, avatar_url } = this.state.UserInfo;

    return (
      <div className="about-user mt-12 flex flex-col items-center gap-4">
        <h1 className="text-2xl mb-6 font-bold text-amber-600">
          Meet our Team 👨🏻‍💻
        </h1>
        <img
          src={avatar_url}
          alt="Image of Founder"
          className="h-56 rounded-3xl"
        />
        <p>
          <b>Name : </b>
          <span> {name}</span>
        </p>
        <p>
          <b>Location :</b> {location}
        </p>
        <p>
          <b>GitHub Handle :</b> @{login}
        </p>

        <UserContext.Consumer>
          {({ username }) => (
            <div>
              <span className="font-bold text-blue-800">Username : </span>{" "}
              <span>{username}</span>
            </div>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
