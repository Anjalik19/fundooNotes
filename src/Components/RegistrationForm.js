import React,{Component} from 'react';
import './Common.css';
export default class RegistrationForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            fname:"",
            lname:"",
            email:"",
            password:"",
            confirmPassword:"",

        };
    }
    handleFirstNameChange=(e)=>{
        const fname= e.target.value;
        let fnameError=""
        if(!(/^[A-Za-z]+$/.test(fname) && fname.length>0))
        {
            fnameError="*Enter a valid first name"
        }
        this.setState({
            fname:fname,
            fnameError,
        })
    }
    handleLastNameChange=(e)=>{
        const lname= e.target.value;
        let lnameError="";
        if(!(/^[A-Za-z]+$/.test(lname) && lname.length>0))
        {
            lnameError="*Enter a valid last name"
        }
        this.setState({
            lname:lname,
            lnameError,
        })
    }
    handleEmailChange=(e)=>{
        const email= e.target.value;
        let emailError = "";
        if(!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) && email.length>0))
        {
            emailError="*Enter a valid email"
        }
        this.setState({
            email:email,
            emailError,
        })
    }
    handlePasswordChange=(e)=>{
        
        const password= e.target.value;
        let passwordError=""
        if (!( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password) && password.length>0)) {
            passwordError = "*Invalid password";
            }
        this.setState({
            password:password,
            passwordError,
        })
        console.log("Password",password)
    }
    handleConfirmPasswordChange=(e)=>{
        const confirmPassword= e.target.value;
        this.setState({
            confirmPassword:confirmPassword,
        })
        console.log("Confirm Password",confirmPassword)
    }

    validate=()=>{
        let fnameError:"";
        let lnameError:"";
        let emailError:"";
        let passwordError:"";
        let confirmPasswordError:""

        // if (!this.state.fname) {
        //     fnameError = "Alert first name must be filled out";
        // }
        // else if (!this.state.fname.match("^[a-zA-Z]+$")) {
        //     fnameError = "Contains letters only";
        // }

        if(!(/^[A-Za-z]+$/.test(this.state.fname)))
        {
            fnameError="*Enter a valid first name"
        }

        if(!(/^[A-Za-z]+$/.test(this.state.lname)))
        {
            lnameError="*Enter a valid last name"
        }

        if(!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)))
        {
            emailError="*Enter a valid email"
        }
        // if (!this.state.lname) {
        //     lnameError = "Alert last name must be filled out";
        // }
        // else if (!this.state.lname.match("^[a-zA-Z]+$")) {
        //     lnameError = "Contains letters only";
        // }

        //     if (!this.state.email) {
        //         emailError = "Alert Email id must be filled out";
        //     }

        //     else if (!this.state.email.includes("@")) {
        //         emailError = "Please Enter valid Email Id";
        //    }
       

       if (!( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(this.state.password))) {
        passwordError = "*Enter a valid password";
        }

        // else if (!(/[a-z]+/.test(this.state.password))) {
        //     passwordError = "one lower case";
        //     }
        //     else if (!(/[A-Z]+/.test(this.state.password))) {
        //         passwordError = "one upper case";
        //         }
   
        if (!this.state.confirmPassword) {
            confirmPasswordError = "*Confirm password must be filled out";
        }

        else if (this.state.password !== this.state.confirmPassword){
            confirmPasswordError = "*Password doesn't match";
        }
        
        if(fnameError || lnameError || emailError || passwordError || confirmPasswordError){
            this.setState({
                fnameError,
                lnameError,
                emailError,
                passwordError,
                confirmPasswordError,

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
                fname:"",
                lname:"",
                email:"",
                password:"",
                confirmPassword:"",
                fnameError:"",
                lnameError:"",
                emailError:"",
                passwordError:"",
                confirmPasswordError:"",
            })
        }
    }
    render(){
        return(
                <div id="login">
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form" action="" onSubmit={this.handleSubmit}>
                                        <h3 className="text-center text-black">Sign in</h3>
                                        <label className="text-black form-label">User your google Account</label>
                                            <div className="form-group">
                                                <div class="row">
                                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                                        <input type="text" name="username"  className="form-control input-sm  userinput" value={this.state.fname} placeholder="First Name" onChange={this.handleFirstNameChange}/>
                                                            <div className="error_message text-left mb-3">
                                                                {this.state.fnameError}
                                                            </div>
                                                    </div>
                                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                                        <input type="text" name="username"  className="form-control input-sm  userinput"  value={this.state.lname} placeholder="Last Name" onChange={this.handleLastNameChange}/>
                                                            <div className="error_message text-left mb-3">
                                                                {this.state.lnameError}
                                                            </div>
                                                    </div>
                                                </div>
                                                <input type="text" name="username"  className="form-control  userinput" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
                                                    <div className="error_message text-left mb-3">
                                                                {this.state.emailError}
                                                            </div>
                                                <div class="row">
                                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                                        <input type="password" name="username"  className="form-control input-sm  userinput" value={this.state.password} placeholder="Password" onChange={this.handlePasswordChange}/>
                                                            <div className="error_message text-left mb-3">
                                                                {this.state.passwordError}
                                                            </div>
                                                    </div>
                                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                                        <input type="password" name="username"  className="form-control input-sm  userinput" value={this.state.confirmPassword} placeholder=" Confirm Password "onChange={this.handleConfirmPasswordChange}/>
                                                            <div className="error_message text-left mb-3">
                                                                {this.state.confirmPasswordError}
                                                            </div>
                                                    </div>
                                                </div>
                                                
                                                <label className="text-primary d-flex mt-5">Sign in instead</label>
                                            </div>
                                            <div className="text-right">
                                                <button type="submit" className="btn btn-primary next-button">Sumbit</button>
                                            </div>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
        )
    }
}