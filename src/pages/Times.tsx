import {AppBar, Box, Paper, Toolbar, Typography} from "@mui/material";
import './Times.css'
import {TimeSpan} from "../codes/TimeSpan";
import {useEffect, useState} from "react";

const Times=()=>{

    const [fromString,setFromString]=useState('');
    const [toString,setToString]=useState('');
    const [info,setInfo]=useState('');
    const [math,setMath]=useState('');    

    useEffect(() => {
        buildFromString(); 
        buildToString();
        buildTimeSpanInfo();
        buildMaths();
    }, []);

    return <>
        <AppBar position="static">
            <Toolbar variant="dense">
                {/*<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}><MenuIcon /></IconButton>*/}
                <Typography variant="h6" color="inherit" component="div">TimeSpan</Typography>
            </Toolbar>
        </AppBar>
        <Box padding={2}>
            <Typography variant="h6">From string</Typography>
            <Paper className="paper" sx={{backgroundColor:'#F5F2F0'}} elevation={0}>
                <Typography variant="caption" style={{whiteSpace: 'pre-line'}}>{fromString}</Typography>
            </Paper>
            <Typography variant="h6">To string</Typography>
            <Paper className="paper" sx={{backgroundColor:'#F5F2F0'}} elevation={0}>
                <Typography variant="caption" style={{whiteSpace: 'pre-wrap'}}>{toString}</Typography>
            </Paper>
            <Typography variant="h6">TimeSpan info</Typography>
            <Paper className="paper" sx={{backgroundColor:'#F5F2F0'}} elevation={0}>
                <Typography variant="caption" style={{whiteSpace: 'pre-wrap'}}>{info}</Typography>
            </Paper>
            <Typography variant="h6">Math</Typography>
            <Paper className="paper" sx={{backgroundColor:'#F5F2F0'}} elevation={0}>
                <Typography variant="caption" style={{whiteSpace: 'pre-wrap'}}>{math}</Typography>
            </Paper>
        </Box>
    </>

    function buildFromString() {
        let result='';
        result+=print( "TimeSpan.fromString('12:22').hours", TimeSpan.fromString('12:22').hours);
        result+=print( 'TimeSpan.fromDays(2).days', TimeSpan.fromDays(2).days);
        result+=print( 'TimeSpan.fromHours(2).hours', TimeSpan.fromHours(2).hours);
        result+=print( 'TimeSpan.fromMinutes(2).minutes', TimeSpan.fromMinutes(2).minutes);
        setFromString(result);
    }

    function buildToString() {
        let result='';
        result+=printText('let time=new TimeSpan(0,14,22,0);');
        let time = new TimeSpan(0, 14, 22, 0);
        result+=print( 'time.toString()', time.toString());
        result+=print( 'time.toString(true)//true=amPM', time.toString(true));
        setToString(result);
    }

    function buildTimeSpanInfo() {
        let result='';
        result+=print( 'TimeSpan.now.toString()', TimeSpan.now.toString());
        result+=print( 'TimeSpan.now.days', TimeSpan.now.days);
        result+=print( 'TimeSpan.now.hours', TimeSpan.now.hours);
        result+=print( 'TimeSpan.now.minutes', TimeSpan.now.minutes);
        result+=print( 'TimeSpan.now.seconds', TimeSpan.now.seconds);
        result+=print( 'TimeSpan.now.milliseconds', TimeSpan.now.milliseconds);

        result+=printText( '');
        result+=printText('let time=new TimeSpan(2,12,0,0);');
        let time = new TimeSpan(2, 12, 0, 0);
        result+=print( 'time.totalDays', time.totalDays);
        result+=print( 'time.totalHours', time.totalHours);
        result+=print( 'time.totalMinutes', time.totalMinutes);
        result+=print( 'time.totalSeconds', time.totalSeconds);
        result+=print( 'time.totalMilliseconds', time.totalMilliseconds);
        setInfo(result);
    }

    function buildMaths() {
        //add
        let result='';
        result+=printSubSection('\nadd', false);
        result+=printText('let time1=new TimeSpan(0,2,0,0);');
        result+=printText('let time2=new TimeSpan(0,2,0,0);');
        let time1 = new TimeSpan(0, 2, 0, 0);
        let time2 = new TimeSpan(0, 2, 0, 0);
        result+=print( 'time1.add(time2).hours', time1.add(time2).hours);

        //subtract
        result+=printSubSection('\nsubtract');
        result+=printText('let time1=new TimeSpan(0,4,0,0);');
        result+=printText('let time2=new TimeSpan(0,2,0,0);');
        time1 = new TimeSpan(0, 4, 0, 0);
        result+=print( 'time1.subtract(time2).hours', time1.subtract(time2).hours);

        //multiply
        result+=printSubSection( '\nmultiply');
        result+=printText('let time1=new TimeSpan(0,2,0,0);');
        time1 = new TimeSpan(0, 2, 0, 0);
        result+=print( 'time1.multiply(2).hours', time1.multiply(2).hours);

        //divide
        result+=printSubSection( '\ndivide');
        result+=printText( 'let time1=new TimeSpan(0,4,0,0);');
        result+=printText( 'let time2=new TimeSpan(0,2,0,0);');
        time1 = new TimeSpan(0, 4, 0, 0);
        result+=print( 'time1.divide(2).hours', time1.divide(2).hours);

        //equals
        result+=printSubSection('\nequals');
        time1 = new TimeSpan(0, 4, 0, 0);
        time2 = new TimeSpan(0, 4, 0, 0);
        result+=print( 'time1.equals(time2)', time1.equals(time2));
        setMath(result);
    }

    function print(title: string, content: string | number | boolean): string {
        return `\n${title}: ${content}`
    }

    function printText(content: string | number | boolean): string {
        return `\n${content}`
    }

    function printSubSection(title: string, addNewLineBefore = true): string {
        return addNewLineBefore ? `\n${title.toUpperCase()}` : `${title.toUpperCase()}`;
    }
}

export default Times
