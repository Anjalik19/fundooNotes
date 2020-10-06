import React,{Component} from 'react';
import './Common.css';
export default class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {
            email:"",
            password:"",

        };
    }

    handleEmailChange=(e)=>{
        const email= e.target.value;
        let emailError = "";
        if(!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)&& email.length>0))
        {
            emailError="*Enter a valid email"
        }
        this.setState({
            email:email,
            emailError,
        })
    }
    handlePasswordChange=(e)=>{
        const password=e.target.value;
        let passwordError=""
        if (!( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)&& password.length>0)) {
            passwordError = " *password should not be blank and must contain capital A and number and special character";
            }
        this.setState({
            password:password,
            passwordError,
        })
    }
    validate=()=>{
        let emailError:"";
        let passwordError:"";

        if(!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)))
        {
            emailError="*Enter a valid email"
        }

        if(!this.state.password){
            passwordError="*password must contain capital A and number and special character";
        }
        if(emailError || passwordError){
            this.setState({
                emailError,
                passwordError,
            })
            return false;
        }
        return true;
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState({
                email:"",
                password:"",
                emailError:"",
                passwordError:""
            })
        }
    }
    render(){
        return(
                <div id="login">
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                                <div id="login-box" className="">
                                    <form id="login-form" className="form" action="" onSubmit={this.handleSubmit}>
                                        <h3 className="text-center text-black">Sign in</h3>
                                        <label className="text-black form-label">User your google Account</label>
                                            <div className="form-group">
                                                <input type="text" name="username" id="username" className="form-control" placeholder="Email or phone"
                                                value={this.state.email}
                                                onChange={this.handleEmailChange}/>
                                                <div className="error_message text-left">
                                                    {this.state.emailError}
                                                </div>
                                                <input type="password" name="username" id="username" className="form-control mt-2" placeholder="Password" 
                                                value={this.state.password}
                                                onChange={this.handlePasswordChange}/>
                                                <div className="error_message text-left">
                                                    {this.state.passwordError}
                                                </div>
                                                <label className="text-primary d-flex mt-5">Create Account</label>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary next-button">Submit</button>
                                            </div>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
        )
    }
}