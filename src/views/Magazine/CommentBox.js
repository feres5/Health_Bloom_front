import React, { useState, useRef, useEffect } from "react";
import cn from "classnames";
import "../../assets/css/CommentBox.css";
import jwt_decode from "jwt-decode";
import Filter from 'bad-words';

const INITIAL_HEIGHT = 46;

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/how-to-build-an-expandable-comment-box
 */
export default function CommentBox(props) {
    
    const [content, setContent] = useState("");
    const [idArticle, setIdArticle] = useState("");
    const [Author, setAuthor] = useState([])
    const [isExpanded, setIsExpanded] = useState(false);

    const [commentValue, setCommentValue] = useState("");
    const useDynamicHeightField = (element, value) => {
        useEffect(() => {
            if (!element) return;

            element.current.style.height = "auto";
            element.current.style.height = element.current.scrollHeight + "px";
        }, [element, value]);
    };

    const outerHeight = useRef(INITIAL_HEIGHT);
    const textRef = useRef(null);
    const containerRef = useRef(null);
    useDynamicHeightField(textRef, commentValue);
   
    const onExpand = () => {
        if (!isExpanded) {
            outerHeight.current = containerRef.current.scrollHeight;
            setIsExpanded(true);
        }
    };
    const refreshPage = () => {
        window.location.reload();
      }
    const onChange = (e) => {
        setCommentValue(e.target.value);
    };

    const onClose = () => {
        setCommentValue("");
        setIsExpanded(false);
    };
    var user = localStorage.getItem("user_info");
    var decodedTOKEN = jwt_decode(user,{payload : true});


    const urlAuthor = "http://localhost:3002/articles/Author/"
  const fetchAuthor = async () => {
      const urlId = urlAuthor + decodedTOKEN.user_id

      const reponse = await fetch(urlId)
      const newAuthor = await reponse.json()
      setAuthor(newAuthor)
      console.log(newAuthor)
      return newAuthor;
  }
  useEffect(() => {
      fetchAuthor()
  }, [])

 const AuthorName= Author.FirstName+ " "+Author.LastName;

    const onSubmit = (e) => {
        e.preventDefault();
        fetch(process.env.REACT_APP_BackEnd_url+`/articles/addComment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: commentValue, idArticle: props.idArticle, idUser:decodedTOKEN.user_id 
            , emailUser:decodedTOKEN.Email})
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    console.log(resp.success)
                    const message=resp.message;
                    refreshPage()
                })
            })
}


    return (
        <div className="container">
            <form
                onSubmit={onSubmit}
                ref={containerRef}
                className={cn("comment-box", {
                    expanded: isExpanded,
                    collapsed: !isExpanded,
                    modified: commentValue.length > 0
                })}
                style={{
                    minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT
                }}
            >
                <div className="header">
                    <div className="user">
                        <img
                            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
                            alt="User avatar"
                        />
                        <span>{AuthorName}</span>
                    </div>
                </div>
                <textarea
                    ref={textRef}
                    onClick={onExpand}
                    onFocus={onExpand}
                    onChange={onChange}
                    className="comment-field"
                    placeholder="What are your thoughts?"
                    value={commentValue}
                    name="comment"
                    id="comment"
                />
                <div className="actions">
                    <button type="button" className="cancel" onClick={onClose}>
                        Cancel
                    </button>
                    <button type="submit" disabled={commentValue.length < 1}>
                        Respond
                    </button>
                </div>
            </form>
        </div>
    );
}