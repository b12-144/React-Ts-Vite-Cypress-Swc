import {Employee, ServerAPI} from "../codes/ServerAPI";
import {useEffect, useState} from "react";
import {AppBar, Box, IconButton, LinearProgress, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const serverApi = new ServerAPI()

const ServerRequests = () => {

    const [employees, setEmployees] = useState<Employee[]>([]);
    const [isLoading, setLoading]=useState(false)

    useEffect(() => {
        const getEmployees = async () => {
            setLoading(true);
            let result = await serverApi.getEmployees();
            setLoading(false);
            setEmployees(result.data)
        }
        getEmployees().catch(console.error);
    }, []);

    return <div>
        <AppBar position="static">
            <Toolbar variant="dense">
                {/*<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}><MenuIcon /></IconButton>*/}
                <Typography variant="h6" color="inherit" component="div">Server Requests</Typography>
            </Toolbar>
        </AppBar>
        {isLoading && <LinearProgress />}
        <Box padding={2}>
            <Typography variant="body1" marginBottom={2}>This page demonstrates how to retrieve data from a Server.  </Typography>
            {employees.map((employee, index) => (
                <Typography variant="body2" key={index}>{employee.employee_name}</Typography>
            ))}
        </Box>
    </div>
}
export default ServerRequests