import {React , useEffect, useState} from 'react';
import { Link, useParams} from 'react-router-dom';

import axios from 'axios';

import {
    Row,
    Col,
    Input,
    Button,
    Form
  } from "antd";
  

import ReactPaginate from 'react-paginate';


import ThreadContentCard from './../../components/Forum/ThreadContentCard'

const { TextArea } = Input;

function Thread()
{
    const [thread, setThread] = useState({})
    const [initContent, setInitContent] = useState({})
    const [comments, setComments] = useState([])
    const { id } = useParams();

        const fetchThread = async () => {
        const url = "http://localhost:3002/forum/get-thread/";
        
        const urlId= url+id;
        const reponse = await fetch(urlId);
        const newThread = await reponse.json();
        
        
        setThread(newThread);
        setInitContent(newThread.initContent)
        setComments(newThread.comments)
      }

      useEffect(() => {
          fetchThread()

      },[]);

      
    const onFinish = (values) => {

        console.log(values)

        const comment =  values.comment;
        axios.post("http://localhost:3002/forum/add-comment-to-thread", { body: comment , threadId: id}).then((res) => {
            console.log(res.data)
            fetchThread()
            //history.push("/forum/section/1");
        }).catch((error) => {
            console.log(error)
        });
      };

      
    return(
        <>
        <div className="wrapper">
            <div className="thread container">
                <Row className="thread-title-row">
                    <Col  sm={6}>
                    </Col>

                    <Col sm={18}>
                        <h4 className="thread-title">/</h4>
                    </Col>
                </Row>
                
                <div className="thread-content container">
                    <ThreadContentCard thread={thread} initContent={initContent} comments={comments}></ThreadContentCard>
                </div>


                <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                >
                    <Form.Item
                    label="comment"
                    name="comment"
                    rules={[{ required: true, message: 'Cannot be empty !!' }]}
                    >
                        <TextArea className='thread-comment-input' rows={6} />
                    </Form.Item>

                    <Button className='thread-comment-button' htmlType='submit' >Add Reply</Button>
                </Form>
            </div>
        </div>
        </>
    );
}

export default Thread;