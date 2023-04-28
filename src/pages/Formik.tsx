import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {AppBar, Box, Button, TextField, Toolbar, Typography} from "@mui/material";

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const doc=`
  This page demonstrates how to use forms with Formik.   
`

const Formik=()=>{
    const formik = useFormik({
        initialValues: {
            email: 'bruno@tezine.com',
            password: 'tata',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return <>
        <AppBar position="static">
            <Toolbar variant="dense">
                {/*<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}><MenuIcon /></IconButton>*/}
                <Typography variant="h6" color="inherit" component="div">Formik</Typography>
            </Toolbar>
        </AppBar>
        <Box marginLeft={2} sx={{width:600}}>
            <Typography variant="body1" sx={{whiteSpace:'pre-wrap', marginBottom:1}}>{doc}</Typography>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </Box>
    </>
}
export default Formik
