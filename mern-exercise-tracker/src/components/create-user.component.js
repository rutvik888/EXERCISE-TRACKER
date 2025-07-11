import React, { Component, use } from "react";
import axios from 'axios';

export default class CreateUsers extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      
    };

    console.log(user);
    axios.post('http://localhost:5000/users/add',  user )
  .then(res => console.log(res.data))
  .catch(err => console.error(err));

    this.setState({
        username:''
    })
    
  }

  

  render() {
    return (
        <div>
            <h3>
                Create New User
            </h3>
            <form onSubmit={this.onSubmit}>
                <div className="from-group">
                    <label>
                        Username:
                    </label>
                    <input type="text" required
                    className="from-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername} />

                </div>
                <div className="from-control">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
  }
}
