import {React , useEffect, useState} from 'react';

import {
    Container,
    Row,
    Col,
  } from "reactstrap";

import ReactPaginate from 'react-paginate';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import DarkFooter from 'components/Footers/DarkFooter';
import { Link } from 'react-router-dom';
import HBFooter from 'components/Footers/HBFooter';
import HBNavbar from 'components/Navbars/HBNavbar';
import SectionThreadsContent from 'components/Forum/SectionThreadsContent';

const items = [...Array(33).keys()];


const SectionThreads = () =>
{
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    const [itemsPerPage, setItemsPerPage] = useState(10);
  
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = event.selected * itemsPerPage % items.length;
      console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
    };
  

    return (
        <>
        <HBNavbar /> 
        <div className="wrapper">
            <Container className="section-threads">
                <h4 className="section-threads-title">Section: Section Title</h4>
                    <Container className="section-thread-content">

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
                            
                            <SectionThreadsContent items={["a","a","a"]}></SectionThreadsContent>

                            
                            </tbody>
                        </table>
                        <Container className='section-threads-pagination'>
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
                          </Container>
                    </Container>
            </Container>
            <HBFooter />
        </div>
        </>
    );
};

export default SectionThreads;