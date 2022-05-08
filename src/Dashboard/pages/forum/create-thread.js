import {React, useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";

import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 

import { FilledInput, Box ,Grid, IconButton} from "@mui/material";
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';


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
import jwt_decode from "jwt-decode";


const axios = require('axios');


function CreateThread() {


    const {sectionId} = useParams()

    const history = useHistory();

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [userData, setUserData] = useState({})


    const onTitleChange = (e) => setTitle(e.target.value);
    const onBodyChange = (e) => setBody(e.target.value);
    
    const handleSubmit = () => {
       
      if(title === "" || body ==="" ) return;
      
        let userId = userData.user._id;
        axios.post("http://localhost:3002/forum/create-thread", {title, body,sectionId,userId }).then((res) => {
            console.log(res.data)
            history.push("/dashboard/forum/section/" + sectionId);
        }).catch((error) => {
            console.log(error)
        });
    };
    
    useEffect(() => {
      fetchUser();
    }, [])

    var usertoken = localStorage.getItem("user_info");
    var decodedTOKEN;
    if(usertoken)
    decodedTOKEN = jwt_decode(usertoken,{payload : true});

    const fetchUser = async () => 
    {
      if(usertoken)
      {
        const urluser = "http://localhost:3002/users/getById/" + decodedTOKEN.user_id
    
        const reponse = await fetch(urluser)
        const newuser = await reponse.json()

        setUserData(newuser)
        //alert(JSON.stringify(userData.user.Role))
      }
    }

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
            <Link to={`/dashboard/forum/section/${sectionId}`}> <IconButton onClick={() => {}} > <ArrowBackIosNew /></IconButton>
                    </Link>
                <Box>                    
                  <Grid>
                    <Grid item>
                      <FilledInput className="create-thread-title-input" required label='title' placeholder="title"  onChange={onTitleChange} value={title}/>
                    </Grid>
                    
                    <Grid item>
                      <FilledInput  className="create-thread-body-input"  required label='body' placeholder="body content"  onChange={onBodyChange} value={body} minRows={6} multiline />
                    </Grid>

                    <Button variant="contained"  onClick={() => {handleSubmit()} } >Create Thread</Button>
                    </Grid>
                </Box>

            </div>

        </div>
      </>
    );
  }

  export default CreateThread;