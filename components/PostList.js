import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';

let posts = ['post1','post2','post3']; 

const PostList = () => {
    return posts.map ((element) => {

        return (
          <Post>{element}</Post>
        );
     })
};

export default PostList;