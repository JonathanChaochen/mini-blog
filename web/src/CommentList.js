import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchData(postId);
  }, [postId]);

  const fetchData = async (postIdToGet) => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postIdToGet}/comments`
    );

    setComments(res.data);
  };


  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
