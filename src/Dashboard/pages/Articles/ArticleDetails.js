/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

import {
    Row,
    Col,
    Card,
    List,
    Descriptions,
    Avatar,
    Radio,
    Switch,
    Upload,
    message,
} from "antd";

import {
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
    VerticalAlignTopOutlined,
} from "@ant-design/icons";

import BgProfile from "../../assets/images/bg-profile.jpg";
import profilavatar from "../../assets/images/face-1.jpg";
import { useLocation } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import articleForm from "./ArticleForm";
import TextArea from "antd/lib/input/TextArea";
import { ButtonBase } from "@mui/material";
import { Button } from "react-bootstrap";


function ArticleDetailsDashboard() {
    const [imageURL, setImageURL] = useState(false);
    const [, setLoading] = useState(false);
    const [Title, setTitle] = useState()
    const [Description, setDescription] = useState()
    const [Image, setImage] = useState()
    const location = useLocation();
    const idArticle = location.state.idArticle
    const [ArticleDetails, setArticleDetails] = useState([])
    const url = "http://localhost:3002/articles/"

    const fetchArticleDetails = async () => {
        const urlId = url + idArticle;

        const reponse = await fetch(urlId)
        const newArticleDetails = await reponse.json()
        setArticleDetails(newArticleDetails)
    }
    useEffect(() => {
        fetchArticleDetails()
    }, [])

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => callback(reader.result));
        reader.readAsDataURL(img);
    };
    const refreshPage = () => {
        window.location.reload();
    }
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
        if (!isJpgOrPng) {
            message.error("You can only upload JPG/PNG file!");
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error("Image must smaller than 2MB!");
        }
        return isJpgOrPng && isLt2M;
    };
    const onSubmit = () => {
        if (Image) {
            var newImage = Image.replace("C:\\fakepath\\", "");
            console.log(newImage)
        }
        else {
            var newImage = ArticleDetails.image
        }
        if (Description) {
            var newDescription = Description
        }
        else {
            var newDescription = ArticleDetails.description
        }
        if (Title) {
            var newTitle = Title
        }
        else {
            newTitle = ArticleDetails.title
        }
        fetch(`http://localhost:3002/articles/updateArticle`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: idArticle, title: Title,
                description: newDescription, image: newImage
            })
        }).then(
            (result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    console.log(resp.success)
                    const message = resp.message;
                    refreshPage();
                })
            }

        )
    }

    const deleteArticle = async (id) => {

        fetch(`http://localhost:3002/articles/delete/${id}`, {
            method: 'GET'
        })
            .then(async response => {

                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        window.location.href = '/articles'

    }

    const handleChange = (info) => {
        if (info.file.status === "uploading") {
            setLoading(false);
            return;
        }
        if (info.file.status === "done") {
            getBase64(info.file.originFileObj, (imageUrl) => {
                setLoading(false);
                setImageURL(false);
            });
        }
    };

    const pencil = [
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            key={0}
        >
            <path
                d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
                className="fill-gray-7"
            ></path>
            <path
                d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
                className="fill-gray-7"
            ></path>
        </svg>,
    ];

    const uploadButton = (
        <div className="ant-upload-text font-semibold text-dark">
            {<VerticalAlignTopOutlined style={{ width: 20, color: "#000" }} />}
            <div>Upload New Project</div>
        </div>
    );


    return (
        <>
            <div
                className="profile-nav-bg"
                style={{ backgroundImage: "url(" + ArticleDetails.image + ")" }}
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
                                    <h4 className="font-semibold m-0">{ArticleDetails.title}</h4>
                                    <p>{ArticleDetails.author}</p>
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
                            <Button variant="danger" onClick={() => { deleteArticle(ArticleDetails._id) }}> Delete Article </Button>
                        </Col>
                    </Row>
                }
            ></Card>

            <Row gutter={[24, 0]}>
                <Col span={24} md={8} className="mb-24">
                    <Card
                        bordered={false}
                        title={<h6 className="font-semibold m-0">Content</h6>}
                        className="header-solid h-full card-profile-information"
                        bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
                    >
                        <p className="text-dark">
                            {" "}
                            {ArticleDetails.description}.{" "}
                        </p>
                        
                    </Card>
                </Col>

                <Col width={200} span={24} lg={8} className="mb-24 ">
                <Card
                        bordered={false}
                        className="header-solid h-full"
                        title={<h6 className="font-semibold m-0">More details about this article</h6>}
                    >
                <hr className="my-25" />
                        <Descriptions title="More details..">
                            <Descriptions.Item label="Created at" span={3}>
                                {ArticleDetails.dateCreation}
                            </Descriptions.Item>
                            <Descriptions.Item label="Liked by" span={3}>
                                {ArticleDetails.nbLikes} people
                            </Descriptions.Item>
                            <Descriptions.Item label="Comments" span={3}>
                                {ArticleDetails.nbComments}
                            </Descriptions.Item>

                           
                        </Descriptions>
                        </Card>
                </Col>
                <Col span={24} md={8} className="mb-24">
                <Card
                        bordered={false}
                        className="header-solid h-full"
                        title={<h6 className="font-semibold m-0">Update this article</h6>}
                    >
                        <Form>
                            <Form.Group>
                                <Form.Label><h6>Title:</h6></Form.Label>
                                <Form.Control type="text"
                                    name="title"
                                    defaultValue={ArticleDetails.title}
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder="Enter the title" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><h6>Update your article</h6></Form.Label>

                                <div className="form-group">
                                    <textarea
                                        name="description"
                                        defaultValue={ArticleDetails.description}
                                        onChange={e => setDescription(e.target.value)}
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="10"
                                        height="100px"
                                        placeholder="Write you article here.."
                                    />
                                </div>
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label><h6>Choose a new image (if you want)</h6></Form.Label>

                                <div>
                                    <input type="file" defaultValue={ArticleDetails.image} onChange={e => {
                                        setImage(e.target.value)
                                    }} />

                                </div>
                            </Form.Group>
                            <br />
                            <Button variant="primary" type="submit" onClick={() => { onSubmit() }}>
                                Save Changes
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>

        </>
    );
}

export default ArticleDetailsDashboard;