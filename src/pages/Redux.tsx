import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {AppBar, Box, Button, Container, Grid, Paper, Toolbar, Typography} from "@mui/material";
import {actionCreators, State} from '../redux';
import './Redux.css';

const doc=`
  This page demonstrates how to use Redux. Use the flow below:  
  1. Add useDispatch in the page where you want to use Redux.
  2. Bind the action creators used by the page.
  3. Set the selector being consumed. 
`

const Redux = () => {
    const dispatch = useDispatch();
    const {depositMoney, withdrawMoney, bankrupt} = bindActionCreators(actionCreators, dispatch)
    const amount = useSelector((state: State) => state.bank)

    return <>
        <AppBar position="static">
            <Toolbar variant="dense">
                {/*<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}><MenuIcon /></IconButton>*/}
                <Typography variant="h6" color="inherit" component="div">Redux</Typography>
            </Toolbar>
        </AppBar>
        <Box  marginLeft={2}>
            <Typography variant="body1" sx={{whiteSpace:'pre-wrap', marginBottom:1}}>{doc}</Typography>
            <Grid container sx={{width:600}}>
                <Grid item xs={4}>
                    <Button onClick={() => depositMoney(1000)} fullWidth={true}>Deposit</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={() => withdrawMoney(500)} fullWidth={true}>Withdraw</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={() => bankrupt()} fullWidth={true}>Bankrupt</Button>
                </Grid>
                <Grid item xs={12} marginTop={2}>
                    <Box display="flex" justifyContent="center">
                        <Paper className="result">
                            <h1>{amount}</h1>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>
}
export default Redux