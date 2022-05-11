import {React, useEffect, useState} from "react";

import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
import Carousel from 'react-material-ui-carousel'
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';

import { Box, Grid } from "@mui/material";

import jwt_decode from "jwt-decode";

import {
  Card,
  Col,
  Row,
  Typography,
  Tooltip,
  Progress,
  Upload,
  message,
  Button,
  Timeline,
  Radio,
} from "antd";

import { Link } from "react-router-dom";
import ForumSection from './../../components/Forum/ForumSection'
import axios from "axios";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,

  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const CarrousselImage = (props) => {
  
  return (<>
    
    <ImageButton
          focusRipple
          key={props.item.title}
          style={{
            width: '100%',
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${props.item.image.src})` }} />
          
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              className="news-carroussel-title"
              component="h3"
              variant="subtitle1"
              color="white"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              
              {props.item.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>

            <Typography
              className="news-carroussel-description"
              component="p"
              variant="subtitle1"
              color="white"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              
              {props.item.description}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
            <i>{props.item.date}</i>
          </Image>
        </ImageButton>
  </>);
}

function ForumWelcome() {

    const [sections, setSections] = useState([])
    const [newsItems, setNewsItems] = useState([])
    const [userData, setUserData] = useState({})

    const fetchNewsItems = async () => 
    {
      const options = {
        method: 'GET',
        url: 'https://heath-news.p.rapidapi.com/news',
        headers: {
          'X-RapidAPI-Host': 'heath-news.p.rapidapi.com',
          'X-RapidAPI-Key': 'ccecf3b476mshcd923b577849c7ep1bedcejsna4ef7c5558fc'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
        setNewsItems(response.data)
      }).catch(function (error) {
        console.error(error);
      });
    }

    const fetchSections = async () => {
      const url = process.env.REACT_APP_BackEnd_url +  "/forum/get-sections";
      //const urlId= url+idArticle
      const reponse = await fetch(url);
      const newSections = await reponse.json();
      setSections(newSections);
    }

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
      fetchSections()
      fetchNewsItems()
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
            
            <Carousel>
              {
                  newsItems.map( (item, i) =>  <CarrousselImage key={i} item={item} /> )
              }
            </Carousel>

            <Card className="forum-welcome">
            
            
              <Card className="criclebox h-full forum-links-container">
                <Link className="section-threads-create-thread" to={`/dashboard/forum/create-section`}>
                  <FontAwesomeIcon icon={solid('plus')} size="lg" />&nbsp; New Section
                </Link>

                <Link className="forum-link" to={"/dashboard"}>
                  <FontAwesomeIcon icon={solid('user')} size="lg" />Profile
                </Link>
                
                {/* <Link className="forum-link" to={"#"}>
                  <FontAwesomeIcon icon={solid('bell')} size="lg" />Notifications
                </Link> */}
                
              </Card>

              <ForumSection topics={sections}></ForumSection>
            </Card>
        </div>
      </>
    );
  }

  export default ForumWelcome;
