import React from 'react'
import Button from '@mui/material/Button'
import Card from '../components/Card'
import { Container } from '@mui/material'
const Home = () => {
  return (
    <>
    {/* <div className="w-screen h-screen flex justify-center items-center"> */}
    <Container sx={{
        boxShadow: '5'
    }}>
    <Button sx={{
      fontStyle:"italic",
      color: "black",
      bgcolor: ''
    }} variant="contained">Hello World</Button>
    <Card />
    </Container>
    {/* </div> */}
    </>
  )
}

export default Home