import React from "react";


import {
    Container,
    Row,
    Col,
  } from "reactstrap";
  
  import { Link } from 'react-router-dom';

const SectionThreadsCard = () => 
{
    return(
        <>
        <tr className='section-thread-table-row'> 
            <td>
                <Container className='section-thread-card'>
                    <Link className='section-thread-card-title' to={"#"}>This is the amazing title to this thread bitch ass This is the amazing title to this thread bitch assThis is the amazing title to this thread bitch ass</Link>
                    <Container  className='section-thread-card-infos'>
                        <span>By:</span> <Link to={"#"}>Foulen</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link>15-12-2021</Link>
                    </Container>
                </Container>
            </td>
                <td>
                    52 Comments
                </td>
            <td>
                <Container  className='section-thread-card-infos'>
                        <span>By:</span> <Link to={"#"}>Foulen</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link>15-12-2021</Link>
                </Container>
            </td>
        </tr>
        </>
    );
};

export default SectionThreadsCard;