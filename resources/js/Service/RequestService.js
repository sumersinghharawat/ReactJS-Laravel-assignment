import axios from "axios";

export default class RequestService{

    get(url){
        return axios.get('http://127.0.0.1:8000/api/'+url);
    }


    post(url,data){
        return axios.post('http://127.0.0.1:8000/api/'+url,data);
    }

    loginedIn(){
        return localStorage.getItem('token')?true:false;
    }
}

