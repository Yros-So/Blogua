import React from 'react'
import CommentForm from './CommentForm'

const CommentsContainers = ({ className }) => {
  const addCommentHandler = (value, parent=null, replyOnUser = null) => {};

  return (
    <div className={""+className}>
      <CommentForm title='Send' />
    </div>
  )
}

export default CommentsContainers
