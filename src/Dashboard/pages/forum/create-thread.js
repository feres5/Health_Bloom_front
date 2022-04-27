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


const axios = require('axios');


function CreateThread() {


    const {sectionId} = useParams()

    const history = useHistory();

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const onTitleChange = (e) => setTitle(e.target.value);
    const onBodyChange = (e) => setBody(e.target.value);
    
    const handleSubmit = () => {
       
        
        axios.post("http://localhost:3002/forum/create-thread", {title, body,sectionId }).then((res) => {
            console.log(res.data)
            history.push("/dashboard/forum/section/" + sectionId);
        }).catch((error) => {
            console.log(error)
        });
    };


  
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