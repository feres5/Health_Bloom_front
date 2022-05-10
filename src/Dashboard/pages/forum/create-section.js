import {React, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";

import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 

import { FilledInput, Box ,Grid, IconButton} from "@mui/material";
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';

import jwt_decode from "jwt-decode";



// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  Container,
  Form
} from "reactstrap";


import { Link } from "react-router-dom";
import ForumSection from './../../components/Forum/ForumSection'
import { Redirect } from "react-router-dom";


const axios = require('axios');


function CreateSection() {

    const history = useNavigate();

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [userData, setUserData] = useState({})

    const onTitleChange = (e) => setTitle(e.target.value);
    const onDescriptionChange = (e) => setDescription(e.target.value);

    useEffect(() => {
      fetchUser();
    }, [])
    
    const handleSubmit = () => {
       
        axios.post(process.env.REACT_APP_BackEnd_url + "/forum/add-section", {title, description}).then((res) => {
            console.log(res.data)
            history("/dashboard/forum/");
        }).catch((error) => {
            console.log(error)
        });
    };

    var usertoken = localStorage.getItem("user_info");
    var decodedTOKEN;
    if(usertoken)
    decodedTOKEN = jwt_decode(usertoken,{payload : true});

    const fetchUser = async () => 
    {
      if(usertoken)
      {
        const urluser = process.env.REACT_APP_BackEnd_url + "/users/getById/" + decodedTOKEN.user_id
    
        const reponse = await fetch(urluser)
        const newuser = await reponse.json()

        setUserData(newuser)
        //alert(JSON.stringify(userData.user.Role))
      }
    }

    useEffect(() => {
      fetchUser()
    }, [])
    
    if(!usertoken)
    {
      return(<>
        <p>Not logged in !!</p>
      </>)
    }
    else
    {
      if(userData.user)
      if(userData.user.Role !== "Doctor")
      return(<>
        <p>Forum can only be accessed by a doctor.</p>
      </>)
    }
  
    return (
      <>
        

        <div className="wrapper">
            <div className="container forum-create-thread">
            <Link to={`/dashboard/forum/`}> <IconButton onClick={() => {}} > <ArrowBackIosNew /></IconButton>
                    </Link>
                <Box>                    
                  <Grid>
                    <Grid item>
                      <FilledInput className="create-thread-title-input" required label='title' placeholder="title"  onChange={onTitleChange} value={title}/>
                    </Grid>
                    
                    <Grid item>
                      <FilledInput  className="create-thread-body-input"  required label='description' placeholder="section description"  onChange={onDescriptionChange} value={description} minRows={6} multiline />
                    </Grid>

                    <Button variant="contained"  onClick={() => {handleSubmit()} } >Create Section</Button>
                    </Grid>
                </Box>

            </div>

        </div>
      </>
    );
  }

  export default CreateSection;