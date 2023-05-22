import { Drawer, Toolbar, Divider, List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../enums/AppEnums";
import Globals from "../codes/Globals";
import MenuItem from "../interfaces/MenuItem"

const MenuItems: MenuItem[] = [
    { title: 'ApolloClient', route: AppRoutes.apolloclient },
    { title: 'ApolloClientTyped', route: AppRoutes.apolloclientTyped },
    { title: 'Conditional Rendering', route: AppRoutes.conditional },
    { title: 'Date', route: AppRoutes.dates },
    { title: 'Emotion', route: AppRoutes.emotion },
    { title: 'Formik', route: AppRoutes.formik },
    { title: 'Forms', route: AppRoutes.forms },
    { title: 'Hooks', route: AppRoutes.hooks },
    { title: 'HooksSameParent', route: AppRoutes.hooksSameParent },
    { title: 'Lists', route: AppRoutes.lists },
    { title: 'Lottie', route: AppRoutes.lottiePage },
    { title: 'Props', route: AppRoutes.props },
    { title: 'Redux', route: AppRoutes.redux },
    { title: 'Sass', route: AppRoutes.sass },
    { title: 'Server Requests', route: AppRoutes.serverRequests },
    { title: 'Styles', route: AppRoutes.stylesPage },
    { title: 'TailWindCSS', route: AppRoutes.tailWindCSS },
    { title: 'TimeSpan', route: AppRoutes.times },
    { title: 'Typescript', route: AppRoutes.typescriptPage },
    { title: 'Translations', route: AppRoutes.translations },
    { title: 'Urql', route: AppRoutes.urql },
]

const LeftDrawer = () => {
    let navigate = useNavigate();

    return <Drawer
        sx={{
            width: Globals.drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: Globals.drawerWidth,
                boxSizing: 'border-box',
            },
        }}
        variant="permanent"
        anchor="left"
    >
        <Toolbar />
        <Divider />
        <List>
            {MenuItems.map((item, index) => (
                <ListItemButton key={item.title} onClick={() => navigate(item.route)}>
                    {/* <ListItemIcon>
                    <Icon>{item.icon}</Icon>
                    </ListItemIcon> */}
                    <ListItemText primary={item.title} />
                </ListItemButton>
            ))}
        </List>
    </Drawer>
}

export default LeftDrawer