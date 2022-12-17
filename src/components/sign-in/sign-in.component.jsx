import React from "react";
 
import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component";

class SignIn extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: '',
      password: ''
    });

  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
       <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password" 
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <input 
            type="submit"
            className="submit"
            value="Sign in"
          />
        </form>
       </div>
    );
  }
}

export default SignIn;