import { AppBar, Toolbar, Typography, Box, Paper } from "@mui/material"
import { useState, useEffect } from "react"
import { DateTime } from "../codes/DateTime"

const Dates = () => {

    const [toString, setToString] = useState('')
    const [dateMath, setDateMath] = useState('')
    const [timeMath, setTimeMath] = useState('')
    const [dateInfo, setDateInfo] = useState('')
    const [timeInfo, setTimeInfo] = useState('')    

    useEffect(() => {
        buildToString();
        buildDateMaths();
        buildTimeMaths();
        buildDateInfo();
        buildTimeInfo();
    }, []);

    return <>
        <AppBar position="static">
            <Toolbar variant="dense">
                {/*<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}><MenuIcon /></IconButton>*/}
                <Typography variant="h6" color="inherit" component="div">Date</Typography>
            </Toolbar>
        </AppBar>
        <Box padding={2}>
            <Typography variant="h6">To String</Typography>
            <Paper className="paper" sx={{backgroundColor:'#F5F2F0'}} elevation={0}>
                <Typography variant="caption" style={{whiteSpace: 'pre-line'}}>{toString}</Typography>
            </Paper>
            <Typography variant="h6">Date math</Typography>
            <Paper className="paper" sx={{backgroundColor:'#F5F2F0'}} elevation={0}>
                <Typography variant="caption" style={{whiteSpace: 'pre-wrap'}}>{dateMath}</Typography>
            </Paper>
            <Typography variant="h6">Time math</Typography>
            <Paper className="paper" sx={{backgroundColor:'#F5F2F0'}} elevation={0}>
                <Typography variant="caption" style={{whiteSpace: 'pre-wrap'}}>{timeMath}</Typography>
            </Paper>
            <Typography variant="h6">Date info</Typography>
            <Paper className="paper" sx={{backgroundColor:'#F5F2F0'}} elevation={0}>
                <Typography variant="caption" style={{whiteSpace: 'pre-wrap'}}>{dateInfo}</Typography>
            </Paper>
            <Typography variant="h6">Time info</Typography>
            <Paper className="paper" sx={{backgroundColor:'#F5F2F0'}} elevation={0}>
                <Typography variant="caption" style={{whiteSpace: 'pre-wrap'}}>{timeInfo}</Typography>
            </Paper>
        </Box>
    </>

    function buildToString() {
        let now = DateTime.now;
        let result = '\n';
        //DateTime to string
        result += printSubSection('DateTime to string', false);
        result += print('DateTime.now.toLongDateTimeString()', now.toLongDateTimeString());
        result += print('DateTime.now.toShortDateTimeString()', now.toShortDateTimeString());
        result += print("DateTime.now.toFormat('dd/MM/yyyy  hh:mm:ss')", DateTime.now.toFormat('dd/MM/yyyy hh:mm:ss'));
        //Date to string
        result += printSubSection('\nDate to string');
        result += print('DateTime.now.toLongDateString()', now.toLongDateString());
        result += print('DateTime.now.toShortDateString()', now.toShortDateString());
        //Time to string
        result += printSubSection('\nTime to string');
        result += print('DateTime.now.toLongTimeString()', now.toLongTimeString());
        result += print('DateTime.now.toShortTimeString()', now.toShortTimeString());
        //To iso
        result += printSubSection('\nTo iso');
        result += print('DateTime.now.toISO()', now.toISO());
        result += print('DateTime.now.toISODate()', now.toISODate());
        //To utc time
        result += printSubSection('\nTo utc time');
        result += print('DateTime.utcNow.toShortTimeString()', DateTime.utcNow.toShortTimeString());
        result += print('DateTime.now.toUTC().toShortTimeString()', now.toUTC().toShortTimeString());
        setToString(result);
    }

    function buildDateMaths() {
        let result = '';
        result += print('DateTime.now.addDays(1).toShortDateString()', DateTime.now.addDays(1).toShortDateString());
        result += print('DateTime.now.addMonths(1).toShortDateString()', DateTime.now.addMonths(1).toShortDateString());
        result += print('DateTime.now.addYears(1).toShortDateString()', DateTime.now.addYears(1).toShortDateString());
        setDateMath(result);
    }

    function buildTimeMaths() {
        let result = '';
        result+=print('DateTime.now.addHours(1).toLongTimeString()', DateTime.now.addHours(1).toLongTimeString());
        result+=print('DateTime.now.addMinutes(1).toLongTimeString()', DateTime.now.addMinutes(1).toLongTimeString());
        result+=print('DateTime.now.addSeconds(1).toLongTimeString()', DateTime.now.addSeconds(1).toLongTimeString());
        result+=print('DateTime.now.addMilliseconds(12000).toLongTimeString()', DateTime.now.addMilliseconds(12000).toLongTimeString());//todo nao funciona
        setTimeMath(result);
    }

    function buildDateInfo() {
        let result='';
        //Basic info
        result+=printSubSection('\nBasic info', false);
        result+=print( 'DateTime.today.toISO()', DateTime.today.toISO());//todo remover o offset
        result+=print( 'DateTime.now.date.toLongDateString()', DateTime.now.date.toLongDateString());
        result+=print( 'DateTime.now.date.toShortDateString()', DateTime.now.date.toShortDateString());
        result+=print( "DateTime.now.date.toFormat('dd/MM/yyyy')", DateTime.now.date.toFormat('dd/MM/yyyy'));

        //Day info
        result+=printSubSection('\nDay info');
        result+=print( 'DateTime.today.day', DateTime.today.day);
        result+=print( 'DateTime.today.dayOfYear', DateTime.today.dayOfYear);//todo ver
        result+=print( 'DateTime.today.dayOfWeek', DateTime.today.dayOfWeek);
        result+=print( 'DateTime.today.daysInYear', DateTime.today.daysInYear);
        result+=print( 'DateTime.today.remainingDaysInYear', DateTime.today.remainingDaysInYear);
        result+=print( 'DateTime.today.remainingDaysInMonth', DateTime.today.remainingDaysInMonth);
        result+=print( 'DateTime.today.remainingDaysInWeek', DateTime.today.remainingDaysInWeek);
        result+=print( 'DateTime.today.startOfDay.toShortDateTimeString()', DateTime.today.startOfDay.toShortDateTimeString());
        result+=print( 'DateTime.today.endOfDay.toShortDateTimeString()', DateTime.today.endOfDay.toShortDateTimeString());

        //Week info
        result+=printSubSection('\nWeek info');
        result+=print( 'DateTime.today.weekDayLong', DateTime.today.weekDayLong);
        result+=print( 'DateTime.today.weekDayShort', DateTime.today.weekDayShort);//todo remover o ponto
        result+=print( 'DateTime.today.weekOfYear', DateTime.today.weekOfYear);
        result+=print( 'DateTime.today.abbreviatedWeekDayNames', DateTime.abbreviatedWeekDayNames + '');
        result+=print( 'DateTime.today.startOfWeek.toShortDateString()', DateTime.today.startOfWeek.toShortDateString());
        result+=print( 'DateTime.today.endOfWeek.toShortDateString()', DateTime.today.endOfWeek.toShortDateString());

        //Month info
        result+=printSubSection('\nMonth info');
        result+=print( 'DateTime.today.month', DateTime.today.month);
        result+=print( 'DateTime.today.monthNameLong', DateTime.today.monthNameLong);
        result+=print( 'DateTime.today.monthNameShort', DateTime.today.monthNameShort);//todo remover o ponto
        result+=print( 'DateTime.today.daysInMonth', DateTime.today.daysInMonth);
        result+=print( 'DateTime.today.startOfMonth.toShortDateString()', DateTime.today.startOfMonth.toShortDateString());
        result+=print( 'DateTime.today.endOfMonth.toShortDateString()', DateTime.today.endOfMonth.toShortDateString());

        //Year info
        result+=printSubSection('\nYear info');
        result+=print( 'DateTime.today.year', DateTime.today.year);
        result+=print( 'DateTime.today.startOfYear.toShortDateString()', DateTime.today.startOfYear.toShortDateString());
        result+=print( 'DateTime.today.endOfYear.toShortDateString()', DateTime.today.endOfYear.toShortDateString());

        result+=print( 'DateTime.today.isLeapYear', DateTime.today.isLeapYear);
        setDateInfo(result);
    }

    function buildTimeInfo() {
        let result='';
        result+=print('DateTime.now.toShortTimeString()', DateTime.now.toShortTimeString());
        result+=print( 'DateTime.now.timeOfDay.toString()', DateTime.now.timeOfDay.toString());
        result+=print( 'DateTime.now.hour', DateTime.now.hour);
        result+=print( 'DateTime.now.minute', DateTime.now.minute);
        result+=print( 'DateTime.now.second', DateTime.now.second);
        result+=print( 'DateTime.now.millisecond', DateTime.now.millisecond);
        setTimeInfo(result);
    }

    function print(title: string, content: string | number | boolean): string {
        //let prismContent=`<pre style="margin: unset; padding: unset"><code class="language-typescript">${title}</code>: <a style="color: ${Shared.blueTextColor}">${content}</a></pre>`;
        return `\n${title}: ${content}`
    }

    function printSubSection(title: string, addNewLineBefore = true): string {
        let txt = addNewLineBefore ? `\n${title.toUpperCase()}` : `${title.toUpperCase()}`
        return txt;
    }
}
export default Dates
