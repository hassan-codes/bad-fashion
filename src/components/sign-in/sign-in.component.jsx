import React from "react";
 
import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { 
  signInWithGoogle, 
  auth, 
  signInWithEmailAndPassword 
} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      this.setState({
        email: '',
        password: ''
      });
    } catch (error) {
      alert(`Sign in failed with error: ${error.message}`);
    }
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
            minLength="8"
            required
          />
          <div className="buttons">
            <CustomButton 
              type="submit"
            >
              SIGN IN
            </CustomButton>

            <CustomButton 
              onClick={ signInWithGoogle }
              isGoogleSignIn
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
          
        </form>
       </div>
    );
  }
}

export default SignIn;