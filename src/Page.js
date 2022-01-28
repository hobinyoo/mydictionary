import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { updateDic, deleteDic } from "./redux/modules/dic";

const Page = () => {
  
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const inputs = useSelector((state) => state.dic.inputs);
   

    return (
        <>
            <Title>My Dictionary</Title>
            <IoIosAddCircle style={style.right} size={50} color="purple"
                onClick={() => { navigate("/addpage"); }} />
            <Line />
            <ListStyle>
                {inputs.map((input, index) => {
                    return (
                        <Input key={index} completed={input.completed}>
                            <p>단어</p>
                            <h2>{input.word}</h2>
                            <p>뜻</p>
                            <h2>{input.mean}</h2>
                            <p>설명</p>
                            <h2>{input.explain}</h2>
                            <p>예시</p>
                            <h2 style={style.blue}>{input.example}</h2>
                            <p>비슷한단어</p>
                            <h2 style={style.blue}>{input.same}</h2>
                            <button onClick={() => {
                                dispatch(updateDic(index));
                            }}>완료</button>
                            <button onClick={() => {
                                 navigate("/detailpage"+index);
                            }}>수정</button>
                            <button onClick={() => {
                                dispatch(deleteDic(index));
                            }}>삭제</button>
                        </Input>

                    );
                })}
            </ListStyle>
        </>

    );
};


// props는 Input의 props를 넘겨주는 것! 자바스크립트를 쓰려면 ${}를 넣어줘야함
const Input = styled.div`
  max-width: "100%",
  min-height: 20vh;
  background-color: ${(props) => (props.completed ? "#673ab7" : "#E6E6FA")};
  padding: 5px;
  margin: 5px 10px;
  & > * {
    padding : 10px;
  }
`;

const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
`;
const style = {
    blue: {
        color: "blue",
    },
    right: {
        width: "50px",
        height: "50px",
        float: "right",
        position: "relative"
    }
}
// const Container = styled.div`
//     max-width: 350px;
//     min-height: 60vh;
//     background-color: #FFFAFA;
//     padding: 16px;
//     margin: 100px auto;
//     border-radius: 5px;
//     border: 1px solid #D8BFD8;
//     flex-direction: column;
//     `;

const Title = styled.h1`
    color: slateblue;
    text-align: center;
    `;

const Line = styled.hr`
    margin: 16px 10px;
    border: 2px dotted #ddd;
    `;

// const ListStyle = styled.div`
//     display: flex;
//     flex-direction: column;
//     height: 100%;
//     overflow-x: hidden;
//     overflow-y: auto;
//     `;

// const ItemStyle = styled.div`
//     padding: 16px;
//     margin: 8px;
//     background-color: aliceblue;
//     line-height: 30px
//     `;

export default Page;