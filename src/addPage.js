// 리액트 패키지를 불러옵니다.
import React from 'react';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createDicFB } from "./redux/modules/dic"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';



const AddPage = () => {
  let navigate = useNavigate();

  const word = React.useRef(null);
  const mean = React.useRef(null);
  const explain = React.useRef(null);
  const example = React.useRef(null);
  const same = React.useRef(null);
  const dispatch = useDispatch();


  const addDictList = () => {
    if (word.current.value === "") {
      window.location = "/addpage"
      alert("단어를 입력해주세요")
    } else if (explain.current.value === "") {
      window.location = "/addpage"
      alert("설명을 입력해주세요")
    } else if (example.current.value === "") {
      window.location = "/addpage"
      alert("예시를 입력해주세요")
    } else {
      dispatch(createDicFB({
        word: word.current.value,
        explain: explain.current.value, 
        example: example.current.value,
        mean : mean.current.value,
        same : same.current.value,
        completed: false,
      }
      ));
    }
  };

  return (
    <>
      <Container>
        <Title>내 사전</Title>
        <Line />
        <ItemStyle>
            <Input>
          <input name="name" placeholder="단어" ref={word} />
        </Input>
        <Input>
          <input name="mean" placeholder="뜻" ref={mean} />
        </Input>
        <Input>
          <input name="explain" placeholder="설명" ref={explain} />
        </Input>
        <Input>
          <input name="example" placeholder="예시문" ref={example} />
        </Input>
        <Input>
          <input name="same" placeholder="비슷한단어" ref={same} />
        </Input>
        <Button
          style={style.button}
          variant='outlined'
          color='secondary'
          onClick={() => {
            addDictList();
            // 온클릭 중복하려면 뒤에() 붙여야한다
            navigate("/");
          }}>추가하기</Button>
        </ItemStyle>
      

      </Container>
      

    </>

  );
};

export default AddPage;

const style = {
  button: {
    width: "90%",
    display: "block",
    margin: "30px auto 0px auto",
    padding: "5px"
  },
  text: {
    textAlign: "center"
  }
  
}

const Container = styled.div`
    max-width: 350px;
    min-height: 60vh;
    background-color: #FFFAFA;
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
    border: 2px dotted #ddd;
    `;


const ItemStyle = styled.div`
    padding: 5px;
    margin: 50px 8px 8px 8px;
    background-color: #E6E6FA;
    line-height: 20px
    `;


const Input = styled.div`
  max-width: "100%",
  min-height: 20vh;
  background-color: #E6E6FA;
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


