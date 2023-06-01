import {AppBar, Box, Button, Grid, TextField, Toolbar, Typography} from "@mui/material";
import {FormEvent, useState} from "react";

const doc=`
  This page demonstrates how to use Form.    
`

const Forms=()=>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return <>

        <AppBar position="static">
            <Toolbar variant="dense">
                {/*<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}><MenuIcon /></IconButton>*/}
                <Typography variant="h6" color="inherit" component="div">Forms</Typography>
            </Toolbar>
        </AppBar>
        <form onSubmit={(ev)=>onSubmitClicked(ev)}>
            <Grid container spacing={2} sx={{ml: 2, width: 600}}>
                <Grid item xs={12}>
                    <Typography variant="body1" sx={{whiteSpace:'pre-wrap', marginBottom:1}}>{doc}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Name" variant="outlined" size="small" fullWidth={true} onChange={(ev) => setName(ev.target.value)}/>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="E-mail" variant="outlined" size="small" fullWidth={true} onChange={(ev) => setEmail(ev.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end">
                        <Button type="submit">Submit</Button>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="caption">{`Name: ${name}, email: ${email}`}</Typography>
                </Grid>
            </Grid>
        </form>
    </>

    function onSubmitClicked(ev:FormEvent) {
        alert(`Name: ${name}, email: ${email}`);
        ev.preventDefault();//to avoid clearing the textfields after submit
    }    
}

export default Forms
