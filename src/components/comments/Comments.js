import { useCallback, useEffect, useState } from 'react';
import { getAllComments } from '../../lib/api';
import useHttp from '../../hooks/use-http';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';

const Comments = () => {
  const params = useParams();
  const [isAddingComment, setIsAddingComment] = useState(false);

  const { sendRequest, status, data:loadedComments} = useHttp(getAllComments);

  console.log(loadedComments)

  useEffect(() => {
    sendRequest(params.id)
  }, [sendRequest, params])

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedNewCommentHandler = useCallback(() => {
    sendRequest(params.id)
  },[sendRequest,params]);

  let comments;

  if(status === 'pending'){
    comments = (
      <div className='centered'>
        <LoadingSpinner></LoadingSpinner>
      </div>
    )
  }

  if(status === 'completed' && (loadedComments && loadedComments.length > 0)){
    comments = (
      <CommentsList comments={loadedComments}></CommentsList>
    )
  }

  if(status === 'completed' && (!loadedComments || loadedComments.length === 0)){
    comments = <p>No comments were added yet</p>
  }
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddedComment={addedNewCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
