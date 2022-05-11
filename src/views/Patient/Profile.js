import React, {useEffect, useState} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
// reactstrap components
import {Button,Container,Row,UncontrolledTooltip, CardHeader, Card, Input,FormGroup} from "reactstrap";
import {Descriptions} from "antd";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import GeneralInfo from "./generalInfo";

// imports for popup
import 'reactjs-popup/dist/index.css';
import {Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
//pdf
import PdfMFile from "./PdfMFile";
import MedicalFileView from "./medicalFileView";
//cloudinary
import {Image} from "cloudinary-react";


function Profile()  {
    const token = localStorage.getItem("user_info");
    var decodedTOKEN = jwt_decode(token,{payload : true});
    let pageHeader = React.createRef();
    const [data,setData]= useState(null);
    const url = process.env.REACT_APP_BackEnd_url+"/users/"
    React.useEffect( () => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("profile-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });


    //for medical file popup
    const [Surgical,setSurgical] =useState({
        title: null,
        motif: null,
        outcomes: null,
        date: null
    })
    const onChangeSurgical = (e) =>{
        setSurgical({...Surgical,[e.target.name]: e.target.value})
    }
    const setSurgicalDate = (e) =>{
        Surgical.date =e;
    }

    const [Obstetric,setObstetric] = useState({
        outcomes : null,
        pregnancyDate : null,
        childBirthDate : null,
        babyGender : "unknown"
    })
    const onChangeObstetric = (e) =>{
        setObstetric({...Obstetric,[e.target.name]: e.target.value})
    }
    const setChildBirthDate = (e) =>{
        Obstetric.childBirthDate =e;
    }
    const setPregnancyDate = (e) =>{
        Obstetric.pregnancyDate =e;
    }
    const [Medications,setMedications] = useState({
        name: null,
        dose: null,
        from : null,
        until : null
    })
    const onChangeMedications = (e) =>{
        setMedications({...Medications,[e.target.name]: e.target.value})
    }
    const setMedicationUntilDate =(e)=>{
        Medications.until=e;
    }
    const setMedicationFromDate =(e)=>{
        Medications.from=e;
    }
    const [FamilyHistory,setFamilyHistory] = useState({
        familyMember: null,
        disease : null,
        treatments : null,
        outcomes : null
    })
    const onChangeFamilyHistory = (e) =>{
        setFamilyHistory({...FamilyHistory,[e.target.name]: e.target.value})
    }
    const [SocialHistory,setSocialHistory] = useState({
        title : null,
        info : null
    })
    const onChangeSocialHistory = (e) =>{
        setSocialHistory({...SocialHistory,[e.target.name]: e.target.value})
    }
    const [Habits,setHabits] = useState({
        habit : null,
        state: null
    })
    const onChangeHabits = (e) =>{
        setHabits({...Habits,[e.target.name]: e.target.value})
    }
    function postMedicalFile(){
        const form = {
            patient_id: data.patient._id,
            Surgical : Surgical,
            Obstetric :Obstetric,
            Medications : Medications,
            FamilyHistory : FamilyHistory,
            SocialHistory : SocialHistory,
            Habits : Habits
        }
        console.log(form);
        axios({
            method: "Post",
            url: process.env.REACT_APP_BackEnd_url+"/medicalFile/add/",
            data: form
        }).then(response => {
            console.log(response);
        })
        axios({
            method: "Post",
            url: "http://localhost:3001/transaction/broadcast/",
            data: form
        }).then(response => {
            console.log(response);
        })

    }
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    //for viewing the medical file
    const [openView, setOpenView] = React.useState(false);
    const openViewDialog = async () => {
        if(MedicalFile){
            console.log(MedicalFile);
            console.log("MedicalFile");
            setOpenView(true);
        }

    }
    const closeViewDialog = () => {
        setOpenView(false)
    }

    const [MedicalFile,SetMedicalFile]= useState({
        Surgical: [Surgical],
        Obstetric : [Obstetric],
        Medications : [Medications],
        FamilyHistory : [FamilyHistory],
        SocialHistory : [SocialHistory],
        Habits : [Habits]
    });
    const [medf,setMedf]= useState(null);
    useEffect(async () => {
        //for getting the users info & medical file
        await axios.get(url + "getById/" + decodedTOKEN.user_id)
            .then((response) => {
                setData(response.data);
            })
            .catch(err => {
                console.log(err)
            });
        await axios({
            method: "GET",
            url: process.env.REACT_APP_BackEnd_url + "/medicalFile/getById/" + decodedTOKEN.restUserInfo,
        }).then((response) => {
            setMedf(response.data);
            SetMedicalFile(response.data);
            //console.log(response.data);
            //console.log(medf);
            //console.log(MedicalFile);
        });
    },[]);

    if( medf===null)
    {
        return (
            <p>loading profile data...</p>
        );
    }
    return (
            <>
                <div className="wrapper">
                    <IndexNavbar />
                    <>
                        <div
                            className="page-header clear-filter page-header-small"
                            filter-color="blue"
                        >
                            <div
                                className="page-header-image"
                                style={{
                                    backgroundImage:
                                        "url(" + require("assets/img/bg5.jpg").default + ")",
                                }}
                                ref={pageHeader}
                            ></div>
                            <Container>
                                <div className="photo-container">
                                    <Image cloudName="dgwq7xcnk" publicId={data.user.Picture} />
                                </div>
                                <h3 className="title" style={{color: "white",fontFamily: "helvetica"}}>
                                    {data.user.FirstName} {data.user.LastName}
                                </h3>
                            </Container>
                        </div>
                    </>
                    <div className="section">
                        <Container>
                            <Row>
                                {/*this card is for general and medical info */}
                                <GeneralInfo info={data}></GeneralInfo>
                                {/*this card is for appointments list*/}
                                <Card className="col col-md-3" style={{margin : "10px"}} >
                                    <CardHeader>
                                        <Row>
                                            <h3>Appointments :</h3>
                                            <Button className="btn-round" style={{marginLeft:"auto", height:"50px" }} color="info" outline type="button">add</Button>
                                        </Row>
                                    </CardHeader>
                                </Card>
                            </Row>
                            {/*medical file section*/}
                            <div>
                                here goes medical file section
                                <>
                                    <Button className="btn-round" color="info" onClick={handleClickOpen} outline type="button">Upload</Button>
                                    <Button className="btn-round" color="info" onClick={openViewDialog} outline type="button">View</Button>
                                    <PdfMFile medicalFile={medf} name={data.user.FirstName+" "+data.user.LastName} />
                                </>
                            </div>

                            {/*history section*/}
                            <div>
                                <Row>
                                    here goes history section
                                    <Card className="col col-md-12" style={{margin : "10px"}} >
                                        <Descriptions title="History">
                                            <Descriptions.Item label="Full Name" span={3}>
                                                {data.user.FirstName+" "+data.user.LastName}
                                            </Descriptions.Item>
                                        </Descriptions>
                                    </Card>
                                </Row>
                            </div>
                        </Container>
                    </div>
                    <DarkFooter />
                </div>
                <Dialog open={open} onClose={()=>handleClose()}>
                    <DialogTitle>medical file info</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            please fill the fields under in order to provide the medical staff with useful information
                        </DialogContentText>
                        <form>
                            <h6 className="title" style={{ "textAlign": "left"}}>surgical :</h6>
                            <Row>
                                <FormGroup>
                                    <Input
                                        defaultValue={Surgical.title}
                                        name="title"
                                        placeholder="title"
                                        type="text"
                                        onChange={(e)=>onChangeSurgical(e)}
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue={Surgical.motif}
                                        name="motif"
                                        placeholder="motif"
                                        type="text"
                                        onChange={(e)=>onChangeSurgical(e)}
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue={Surgical.outcomes}
                                        name="outcomes"
                                        placeholder="outcomes"
                                        type="text"
                                        onChange={(e)=>onChangeSurgical(e)}
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="date"
                                        placeholder="surgical date"
                                        onChange={(e) => {
                                            setSurgicalDate(e.target.value)
                                        }}
                                    ></Input>
                                </FormGroup>
                            </Row>
                            <h6 className="title" style={{ "textAlign": "left"}}>Obstetric :</h6>
                            <Row>
                                <FormGroup>
                                    <Input
                                        defaultValue={Obstetric.outcomes}
                                        name="outcomes"
                                        placeholder="outcomes"
                                        type="text"
                                        onChange={(e)=>onChangeObstetric(e)}
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        value={Obstetric.babyGender}
                                        name="babyGender"
                                        onChange={(e)=>onChangeObstetric(e)}
                                        type="select"
                                    >
                                        <option value="unknown">unknown</option>
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                    </Input>
                                </FormGroup>
                            </Row>
                                <Row>
                                <FormGroup>
                                    <a>Pregnancy Date</a>
                                    <Input
                                        type="date"
                                        placeholder="pregnancy Date"
                                        onChange={(e) => {
                                            setPregnancyDate(e.target.value)
                                        }}
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <a>Child Birth Date</a>
                                    <Input
                                        type="date"
                                        placeholder="Child Birth Date"
                                        onChange={(e) => {
                                            setChildBirthDate(e.target.value)
                                        }}
                                    ></Input>
                                </FormGroup>

                            </Row>
                            <h6 className="title" style={{ "textAlign": "left"}}>Medications :</h6>
                            <Row>
                                <FormGroup>
                                    <Input
                                        defaultValue={Medications.name}
                                        name="name"
                                        onChange={(e)=>onChangeMedications(e)}
                                        placeholder="name"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue={Medications.dose}
                                        name="dose"
                                        onChange={(e)=>onChangeMedications(e)}
                                        placeholder="dose"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                            </Row>
                                <Row>
                                <FormGroup>
                                    <a>from</a>
                                    <Input
                                        type="date"
                                        placeholder="from"
                                        onChange={(e) => {
                                            setMedicationFromDate(e.target.value)
                                        }}
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <a>until</a>
                                    <Input
                                        type="date"
                                        placeholder="until"
                                        onChange={(e) => {
                                            setMedicationUntilDate(e.target.value)
                                        }}
                                    ></Input>
                                </FormGroup>
                            </Row>
                            <h6 className="title" style={{ "textAlign": "left"}}>Family History :</h6>
                            <Row>
                                <FormGroup>
                                    <Input
                                        defaultValue={FamilyHistory.familyMember}
                                        name="familyMember"
                                        onChange={(e)=>onChangeFamilyHistory(e)}
                                        placeholder="family Member"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue={FamilyHistory.disease}
                                        name="disease"
                                        onChange={(e)=>onChangeFamilyHistory(e)}
                                        placeholder="disease"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue={FamilyHistory.treatments}
                                        name="treatments"
                                        onChange={(e)=>onChangeFamilyHistory(e)}
                                        placeholder="treatments"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue={FamilyHistory.outcomes}
                                        name="outcomes"
                                        onChange={(e)=>onChangeFamilyHistory(e)}
                                        placeholder="outcomes"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                            </Row>
                            <h6 className="title" style={{ "textAlign": "left"}}>Social History :</h6>
                            <Row>
                                <FormGroup>
                                    <Input
                                        defaultValue={SocialHistory.title}
                                        name="title"
                                        onChange={(e)=>onChangeSocialHistory(e)}
                                        placeholder="title"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue={SocialHistory.info}
                                        name="info"
                                        onChange={(e)=>onChangeSocialHistory(e)}
                                        placeholder="info"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                            </Row>
                            <h6 className="title" style={{ "textAlign": "left"}}>Habits :</h6>
                            <Row>
                                <FormGroup>
                                    <Input
                                        defaultValue={Habits.habit}
                                        name="habit"
                                        onChange={(e)=>onChangeHabits(e)}
                                        placeholder="habit"
                                        type="text"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        defaultValue={Habits.state}
                                        name="state"
                                        onChange={(e)=>onChangeHabits(e)}
                                        type="select"
                                    >
                                        <option value="heavy">heavy</option>
                                        <option value="moderate">moderate</option>
                                        <option value="light">light</option>
                                    </Input>
                                </FormGroup>
                            </Row>
                            <Row style={{alignContent:"left"}}>
                                <Button className="btn-round" color="info" outline type="button" onClick={postMedicalFile} >upload</Button>
                                <Button className="btn-round" color="danger" outline type="button" onClick={()=>handleClose}>Cancel</Button>
                            </Row>

                        </form>
                    </DialogContent>
                </Dialog>
                <Dialog open={openView} onClose={()=>closeViewDialog()}>
                    <DialogTitle>medical file info</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            this form contains all of your medical file information
                        </DialogContentText>
                        <MedicalFileView medicalFile={MedicalFile} ></MedicalFileView>
                    </DialogContent>
                </Dialog>

            </>
        );
}
export default Profile;
