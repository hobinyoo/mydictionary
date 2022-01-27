import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"

const Page = () => {
    
    let navigate = useNavigate();
    const inputs = useSelector((state) => state.dic.inputs);
 

    return (
        <Container>
            <Title>My Dictionary</Title>
            <Line />
            {inputs.map((input, i) => {
                console.log(i)
                return (
                    <div key={i}>
                    <h1>단어</h1>
                    <p>{input.word}</p>
                    <h1>설명</h1>
                    <p>{input.explain}</p>
                    <h1>예시</h1>
                    <p style={style.blue}>{input.example}</p>
                    </div>
                );
            })}
           
            <ItemStyle>
                <div onClick={() => { navigate("/addpage"); }}>눌러봐</div>
            </ItemStyle>

        </Container>

    );
};

const style = {
    
    blue: {
        color: "blue",
    }
}
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

// const ListStyle = styled.div`
//     display: flex;
//     flex-direction: column;
//     height: 100%;
//     overflow-x: hidden;
//     overflow-y: auto;
//     `;

const ItemStyle = styled.div`
    padding: 16px;
    margin: 8px;
    background-color: aliceblue;
    line-height: 30px
    `;

export default Page;