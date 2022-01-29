import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { updateDic, deleteDic } from "./redux/modules/dic";
import './App.css';
import './Page.css';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';


const Page = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const inputs = useSelector((state) => state.dic.inputs);


    return (
        <>
            <Title>My Dictionary
                <Line />
            </Title>

            <IoIosAddCircle className="addbutton" size={70} color="purple"
                onClick={() => { navigate("/addpage"); }} />
            <Container>
                <Flexbox>
                    {inputs.map((input, index) => {
                        return (
                            <Item key={index} completed={input.completed}>
                                <div>
                                    <h4 style={{
                                        fontSize: "24px",
                                        margin: "5px 10px"
                                    }}>{input.word}</h4>
                                    <div style={{
                                        marginRight: "1px",
                                        color: "purple",
                                        float: "right",
                                        margin: "-32px 0px 0px 0px"
                                    }}> 
                                        <CheckCircleRoundedIcon onClick={() => {
                                            dispatch(updateDic(index));
                                        }} />
                                        <BorderColorTwoToneIcon onClick={() => {
                                            navigate("/detailpage" + index);
                                        }} />
                                        <ClearTwoToneIcon onClick={() => {
                                            dispatch(deleteDic(index));
                                        }} />
                                    </div>

                                </div>
                                <span style={{
                                    fontSize: "12px",
                                    margin: "5px 10px"
                                }}>[{input.mean}]</span>
                                <p style={{
                                    fontSize: "15px",
                                    margin: "5px 10px"
                                }}>{input.explain}</p>
                                <p style={{
                                    fontSize: "15px",
                                    margin: "5px 10px",
                                    color: "blue"
                                }}>{input.example}</p>
                                <p style={{
                                    fontSize: "15px",
                                    margin: "5px 10px",
                                    color: "blue"
                                }}>{input.same}</p>

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
  background-color: ${(inputs) => (inputs.completed ? "#673ab7" : "#D8BFD8")};
  border-radius: 10px;
  border: 2px solid #673ab7;
  margin: 15px 15px 15px 15px

`;

// &:nth-child(${(inputs) => (inputs.key)}) { grid-column: auto / span 1; }

export default Page;