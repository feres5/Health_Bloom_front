import {
    Row,
    Col,
    Card,
    Button,

} from "antd";

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { Input } from "reactstrap";

function Articles() {
    const [articles, setarticles] = useState([])

    const [searchTerm, setsearchTerm] = useState()
    const handleSearchTerm = async (e) => {
        let value = e.target.value;
        setsearchTerm(value);
        console.log(value)
    }

    const fetcharticles = async () => {
        const url = process.env.REACT_APP_BackEnd_url+'/articles'
        const reponse = await fetch(url)
        const newarticles = await reponse.json()
        setarticles(newarticles)
        console.log(newarticles)

    }
    useEffect(() => {
        fetcharticles()
    }, [])


    return (
        <>

            <div>
                <Card
                    bordered={true}
                    className="header-solid mb-24"
                    title={
                        <>
                            <h6 className="font-semibold">Articles</h6>
                            <p>List of all articles</p>
                        </>
                    }

                >
                    <Row gutter={[24, 24]}>

                        <Col>

                            <Input
                                onChange={(e) => { handleSearchTerm(e) }}
                                className="header-search"
                                placeholder="Type here..."
                            />
                        </Col>
                        <Col>
                            <Link to={{ pathname: "/articleForm" }} >
                                <Button type="button">ADD NEW</Button>
                            </Link>
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={[24, 24]}>
                        {articles.filter((val) => {
                            if (searchTerm != null) {
                                return val.title
                                    .toString()
                                    .toLowerCase()
                                    .includes(searchTerm.toString().toLowerCase())
                            } else return val
                        }
                        ).map((item) => (
                            <Col span={30} md={12} xl={6} >
                                <Card
                                    bordered={false}
                                    className="card-project"
                                    cover={<img alt="example" height={170} width={50} src={item.image} />}
                                >
                                    <div className="card-tag" height={170} width={50}>{item.title}</div>

                                    <div className="card-tag" height={170}>{item.category}</div>
                                    <Row gutter={[6, 0]} className="card-footer">
                                        <Col span={5}>
                                            <Link
                                                to={{pathname: "/articleDetails"}}
                                                state={{idArticle: item._id}}
                                            >
                                                <Button type="button">VIEW ARTICLE</Button>
                                            </Link>

                                        </Col>

                                    </Row>
                                </Card>
                            </Col>
                        ))}

                    </Row>
                </Card>

            </div>
        </>
    );
}

export default Articles;
