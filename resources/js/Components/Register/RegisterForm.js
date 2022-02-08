import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import toastr from "toastr";
import validator from 'validator';
import { useState } from "react";
import { Link } from "react-router-dom";
import RequestService from "../../Service/RequestService";
import './register.css';

export default function LoginForm() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [conpassword,setConPassword] = useState("");
    var request = new RequestService;

    const Validations = () => {
        if(validator.isEmpty(name)){
            return [true,'Full name empty'];
        }

        if(validator.isEmpty(email)){
            return [true,'Email empty'];
        }

        if(!validator.isEmail(email)){
            return [true,'Invalid email'];
        }

        if(validator.isEmpty(password)){
            return [true,'Password empty'];
        }

        if(validator.isEmpty(conpassword)){
            return [true,'Confirm Password empty'];
        }

        if(!validator.equals(conpassword,password)){
            return [true,'Password and Confirm Password not match'];
        }


        return false;
    }


    const submitForm = ()=>{

        if(Validations()[0]){
            toastr.error(Validations()[1]);
            return
        }

        request.post('register', {
            name: name,
            email: email,
            password: password,
            password_confirmation: conpassword
        })
          .then(function (response) {
            console.log(response);
        })
          .catch(function (error) {
            console.log(error);
            if(error.response.data.errors.password){
                toastr.error(error.response.data.errors.password[0]);
            }

            if(error.response.data.errors.email){
                toastr.error(error.response.data.errors.email);
            }
        });

        console.log("Submit Form");
    }

    return (
      <Box className="main-section">
        <form>
            <Grid className="login-form" container spacing={2}>
                <Grid item xs={12}>
                <h1>Register Form</h1>
                </Grid>
                <Grid item xs={12} style={{ paddingLeft:0}}>
                <TextField label="Full Name" type="text" value={name} onChange={(e)=>{
                    setName(e.target.value);
                }}/>
                </Grid>
                <Grid item xs={12} style={{ paddingLeft:0}}>
                <TextField label="Email" type="text" value={email} onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
                </Grid>
                <Grid item xs={12} style={{ paddingLeft:0}}>
                <TextField label="Password" type="password" value={password} onChange={(e)=>{
                    setPassword(e.target.value);
                }}/>
                </Grid>
                <Grid item xs={12} style={{ paddingLeft:0}}>
                <TextField label="Confirm Password" type="password" value={conpassword} onChange={(e)=>{
                    setConPassword(e.target.value);
                }}/>
                </Grid>
                <Grid item xs={12} style={{ paddingLeft:0}}>
                <Button variant="contained" color="primary" onClick={submitForm}>
                    Submit
                </Button>
                </Grid>
                <Grid item xs={12} style={{ paddingLeft:0}}>
                    <Link to="/login">Login Now</Link>
                </Grid>
            </Grid>
        </form>
      </Box>
  );
}
