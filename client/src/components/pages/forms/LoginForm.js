import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputField from './InputFieldGroup';
import PropTypes from 'prop-types';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
        email: '',
        password: '',
        loading: false,
        errors: {},
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    
    onChange(event)  {
    this.setState({ [event.target.name]: event.target.value });
}

onSubmit(event){
    this.setState({errors: {}, isLoading:true});
    event.preventDefault();
    this.props.userLoginRequest(this.state).then(
        () => {
        this.context.router.history.push('/profile');
    },
(errors) => {
    console.log(errors);
// Materialize.toast(errors.response.data.message, 4000, 'red accent-3 rounded');
// this.setState({errors: error.response.data, isLoading: false});
}
);
   
}

    render() {
        const { email, password, isLoading } = this.state;
        return(
            <div className="container login">
           
                 <div className="row">
                           
                                     <div className="col s11 offset-s1 card">
                                        
                                             <div className="col s5 login-left-box">
                                                     <p className="login-header"></p>
                                             </div>
                                             <form onSubmit={this.onSubmit}>
                                             <div className="col s7" id="login-card">
                                                            <InputField 
                                                                    onChange={this.onChange}
                                                                    icon = 'email'
                                                                    type= 'email'
                                                                    name='email'
                                                                    value={email}
                                                                    label='Email'
                                                                />
                                                       
                                                               <br />
                                                               <InputField 
                                                                    onChange={this.onChange}
                                                                    icon = 'lock'
                                                                    type= 'password'
                                                                    name='password'
                                                                    value={password}
                                                                    label='Password'
                                                                    />

                                                               <br />
                                                                   <div className="input-field">
                                                                         <button className="btn waves-effect waves-light btn_large" type="submit" name="action">login
                                                                                 <i className="material-icons left">send</i>
                                                                         </button>
                                                                   </div><br />
                                                                   <span>Click here to <Link to='/signUp'>register</Link></span>
                                                                   <br />
                                                                  
                                                
                                             </div>
                                             </form>
                                     </div>
                                   
                               
                     </div>
               </div>
        );
    }
}

LoginForm.propTypes = {
    userLoginRequest: PropTypes.func.isRequired,
}
LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default LoginForm;