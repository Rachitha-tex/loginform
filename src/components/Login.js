import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import cookies from 'react-cookies'



 class Login extends Component {
    constructor(props) {
        super(props)
    
       this.onChangeName=this.onChangeName.bind(this);
       this.onChangePassword=this.onChangePassword.bind(this);
       this.onSubmit=this.onSubmit.bind(this);
       
        this.state = {
        name:'',
        password:''
        }
    }

    onChangeName(e){
        this.setState({
            name:e.target.value
        })
    }

    onChangePassword(e){
    this.setState({
        password:e.target.value
    })
    }

    onSubmit(e){
        e.preventDefault();
        const obj= {
            name:this.state.name,
            password:this.state.password
       }
       axios.post("http://localhost/loginform/insert.php",obj)
       .then(res=>{
           let msg=res.data.message;
            alert(msg);

            if(msg==='success'){
                cookies.save("name",this.state.name,{path:'/'});
                cookies.save('password',this.state.password,{path:'/'});

                window.location='/home';
            }
       })
       .catch(err=>console.log(err))
       console.log(obj);
    }
    render() {
        return (
            <div style={{marginTop:20}} className="w-50 m-auto">
            <h3 className="text-center mt-4">Login Form</h3> 

            <form onSubmit={this.onSubmit} >
                <div className="form-group">
                <label>First Name:</label>
                <input type="text" className="form-control" onChange={this.onChangeName} required/>
                </div>

                <div className="form-group mt-3">
                <label>Password:</label>
                <input type="password" className="form-control" onChange={this.onChangePassword} required/>
                </div>

                <div className="form-group mt-3">
                <input type="submit" className="btn btn-success mt-3 w-100" value="Register Now"/>
                </div>
            </form>
        </div>
        )
    }
}

export default Login