// import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
// import List from '@mui/material/List';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import CustomizedAccordions from './CustomizedAccordions';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import CssBaseline from "@mui/material/CssBaseline";
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
// import { IoSearch } from "react-icons/io5";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import AOS  from "aos";
// import  "aos/dist/aos.css";
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import StudentProfile from "../pages/StudentProfile";
import { BiHomeAlt } from "react-icons/bi";
import Tooltip from '@mui/material/Tooltip';

const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    /**
     * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
     * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
     * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
     * proper interaction with the underlying content.
     */
    position: "relative",
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function Profile() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const jobList = [
  //   {jobTitle : "Web developer" , companyName : "jio" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Data Science" , companyName : "Amazon" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  // ]
  const [data, setData] = useState();
  const [courseData, setCourseData] = useState(null);
  const [searchInput, setSearchInput] = useState();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/Job")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (item) => {
    setCourseData(item);
  };
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCourseData(filteredData.length > 0 ? filteredData[0] : null);
  };

  const navigate = useNavigate();
  let handleReadMore = (contentItem, el) => {
    navigate("/ReadMoreCourseDetails", { state: { contentItem, el } });
  };
   

  const location = useLocation();
   const { state: resumeData } = location;
  //  const resumeData = location.state?.resumeData
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text(`Full Name: ${resumeData.fullName}`, 10, 10);
    doc.text(`Email: ${resumeData.email}`, 10, 20);
    doc.text(`Mobile: ${resumeData.mobile}`, 10, 30);
    doc.text(`Address: ${resumeData.address}`, 10, 40);
    doc.text(`Summary: ${resumeData.summary}`, 10, 50);
    resumeData.education.forEach((edu, index) => {
      doc.text(`Education ${index + 1}:`, 10, 60 + index * 30);
      doc.text(`Degree: ${edu.degree}`, 10, 70 + index * 30);
      doc.text(`Branch: ${edu.branch}`, 10, 80 + index * 30);
      doc.text(`CGPA: ${edu.cgpa}`, 10, 90 + index * 30);
      doc.text(`University: ${edu.university}`, 10, 100 + index * 30);
      doc.text(`Start Date: ${edu.startDate}`, 10, 110 + index * 30);
      if (edu.currentlyPursuing) {
        doc.text(`Currently Pursuing`, 10, 120 + index * 30);
      } else {
        doc.text(`End Date: ${edu.endDate}`, 10, 120 + index * 30);
      }
    });
    doc.text(`Experience: ${resumeData.experience}`, 10, 130 + resumeData.education.length * 30);
    doc.text(`Skills: ${resumeData.skills}`, 10, 140 + resumeData.education.length * 30);
    doc.text(`Achievement: ${resumeData.achievement}`, 10, 150 + resumeData.education.length * 30);
    doc.text(`Cover Letter: ${resumeData.coverLetter}`, 10, 160 + resumeData.education.length * 30);

    doc.save('resume.pdf');
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography className="flex items-center justify-between px-4 " variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Company Name with Logo
            {/* <Link to='/'><BiHomeAlt /> </Link> */}
            <Tooltip title="Home">
                  <IconButton aria-label="Home" className="text-white">
                    <Link to='/'>< BiHomeAlt size={24} className="text-white"/></Link>
                  </IconButton>
                </Tooltip>         
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
           
            <Tooltip title="Profile">
                  <IconButton aria-label="profile" >
                  <MenuIcon className="text-white"/>
                  </IconButton>
                </Tooltip> 
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
       <StudentProfile/>
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div>
         {/* {
          resumeData.map((fieldData , index) =>(
            <div key={index}>
              <div>
                <h1>{fieldData.fullName}</h1>
              </div>
            </div>
          ))
         } */}
        </div>
        <div className="flex items-center flex-col gap-2">
        <button onClick={downloadPDF}>Download Resume as PDF</button>
          <Link to='/DashBoard'>Report</Link>
        </div>
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <Divider />
        <div>
          <div>
            <h3>Status</h3>
          </div>
        </div>
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </Box>
  );
}
