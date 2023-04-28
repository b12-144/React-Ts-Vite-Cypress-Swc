import {AppBar, Toolbar, Typography} from "@mui/material";
import styled from "@emotion/styled";

const doc=`
  This page demonstrates how to use Emotion.   
`

const Emotion = () => {
    return <>
        <AppBar position="static">
            <Toolbar variant="dense">
                {/*<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}><MenuIcon /></IconButton>*/}
                <Typography variant="h6" color="inherit" component="div">Emotion</Typography>
            </Toolbar>
        </AppBar>
        <Typography variant="body1" sx={{whiteSpace:'pre-wrap', marginBottom:1}}>{doc}</Typography>
        <TopContainer>
            <BlueContainer/>
            <GreenContainer/>
            <YellowContainer/>
            <BrowContainer/>
        </TopContainer>
    </>
}


const TopContainer = styled.div`
  display: flex;
  margin-left: 15px;
  background-color: white;
  height: 150px;
  width: 900px;
  border: lightgray 1px solid;
`

const BlueContainer= styled.div`
  background-color: rgb(33, 150, 243);
  height: 150px;
  width: 100%;
`

const GreenContainer = styled.div`
  background-color: rgb(30, 200, 165);
  height: 150px;
  width: 100%;
`

const YellowContainer= styled.div`
  background-color: rgb(255, 152, 0);
  height: 150px;
  width: 100%;
`

const BrowContainer= styled.div`
  background-color:  rgb(141, 110, 99);
  height: 150px;
  width: 100%;
`

export default Emotion
