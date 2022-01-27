import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Page = () => {
    let navigate = useNavigate();

    return (
        <Container>
            <Title>My Dictionary</Title>
            <Line />
            <p>단어</p>
            <h1>히히</h1>
            <p>설명</p>
            <h1>히히를 변형한 단어</h1>
            <h1>숫자 1을 "1로 쓴다"</h1>
            <p>예시</p>
            <p>저 친구가 초콜릿을 줬어</p>
            <ItemStyle>
                <div onClick={() => { navigate("/addpage"); }}>눌러봐</div>
            </ItemStyle>

        </Container>

    );
};



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

const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    `;

const ItemStyle = styled.div`
    padding: 16px;
    margin: 8px;
    background-color: aliceblue;
    line-height: 30px
    `;

export default Page;