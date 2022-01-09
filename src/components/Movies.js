import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
function Movies() {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                    <Wrap> 
                        <Link to={'/detail'}>
                            <img src='https://bingeddata.s3.amazonaws.com/uploads/2020/11/bao-1.jpg' />
                        </Link>
                    </Wrap>
                    <Wrap>
                        <Link to={'/detail'}>
                            <img src='https://bingeddata.s3.amazonaws.com/uploads/2020/11/bao-1.jpg' />
                        </Link>
                    </Wrap>
                    <Wrap>
                        <Link to={'/detail'}>
                            <img src='https://bingeddata.s3.amazonaws.com/uploads/2020/11/bao-1.jpg' />
                        </Link>
                    </Wrap>
                    <Wrap>
                        <Link to={'/detail'}>
                            <img src='https://bingeddata.s3.amazonaws.com/uploads/2020/11/bao-1.jpg' />
                        </Link>
                    </Wrap>
                    <Wrap>
                        <Link to={'/detail'}>
                            <img src='https://bingeddata.s3.amazonaws.com/uploads/2020/11/bao-1.jpg' />
                        </Link>
                    </Wrap>
                    <Wrap>
                        <Link to={'/detail'}>
                            <img src='https://bingeddata.s3.amazonaws.com/uploads/2020/11/bao-1.jpg' />
                        </Link>
                    </Wrap>
                    <Wrap>
                        <Link to={'/detail'}>
                            <img src='https://bingeddata.s3.amazonaws.com/uploads/2020/11/bao-1.jpg' />
                        </Link>
                    </Wrap>
                    <Wrap>
                        <Link to={'/detail'}>
                            <img src='https://bingeddata.s3.amazonaws.com/uploads/2020/11/bao-1.jpg' />
                        </Link>
                    </Wrap>
            </Content>
        </Container>
    )
}

export default Movies
const Container = styled.div`
    margin-bottom: 30px;
`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap = styled.div`
    cursor: pointer;
    border-radius: 10px;
    overflow:hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,rgb(0 0 0 / 73%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`