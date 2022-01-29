import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { updateDic, deleteDic } from "./redux/modules/dic";
import './App.css';


const Page = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const inputs = useSelector((state) => state.dic.inputs);


    return (
        <>
            <Title>My Dictionary
                <Line />
            </Title>

            <IoIosAddCircle style={{
                position: "fixed",
                bottom: "0",
                right: "0",
                margin: "20px"
            }} size={70} color="purple"
                onClick={() => { navigate("/addpage"); }} />
            <Container>
                <Flexbox>
                    {inputs.map((input, index) => {
                        return (
                            <Item key={index} completed={input.completed}>
                                <h4 style={{
                                    fontSize: "24px"
                                }}>{input.word}</h4>
                                <span>[{input.mean}]</span>
                                <p>{input.explain}</p>
                                <p>{input.example}</p>
                                <p>{input.same}</p>
                                <button onClick={() => {
                                    dispatch(updateDic(index));
                                }}>완료</button>
                                <button onClick={() => {
                                    navigate("/detailpage" + index);
                                }}>수정</button>
                                <button onClick={() => {
                                    dispatch(deleteDic(index));
                                }}>삭제</button>
                            </Item>
                        );
                    })}
                </Flexbox>
            </Container>
        </>

    );
};

const Title = styled.h1`
    color: slateblue;
    block: none;
    text-align: center;
    line-height: 100px;
    background-color: white;
    height: 110px;
    margin-top: 0px;
    `;

const Line = styled.hr`
    border: 2px dotted #ddd;`;

const Container = styled.div`  
    width: 70vw;
    margin: auto;
    
    `;

const Flexbox = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, auto));

`

// props는 Input의 props를 넘겨주는 것! 자바스크립트를 쓰려면 ${}를 넣어줘야함
const Item = styled.div` 
  background-color: ${(inputs) => (inputs.completed ? "#673ab7" : "#E6E6FA")};
  border-radius: 10px;
  border: 2px solid #673ab7;
  margin: 30px 15px 30px 15px

`;

// &:nth-child(${(inputs) => (inputs.key)}) { grid-column: auto / span 1; }

export default Page;