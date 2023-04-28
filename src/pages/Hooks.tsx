import {DateTime} from "../codes/DateTime";
import {AppBar, Box, Button, Container, Grid, TextField, Toolbar, Typography} from "@mui/material";
import {useState} from "react";
import {formatPostalCode} from "../masks/postalCodeMask";

const Hooks = () => {

    const [name, setName] = useState('');
    const [postalCode, setPostalCode] = useState('');

    return <>
        <AppBar position="static">
            <Toolbar variant="dense">
                {/*<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}><MenuIcon /></IconButton>*/}
                <Typography variant="h6" color="inherit" component="div">Hooks</Typography>
            </Toolbar>
        </AppBar>

        <Grid container spacing={2} sx={{mt: 1, ml: 2, width: 600}}>
            <Grid item xs={12}>
                <Typography variant="body1">This page demonstrates useState to store and retrieve values.  </Typography>
                <Typography variant="body1">Type a name and email and click on Submit to see the values typed.  </Typography>
            </Grid>
            <Grid item xs={6}>
                <TextField inputProps={{ "data-testid": "txtName" }} label="Name" variant="outlined" size="small" fullWidth={true} onChange={(ev) => setName(ev.target.value)}/>
            </Grid>
            <Grid item xs={6}>
                <TextField label="Postal Code" variant="outlined" size="small" helperText="text is formatted using formatPostalCode mask"
                           value={postalCode}
                           fullWidth={true} onChange={(ev) =>setPostalCode(formatPostalCode(ev.target.value))}/>
            </Grid>
            <Grid item xs={12}>
                <Box display="flex" justifyContent="flex-end">
                    <Button data-testid="btnSubmit" onClick={() => onSubmitClicked()}>Submit</Button>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Typography data-testid="result" variant="caption">{`Name: ${name}, email: ${postalCode}`}</Typography>
            </Grid>
        </Grid>
    </>

    function onSubmitClicked() {
        alert(`Name: ${name}, email: ${postalCode}`);
    }
}

export default Hooks
