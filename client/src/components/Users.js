import { Component } from "react";

class Users extends Component {
  constructor(props) {
    //DON'T FORGET TO PASS PROPS TO THE SUPER CONSTRUCTOR
    super(props);
    this.state = {
      //set users as an empty array that we'll map to later
      usersArray: [],
    };
  }

  //Lifecycle method that runs when the component is mounted
  componentDidMount() {
    //Fetch is a nodejs module that makes it very easy to make
    //http requests to our proxy express server (listed in package.json under "proxy")
    fetch("/users")
      //It's a promise chain that you can use to take the response
      //and make it JSON
      .then((response) => response.json())
      //then use the JSON response, in this case setting the
      //users (line 12) state to the users in our data response
      .then((responseNowJson) => {
        this.setState({ usersArray: responseNowJson });
      });
  }



  render() {
    //Decided to make this a unordered list with list items, then
    //we use the map method to map from our array of JSON data.
    return (
      <ul>
        {this.state.usersArray.map((user) => {
          return (
            <>
              <li>Name: {user.name}</li>
              <li>Age: {user.age}</li>
              <br />
            </>
          );
        })}
      </ul>
    );
  }
}

export default Users;
