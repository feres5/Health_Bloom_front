import {React , useEffect, useState} from 'react';

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

import ReactPaginate from 'react-paginate';

import { Link, useParams } from 'react-router-dom';

import SectionThreadsContent from './../../components/Forum/SectionThreadsContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 

import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';

import {

  IconButton
} from "@mui/material";

import jwt_decode from "jwt-decode";


const SectionThreads = () =>
{
    //const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    const [itemsPerPage, setItemsPerPage] = useState(4);

    const [allThreads, setAllThreads] = useState([])
    const [threads, setThreads] = useState(null)

    const [section, setSection] = useState({})
    const [userData, setUserData] = useState({})

    const { id } = useParams();

    const fetchSectionData = async () => 
    {
      const url = process.env.REACT_APP_BackEnd_url +  "/forum/get-section-by-id/";
      const urlId= url+id
      const reponse = await fetch(urlId);
      let section = await reponse.json();
      setSection(section)
    }

    const fetchSections = async (_mounted) => {
      const url = process.env.REACT_APP_BackEnd_url + "/forum/get-threads-by-section/";
      const urlId= url+id
      const reponse = await fetch(urlId);
      let newThreads = await reponse.json();
      newThreads = newThreads.reverse()
      if(_mounted)
      setAllThreads(newThreads);
    }
    
    useEffect(() => {
        let isMounted = true;  
        
        fetchSections(isMounted)
        fetchSectionData(isMounted)
        fetchUser()
        return () => { isMounted = false };
    },[]);
  
    useEffect(() => {

      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      
      setThreads(allThreads.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(allThreads.length / itemsPerPage));
      
    }, [itemOffset, itemsPerPage,allThreads]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = event.selected * itemsPerPage % allThreads.length;
      console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
    };
    
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
            <div className="section-threads">
            <Link to={`/dashboard/forum/`}> <IconButton onClick={() => {}} > <ArrowBackIosNew /></IconButton> </Link> <h4>Section : {section.title}</h4>

              <Card className="section-threads-links-container">
               
               <Link className="section-threads-create-thread" to={`/dashboard/forum/section/${id}/create-thread`}>
                 <FontAwesomeIcon icon={solid('plus')} size="lg" />&nbsp; New Thread
               </Link>

                </Card>
                    <Card className="section-thread-content">


                        <table className="section-threads-table">
                            <thead>
                                <tr>
                                    <th className='section-threads-title-table-header'>
                                        Title
                                    </th>
                                    <th className='section-threads-activity-table-header'>
                                        Activity
                                    </th>
                                    <th className='section-threads-last-added-table-header'>
                                        Last Added
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            
                            <SectionThreadsContent items={threads != null ? threads : []}></SectionThreadsContent>

                            
                            </tbody>
                        </table>

                        <div className='section-threads-pagination'>
                        <ReactPaginate 
                            
                            nextLabel=">>"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={pageCount}
                            previousLabel="<<"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                            />
                          </div>
                    </Card>
            </div>
        </div>
        </>
    );
};

export default SectionThreads;
