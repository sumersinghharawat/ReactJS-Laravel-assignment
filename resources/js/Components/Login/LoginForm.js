import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './login.css';
import toastr from "toastr";
import validator from 'validator';
import RequestService from "../../Service/RequestService";
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
    var request = new RequestService;
    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [loggedIn,setLoggedIn] = useState(request.loginedIn());

    useEffect(() => {
        if(loggedIn){
            navigate("/")
        }
    });

    const Validations = () => {
        if(validator.isEmpty(email)){
            return [true,'Email empty'];
        }

        if(validator.isEmpty(password)){
            return [true,'Password empty'];
        }

        if(!validator.isEmail(email)){
            return [true,'Invalid email'];
        }
        return false;
    }

    const submitForm = ()=>{
        if(Validations()[0]){
            toastr.error(Validations()[1]);
            return
        }

        request.post('login',{
            email: email,
            password: password
        })
          .then((response)=> {
            toastr.success('Login successfully');

            console.log(response);

            let token = response.data.data.token;

            localStorage.setItem('token',token);

            navigate("/");

        })
          .catch((error)=> {
            toastr.error(error.response.data.message);
        });

        console.log("Submit Form");
    }

    return (
        <Box className="main-section">
        <form>
            <Grid className="login-form" container spacing={2}>
                <Grid item xs={12}>
                <h1>Login Form</h1>
                </Grid>
                <Grid item xs={12} style={{ paddingLeft:0}}>
                <TextField label="Username" type="text" value={email} onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
                </Grid>

                <Grid item xs={12} style={{ paddingLeft:0}}>
                <TextField label="Password" type="password" value={password} onChange={(e)=>{
                    setPassword(e.target.value);
                }}/>
                </Grid>
                <Grid item xs={12} style={{ paddingLeft:0}}>
                <Button variant="contained" color="primary" onClick={submitForm}>
                    Submit
                </Button>
                </Grid>
                <Grid item xs={12} style={{ paddingLeft:0}}>
                    <Link to="/register">Register Now</Link>
                </Grid>
            </Grid>
        </form>
      </Box>
  );
}
