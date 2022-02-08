import { Button, Grid, TextField, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RequestService from "../../Service/RequestService";
import CardView from "../../Shared-Component/CardView";
import Header from "../../Shared-Component/header/Header";
import './home.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function HomeForm() {

    const request = new RequestService;
    const navigate = useNavigate();
    const [loggedIn,setLoggedIn] = useState(request.loginedIn());

    useEffect(() => {
        if(!loggedIn){
            navigate("/login")
        }
    });

    const viewData = ()=>{
        axios.post('http://127.0.0.1:8000/api/login', {
            email: email,
            password: password
        })
          .then((response)=> {
            toastr.success('Login successfully');

            console.log(response);
        })
          .catch((error)=> {
            toastr.error(error.response.data.message);
        });
        console.log("Data Loaded!");
    }

    return (
        <div className="main-section-home">
            <Header />
                <Grid container spacing={2} style={{marginTop:10,width: "80%",margin: "auto"}}>
                    <Grid item xs={12} sm={4} md={4}>
                        <CardView />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <CardView />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <CardView />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <CardView />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <CardView />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <CardView />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <CardView />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <CardView />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <CardView />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <CardView />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <CardView />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <CardView />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <CardView />
                    </Grid>
                </Grid>
        </div>
  );
}
