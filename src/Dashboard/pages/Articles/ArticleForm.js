
import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";
import axios from 'axios';

// Soft UI Dashboard React components

import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";







function ArticleForm() {

    var user = localStorage.getItem("user_info");
    var decodedTOKEN = jwt_decode(user, { payload: true });
    var id = decodedTOKEN.user_id;
    console.log(id)
    const [Author, setAuthor] = useState([])
    const [Title, setTitle] = useState()
    const [Description, setDescription] = useState()
    const [Image, setImage] = useState()

    console.log("title is" + Title)
    const url = "http://localhost:3002/articles/Author/"

    const fetchAuthor = async () => {
        const urlId = url + id;

        const reponse = await fetch(urlId)
        const newAuthor = await reponse.json()
        setAuthor(newAuthor)
        console.log(newAuthor)
    }
    useEffect(() => {
        fetchAuthor()
    }, [])


    const onSubmit = () => {
        var newImage = Image.replace("C:\\fakepath\\", "");
        console.log(newImage)
        var AuthorName = Author.FirstName + " " + Author.LastName
        fetch(`http://localhost:3002/articles/addArticle`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: Title, author: AuthorName,
                description: Description, image: newImage
            })
        }).then(
            (result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    console.log(resp.success)
                    const message = resp.message;

                    window.location.href = '/articles'

                })
            }

        )
    }

    return (
        <div style={{
            display: 'block',
            width: 700,
            padding: 30
        }}>
            <h4> Welcome Back Dr.{Author.FirstName} </h4>
            <br />
            <br />
            <h6> Add a new article</h6>
            <Form>
                <Form.Group>
                    <Form.Label>Title:</Form.Label>
                    <Form.Control type="text"
                        name="title"
                        value={Title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Enter the title" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Write you article:</Form.Label>

                    <div className="form-group">
                        <textarea
                            name="description"
                            value={Description}
                            onChange={e => setDescription(e.target.value)}
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="10"
                            height="100px"
                            placeholder="Write you article here.."
                        />
                    </div>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image:</Form.Label>

                    <div>
                        <input type="file" value={Image} onChange={e => {
                            setImage(e.target.value)
                        }} />

                    </div>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => { onSubmit() }}>
                    Click here to add this article
                </Button>
            </Form>
        </div>
    )
}
export default ArticleForm;