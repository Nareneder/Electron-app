import React , { Component } from "react";
import {auth} from "./Fire";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component{
constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : ""
    }
}
login(e){
    e.preventDefault();
    auth.signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        Swal.fire('Login Successfully',u)
    }).catch((err)=>{
        Swal.fire('! Oops Please Check Your Details',err);
    })
}
signup(e){
    e.preventDefault();
    auth.createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}
render()
{
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <form className="text-center mt-5 w-50 m-auto">
                            <input className="form-control p-2" type="email" id="email" name="email" placeholder="enter email address" onChange={this.handleChange} value={this.state.email} /><br/>
                            <input className="form-control p-2" name="password" type= "password" onChange={this.handleChange} id="password" placeholder="enter password" value={this.state.password} /><br/>
                            <button onClick={this.login} className="btn btn-primary">Login</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
}
export default Login;