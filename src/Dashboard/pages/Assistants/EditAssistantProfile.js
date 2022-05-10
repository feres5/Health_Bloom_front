import React, {useEffect, useState} from "react";

import {
  Row,
  Col,
  Card,
  Button,
  List,
  Descriptions,
  Avatar,
  Radio,
  Switch,
  Upload,
  message,
} from "antd";


import BgProfile from "../../assets/images/bg-profile.jpg";
import profilavatar from "../../assets/images/face-1.jpg";
import {CardFooter, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import jwt_decode from "jwt-decode";
import axios from "axios";

function Profile() {
  const [imageURL, setImageURL] = useState(false);
  const [, setLoading] = useState(false);
  // const [FirstName,setFirstName]= useState()
  // const [LastName,setLastName]= useState()
  // const [Email,setEmail]= useState()
  // const [Phone,setPhone]= useState();
  const [data,setData] = useState(null);
  const [user, setUser] = useState(null)
  const[Assistant,setAssistant]= useState(null)


  //console.log(FirstName)

  const EditAssistant = async () => {
    console.log(user);
    console.log(Assistant);

    // if (((FirstName===user.FirstName)||(FirstName===null))
    //     && ((LastName===user.LastName)||(LastName===null)) &&
    //     ((Phone===user.Phone)||(Phone===null) )&&
    // ((Email===user.Email)||(Email===null) ))
    // {
    //   alert({ message: 'You did not make any changes!', type: 'warning' })
    //
    // }
    //
    // if (FirstName) {
    //   var newFirstName = FirstName
    // }
    // else {
    //   newFirstName = user.FirstName
    // };
    //
    // if (LastName) {
    //   var newLastName = LastName
    // }
    // else {
    //   var newLastName = user.LastName
    // };
    // if (Email) {
    //   var newEmail = Email
    // }
    // else {
    //   var newEmail = user.Email
    // }
    // if (Phone) {
    //   var newPhone = Phone
    // }
    // else {
    //   var newPhone = user.Phone
    // };

    // fetch(process.env.REACT_APP_BackEnd_url+'/users/updateUser/'+user._id, {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     FirstName: newFirstName, LastName:newLastName,
    //     Email: newEmail, Phone:newPhone
    //   })
    // }).then(
    //     (result) => {
    //       result.json().then((resp) => {
    //         console.warn(resp)
    //         console.log(resp.success)
    //         const message = resp.message;
    //         alert({ message: 'Updated Successfully!', type: 'success' })
    //
    //       })
    //     }
    //
    // )

  }


  const url = process.env.REACT_APP_BackEnd_url+"/articles/Author/"

  var usertoken = localStorage.getItem("user_info");
  var decodedTOKEN = jwt_decode(usertoken,{payload : true});



  const fetchuser = async () => {
    const urluser = url + decodedTOKEN.user_id

    const reponse = await fetch(urluser)
    const newuser = await reponse.json()
    setUser(newuser)
    console.log("==========>"+newuser._assistant)
    localStorage.setItem('idAssistant', newuser._assistant);


    return newuser;
  }
  //new get user function
  const fetchData = async ()=>{
    await axios.get(process.env.REACT_APP_BackEnd_url+'/users/getById/'+decodedTOKEN.user_id)
        .then(result=>{
          console.log(result.data);
          setData(result.data);
          setUser(result.data.user)
          setAssistant(result.data.assistant);
          console.log(data);
          //console.log("hello assistant"+Assistant.Speciality);
        })
        .catch(err=>{
          console.log(err);
        })
  }

  //form to be edited and submitted
  const [formData, setFormData] = useState({
    id : user._id,
    Picture : user.Picture,
    FirstName: user.FirstName,
    LastName: user.LastName,
    Sex: user.Sex,
    BirthDate: user.BirthDate,
    Email: user.Email,
    Address: user.Address,
    Phone: user.Phone,
    Speciality : Assistant.Speciality,
    Description : Assistant.Description,
    ActsAndCare : Assistant.ActsAndCare
  });
  const {id,Picture,FirstName,LastName,Sex,BirthDate,Email,Address,Phone,Speciality,Description,ActsAndCare} = formData;
  const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
  useEffect(async () => {
    await fetchData();
    console.log(formData);
    //fetchuser();
    //fetchAssistant();
  }, [])


  //const[Assistant,setAssistant]= useState([])

  const fetchAssistant = async () => {
    const urlA = process.env.REACT_APP_BackEnd_url+"/users/getassistants/"
    const idA= localStorage.getItem("idAssistant")

    const urlAssistant = urlA +idA
    console.log("=======>"+urlAssistant)
    const reponse = await fetch(urlAssistant)
    const newAssistant = await reponse.json();
    console.log(newAssistant)
    setAssistant(newAssistant)
    return newAssistant;
  }

  //console.log("hello assistant"+Assistant.Speciality);

  if(data ===null || user=== null || Assistant==null){
    return (
        <p>loading data...</p>
    );
  }
  return (
    <>
      <div
        className="profile-nav-bg"
        style={{ backgroundImage: "url(" + BgProfile + ")" }}
      ></div>

      <Card
        className="card-profile-head"
        bodyStyle={{ display: "none" }}
        title={
          <Row justify="space-between" align="middle" gutter={[24, 0]}>
            <Col span={24} md={12} className="col-info">
              <Avatar.Group>
                <Avatar size={74} shape="square" src={profilavatar} />

                <div className="avatar-info">
                  <h4 className="font-semibold m-0">{user.FirstName}{user.LastName}</h4>
                  <p>{Assistant.Speciality}</p>
                </div>
              </Avatar.Group>
            </Col>
            <Col
              span={24}
              md={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Radio.Group defaultValue="a">
                <Radio.Button value="a">OVERVIEW</Radio.Button>
                <Radio.Button value="b">TEAMS</Radio.Button>
                <Radio.Button value="c">PROJECTS</Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
        }
      ></Card>

      <Row gutter={[24, 0]}>
        <Col span={24} md={8} className="mb-24">

        </Col>
        <Col span={24} md={8} className="mb-24 ">

          <form>

            <div className="form-group">
              <input placeholder="Nom" type="text" className="form-control" value=""/>
            </div>


            <label>
              Nom :
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Envoyer" />

            <InputGroup
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons business_badge"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input type="select"
                     value={Assistant.Role}
                     name="Role"
              >
                <option value="Patient" style={{color : "black"}} >Patient</option>
                <option value="Doctor" style={{color : "black"}}>Doctor</option>
                <option value="Assistant" style={{color : "black"}}>Assistant</option>

              </Input>
            </InputGroup>

            <InputGroup
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons users_circle-08"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                  placeholder={FirstName}
                  type="text"
                  name="FirstName"
                  onChange={(e) => onChange(e)}
              ></Input>
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons text_caps-small"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                  placeholder={LastName}
                  type="text"
                  onChange={(e) => onChange(e)}
                  name="LastName"
              ></Input>
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons ui-1_email-85"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                  placeholder={Email}
                  type="email"
                  onChange={(e) => onChange(e)}
                  name="Email"
              ></Input>
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons location_pin"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                  placeholder={Address}
                  type="text"
                  name="Address"
              ></Input>
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons tech_mobile"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                  placeholder={Phone}
                  type="number"
                  onChange={(e) => onChange(e)}
                  name="Phone"
              ></Input>
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
              </InputGroupAddon>
              <Input
                  placeholder="speciality..."
                  type="text"
                  name="speciality"
                  defaultValue={Assistant.Speciality}
              ></Input>
            </InputGroup>
            <InputGroup>

              <Input
                  placeholder="description..."
                  type="description"
                  name="description"
                  defaultValue={Assistant.Description}
              ></Input>
            </InputGroup>

            <CardFooter className="text-center">
              <Button
                  className="btn-neutral btn-round"
                  color="info"
                  type="submit"
                  onClick={() => { EditAssistant()}}
                  size="lg"
              >
                Update
              </Button>
            </CardFooter>
          </form>

        </Col>

      </Row>

    </>
  );
}

export default Profile;
