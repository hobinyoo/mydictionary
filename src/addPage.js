// 리액트 패키지를 불러옵니다.
import React from 'react';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createDic } from "./redux/modules/dic"


const AddPage = (props) => {


  const word = React.useRef(null);
  const explain = React.useRef(null);
  const example = React.useRef(null);
  const dispatch = useDispatch();
  const addDictList = () => {

    dispatch(createDic({ word: word.current.value, 
      explain: explain.current.value, example: example.current.value}
));


  };

  return (
    <>
      <Container>
        <Title>내 사전</Title>
        <Line />
        <h2>단어 추가하기</h2>
        <Input>
          <input name="name" placeholder="단어" ref={word} />
        </Input>
        <Input>
          <input name="explain" placeholder="설명" ref={explain} />
        </Input>
        <Input>
          <input name="example" placeholder="예시" ref={example} />
        </Input>
        <input  />
        <button onClick={addDictList}>추가하기</button>
      </Container>
      <Input>
       
      </Input>
    </>

  );
};

export default AddPage;


const Container = styled.div`
    max-width: 350px;
    min-height: 60vh;
    background-color: #fff;
    padding: 16px;
    margin: 100px auto;
    border-radius: 5px;
    border: 1px solid #ddd;
    `;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
  `;

const Line = styled.hr`
    margin: 16px 10px;
    border: 1px dotted #ddd;
    `;


// const ItemStyle = styled.div`
//     padding: 5px;
//     margin: 8px;
//     background-color: aliceblue;
//     line-height: 20px
//     `;


const Input = styled.div`
  max-width: "100%",
  min-height: 20vh;
  background-color: #fff;
  padding: 10px;
  margin: 10px 10px;
  
 
  display: flex;
  & > * {
    padding : 10px;
  }

  & input{
    border: 1px solid #888;
    width: 100%;
  }

  & input:focus {
    border: 1px solid #a673ff;
    outline: none;
  }

`;

const Button = styled.div`
  width: 80%;
  height: 5vh;
  color: #fff;
  border: #a673ff;
  background: #a673ff;
  disply: block;
  margin: auto;
  text-align: center;
  padding: 20px 0
  
`