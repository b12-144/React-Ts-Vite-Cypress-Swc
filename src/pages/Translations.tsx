import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

const Translations = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        //i18n.
    }, []);

    return <>
        <AppBar position="static">
            <Toolbar variant="dense">
                {/*<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}><MenuIcon /></IconButton>*/}
                <Typography variant="h6" color="inherit" component="div">Translations</Typography>
            </Toolbar>
        </AppBar>
        <Box paddingTop={1} paddingLeft={1}>
            <p>{t('Welcome to React')}</p>
            <p>Forced translation to English:  {t('Tradução está funcionando',{lng:'en'})}</p>
        </Box>
    </>

}
export default Translations
