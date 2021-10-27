import React from 'react'
import SearchAppBar from "../../Components/Navbar"
import StandardImageList from "../../Components/Gallery"
import Container from '@mui/material/Container';



const Home = (props) => {
    return (
        <>
            <SearchAppBar />
            <br />
            <Container maxWidth="xl">
                <StandardImageList cols={props.cols}/>
            </Container>
        </>
    )
}

export default Home
