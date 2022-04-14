import {React , useEffect, useState} from 'react';

import {
    Row,
    Col,
    Input,
    Button,
    Form
  } from "antd";
  

import ReactPaginate from 'react-paginate';

import { Link } from 'react-router-dom';

import ThreadContentCard from './../../components/Forum/ThreadContentCard'

const { TextArea } = Input;

function Thread()
{
    const onFinish = (values) => {
        console.log('Success:', values);
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
                    <ThreadContentCard></ThreadContentCard>
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