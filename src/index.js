import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'


function Users(props){

  return (
    <main>
      <img src={props.user1.imgUrl} /> &nbsp; <strong>{props.user1.name}</strong>
    </main>
  );

}


function Board(props){

  return (
    <section>
      <Users user1={props.user} />
      <hr/>
      {props.title}
      <hr/>
      {props.content}
    </section>
  );

}


const board = {
  title : 'test1',
  content : '게시글 내용입니다.반갑습니다.',
  user:{
    name : '홍길동',
    imgUrl : 'http://placeimg.com/64/64/any'
  }
};


ReactDOM.render(
  <Board title={board.title} content={board.content} user={board.user}/>,
  document.getElementById('root')
);