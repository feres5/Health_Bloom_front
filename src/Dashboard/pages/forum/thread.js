import {React , useEffect, useState} from 'react';
import { Link, useParams} from 'react-router-dom';

import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';

import axios from 'axios';
import { styled } from '@mui/material/styles';

import {
    Grid,
    Paper,
    Button,
    Box,
    FormControl,
    TextField,
    FilledInput,
    Typography,
    IconButton
  } from "@mui/material";


import ReactPaginate from 'react-paginate';


import ThreadContentCard from './../../components/Forum/ThreadContentCard'


function Thread()
{
    const [thread, setThread] = useState({})
    const [initContent, setInitContent] = useState({})
    const [comments, setComments] = useState([])
    const [allComments, setAllComments] = useState([])
    const [goToLastPageChecker, setGoToLastPageChecker] = useState(false)
    const { id } = useParams();

    //const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    const [itemsPerPage, setItemsPerPage] = useState(4);

    const [currentPageIndex, setCurrentPageIndex] = useState(0)

    const [replyText, setReplyText] = useState('')



    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      
    const goToLastPage = () => 
    {
      const newOffset = (Math.ceil((allComments.length) / itemsPerPage) - 1)  * itemsPerPage % allComments.length;
      setItemOffset(newOffset);
      setCurrentPageIndex(Math.ceil((allComments.length) / itemsPerPage) - 1)
    }
    

    useEffect(() => {
        fetchThread()
    },[]);


    useEffect(() => {

        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);

        if(goToLastPageChecker)
        {
            goToLastPage();
            setGoToLastPageChecker(false)
        }
        
        setComments(allComments.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(allComments.length / itemsPerPage));

    }, [itemOffset, itemsPerPage,allComments]);
    
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % allComments.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
    };

    const fetchThread = async () => {
    const url = "http://localhost:3002/forum/get-thread/";
    
    const urlId= url+id;
    //const reponse = await fetch(urlId);
    //const newThread = 
    axios.get(urlId).then((response) => {
        //console.log(response.data)
        let thread = response.data
        setThread(thread);
        setInitContent(thread.initContent)
        setComments(thread.comments)
        setAllComments(thread.comments)
    })
      
        /*setThread(newThread);
        setInitContent(newThread.initContent)
        setComments(newThread.comments)*/
    }

 
    const onCommentAdded = (commentText) => {
        
            
            if(localStorage.getItem('lastPosted') != null)
            {
                let lastPosted = parseInt(localStorage.getItem('lastPosted'))

                let timeDiff = parseInt( (parseInt(Date.now()) - parseInt(lastPosted)) );
                
                if(timeDiff < 10000)
                { 
                    if(localStorage.getItem('postStrike') != null)
                    {
                        localStorage.setItem('postStrike', JSON.stringify(parseInt(localStorage.getItem('postStrike')) + 1));

                        if(parseInt(localStorage.getItem('postStrike')) > 3 )
                        {
                            alert('stop spam')
                        }
                    }
                    else
                    {
                        localStorage.setItem('postStrike', '0');
                    }
                }
                else
                {
                    localStorage.setItem('postStrike', '0');
                }
            }
        

        axios.post("http://localhost:3002/forum/add-comment-to-thread", { body: commentText , threadId: id})
        .then((res) => {
            localStorage.setItem('lastPosted',JSON.stringify(Date.now()))

            let data = res.data;
            
            let newComments = [...allComments,{body:commentText, threadId:id, _id:data._id}]
            setAllComments(newComments)
            
        }).catch((error) => {
            console.log(error)
        });
        setGoToLastPageChecker(true);

        setReplyText('');
    }

    const OnCommentLike = () => 
    {
        fetchThread()
    }

    const onCommentDelete = (id) => {
    let newComments = allComments
    newComments.forEach((element,index,object) => {
            if(element._id === id)
            {
                
                object.splice(index, 1)
            }
        });
        
        setAllComments([...newComments])
    }


    const onReplyTextChange = (e) => setReplyText(e.target.value);
    return(
        <>
        <div className="wrapper">
            <div className="thread container">
                <Grid container className="thread-title-row">
                    <Grid item xs={4}>
                    <Link to={`/dashboard/forum/section/${thread.section}`}> <IconButton onClick={() => {}} > <ArrowBackIosNew /></IconButton>
                    </Link>
                    </Grid>

                    <Grid item xs={8}>
                        
                    </Grid>
                </Grid>
                
                <div className="thread-content container">
                    <ThreadContentCard onCommentLike={OnCommentLike} onCommentDelete={onCommentDelete} thread={thread} initContent={initContent} comments={comments} ></ThreadContentCard>
                </div>


                <Box className='thread-comment'>
                    
                    <FilledInput label='comment'  onChange={onReplyTextChange} value={replyText} className='thread-comment-input' minRows={6} multiline />
                    

                    <Button variant="contained" className='thread-comment-button' onClick={() => {onCommentAdded(replyText)} } >Add Comment</Button>
                </Box>
            
                <div className='section-threads-pagination'>
                        <ReactPaginate 
                            
                            nextLabel=">>"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={pageCount}
                            forcePage={currentPageIndex}
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
            </div>
            
        </div>
        </>
    );
}

export default Thread;