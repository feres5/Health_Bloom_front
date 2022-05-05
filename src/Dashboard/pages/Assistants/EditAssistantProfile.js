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

function Profile(props) {
  const [imageURL, setImageURL] = useState(false);
  const [, setLoading] = useState(false);
  const [FirstName,setFirstName]= useState()
  const [LastName,setLastName]= useState()
  const [Email,setEmail]= useState()
  const [Phone,setPhone]= useState()

  console.log(FirstName)


  const[Assistant,setAssistant]= useState([])

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

    // fetch('http://127.0.0.1:3002/users/updateUser/'+user._id, {
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

  const [user, setuser] = useState([])
  const url = "http://127.0.0.1:3002/articles/Author/"

  var usertoken = localStorage.getItem("user_info");
  var decodedTOKEN = jwt_decode(usertoken,{payload : true});



  const fetchuser = async () => {
    const urluser = url + decodedTOKEN.user_id

    const reponse = await fetch(urluser)
    const newuser = await reponse.json()
    setuser(newuser)
    console.log("==========>"+newuser._assistant)
    localStorage.setItem('idAssistant', newuser._assistant);


    return newuser;
  }
  useEffect(() => {
    fetchuser();
    fetchAssistant();
  }, [])


  //const[Assistant,setAssistant]= useState([])

  const fetchAssistant = async () => {
    const urlA = "http://127.0.0.1:3002/users/getassistants/"
    const idA= localStorage.getItem("idAssistant")

    const urlAssistant = urlA +idA
    console.log("=======>"+urlAssistant)
    const reponse = await fetch(urlAssistant)
    const newAssistant = await reponse.json();
    console.log(newAssistant)
    setAssistant(newAssistant)
    return newAssistant;
  }

  console.log("hello assistant"+Assistant.Speciality);

  if(user=== null || Assistant=== null){
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
                  placeholder={user.FirstName}
                  type="text"
                  name="FirstName"
                  onChange={e => setFirstName(e.target.value)}
                  defaultValue={user.FirstName}
              ></Input>
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons text_caps-small"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                  placeholder={user.LastName}
                  type="text"
                  onChange={e => setLastName(e.target.value)}
                  name="LastName"
                  defaultValue={user.LastName}
              ></Input>
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons ui-1_email-85"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                  placeholder={user.Email}
                  type="email"
                  onChange={e => setEmail(e.target.value)}
                  name="Email"
                  defaultValue={user.Email}
              ></Input>
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons location_pin"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                  placeholder={user.Address}
                  type="text"
                  name="Address"
                  defaultValue={user.Address}
              ></Input>
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons tech_mobile"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                  placeholder={user.Phone}
                  type="number"
                  onChange={e => setPhone(e.target.value)}
                  name="Phone"
                  defaultValue={user.Phone}
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
