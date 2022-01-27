import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
import { IoIosAddCircle } from "react-icons/io";
import { positions } from "@mui/system";


const Page = () => {

    let navigate = useNavigate();
    const inputs = useSelector((state) => state.dic.inputs);


    return (
        <Container>
            <Title>My Dictionary</Title>
            <Line />
            <ListStyle>
                {inputs.map((input, i) => {
                    console.log(i)
                    return (
                        <Input>
                            <div key={i}>
                                <p>단어</p>
                                <h2>{input.word}</h2>
                                <p>설명</p>
                                <h2>{input.explain}</h2>
                                <p>예시</p>
                                <h2 style={style.blue}>{input.example}</h2>
                            </div>
                        </Input>
                    );
                })} 
            
            </ListStyle>
            <IoIosAddCircle style={style.right} size={50} color="purple"
             onClick={() => { navigate("/addpage"); }}/>
        </Container>

    );
};


const Input = styled.div`
  max-width: "100%",
  min-height: 20vh;
  background-color: #E6E6FA;
  padding: 5px;
  margin: 5px 10px;
  display: flex;
  & > * {
    padding : 10px;
  }
`;

const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 50vh;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 50vh;
`;
const style = {
    blue: {
        color: "blue",
    },
    right: {
        marginTop: "-60px",
        marginRight: "32px",
        width: "50px",
        height: "50px",
        float: "right",
        position: "relative"
        
    }
}
const Container = styled.div`
    max-width: 350px;
    min-height: 60vh;
    background-color: #FFFAFA;
    padding: 16px;
    margin: 100px auto;
    border-radius: 5px;
    border: 1px solid #D8BFD8;
    flex-direction: column;
    `;

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

const ItemStyle = styled.div`
    padding: 16px;
    margin: 8px;
    background-color: aliceblue;
    line-height: 30px
    `;

export default Page;