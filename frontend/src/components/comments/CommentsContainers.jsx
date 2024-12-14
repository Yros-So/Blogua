import React, { useEffect, useState } from 'react'

import { getCommentsData } from '../../data/comments';
import CommentForm from './CommentForm'
import Comment from './Comment'



const CommentsContainers = ({ className, logginedUserId }) => {
const [comments, setComments] = useState([]);
  const mainComments = comments.filter((comment) => comment.parent === null);
  const [affectedComment, setAffectedCommment] = useState(null)

  console.log(comments);

  useEffect(() => {
    (async() => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })()
  }, []);

  const addCommentHandler = (value, parent=null, replyOnUser = null) => {
    const newComment = {
      _id: "10",
      user: {
          _id: "a",
          name: "Ibrahima So",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: "2024-11-30T17:22:05.092+0000",
    };
    setComments((curState) => {
      return [newComment, ...curState];
    });
  };

  return (
    <div className={ className }>
      <CommentForm 
        title='Send' 
        formSubmitHandler={(value) => addCommentHandler(value)} 
      />
      <div className='space-y-4 mt-8'>
        {mainComments.map((comment) => (
          <Comment 
            comment={comment} 
            logginedUserId={logginedUserId} 
            affectedComment={affectedComment} 
            setAffectedCommment={setAffectedCommment} 
            addComment={addCommentHandler}
           />
        ))}
      </div>
    </div>
  )
}

export default CommentsContainers
