import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListIcon from '@material-ui/icons/List';
import ScannerIcon from '@material-ui/icons/Scanner';
import PanToolIcon from '@material-ui/icons/PanTool';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import ContactsIcon from '@material-ui/icons/Contacts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HelpIcon from '@material-ui/icons/Help';
// import MenuOpenIcon from '@material-ui/icons/MenuOpen';



export const SidebarData = [
    // {
    //     title: "3dTrust powder",
    //     path: '/',
    //     icon: <MenuOpenIcon />,
    //     cName: 'nav-text'
    // },
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        path: "/dashboard",
        cName: 'nav-text'
    },
    {
        title: "Inventory",
        icon: <ListIcon />,
        path: "/inventory",
        cName: 'nav-text'
    },
    {
        title: "Machines",
        icon: <ScannerIcon />,
        path: "/machines",
        cName: 'nav-text'
    },
    {
        title: "Operations",
        icon: <PanToolIcon />,
        path: "/operation",
        cName: 'nav-text'
    },
    {
        title: "Materials",
        icon: <ScatterPlotIcon />,
        path: "/materials",
        cName: 'nav-text'
    },
    {
        title: "Users",
        icon: <ContactsIcon />,
        path: "/users",
        cName: 'nav-text'
    },
    {
        title: "Logout",
        icon: <ExitToAppIcon />,
        path: "/logout",
        cName: 'nav-text'
    },
    {
        title: "About",
        icon: <HelpIcon />,
        path: "/about",
        cName: 'nav-text'
    },
];