import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';

const posts = [{
  id: '1',
  title: 'titlu1',
  author: 'gigel',
  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  createdAt: '4281948219',
  editedAt: undefined,
  tags: ['tag1', 'tag2']
},
{ 
  id: '2',
  title: 'titlu2',
  author: 'ionut',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  createdAt: '32241948219',
  editedAt: undefined,
  tags: ['tag5', 'tag6']
}];

export class PostList extends Component {
    componentDidMount() {
      //apel firebase de fetch articole
    }

    render() {
      return posts.map ((element) => {
        return (
            <Post key={element.id} element={element}></Post>
        );
      });
    }
};

export default PostList;