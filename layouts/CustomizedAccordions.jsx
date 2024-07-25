// import * as React from 'react';
// import {Link} from 'react-router-dom'
// import { styled } from '@mui/material/styles';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// import MuiAccordion from '@mui/material/Accordion';
// import MuiAccordionSummary from '@mui/material/AccordionSummary';
// import MuiAccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';

// import { IoBagOutline } from "react-icons/io5";
// import { RiAccountCircleLine } from "react-icons/ri";
// import { CiWallet } from "react-icons/ci";
// import { CiLocationOn } from "react-icons/ci";

// const Accordion = styled((props) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   '&:not(:last-child)': {
//     borderBottom: 0,
//   },
//   '&::before': {
//     display: 'none',
//   },
// }));

// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === 'dark'
//       ? 'rgba(255, 255, 255, .05)'
//       : 'rgba(0, 0, 0, .03)',
//   flexDirection: 'row-reverse',
//   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//     transform: 'rotate(90deg)',
//   },
//   '& .MuiAccordionSummary-content': {
//     marginLeft: theme.spacing(1),
//   },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
// }));

// export default function CustomizedAccordions() {
//   const [expanded, setExpanded] = React.useState('panel1');

//   const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };

//   return (
//     <div className='flex flex-col gap-10'>
//       <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//         <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
//           <Typography className='flex items-center gap-5'>
//              <h2 className='font-bold text-xl'>Front-end Developer</h2>
//             </Typography>  
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//                 <div className='flex items-center gap-2'>
//                     <div className='h-[20vh] border'>
//                         <img className='h-full' src="https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw" alt="" />
//                     </div>
//                     <div>
//                     <h1>Front-end Developer</h1>
//                     <p>company name</p>
//                     </div>
//                 </div>
//                 <h1 className='font-bold text-xl my-3'>Job description</h1>
//             <div className='responsibilities my-2'>
//                  <h3 className='font-bold text-md'>responsibilities</h3>
//                  Using markup languages like HTML to create user-friendly web pages. <br />
// Maintaining and improving the websites.<br />
// Optimizing applications for maximum speed.<br />
// Designing mobile-based features.<br />
// Collaborating with back-end developers and web designers to improve the usability.<br />
// Getting feedback from, and build solutions for, users and customers.<br />
// Writing functional requirement documents and guides.<br />
// Creating quality mock-ups and prototypes.<br />
// Helping back-end developers with coding and troubleshooting.<br />
// Ensuring high-quality graphic standards and brand consistency.<br />
// Staying up-to-date on emerging technologies.<br />
//             </div>  
//             <div className='requirement my-2'>
//                  <h3 className='font-bold text-md'>requirement and skills:</h3>
//                  Proven work experience as a Front-end developer.<br />
// Hands-on experience with markup languages.<br />
// Experience with JavaScript, CSS, and React.<br />
// Familiarity with browser testing and debugging.<br />
// In-depth understanding of the entire web development process (design, development, and deployment).<br />
// Visualization, Unit Testing, GraphQL & APIs Consumption.<br />
// Knowledge of SEO principles.<br />
// An ability to perform well in a fast-paced environment.<br />
// Excellent analytical and multitasking skills.<br />

//             </div>   
//            <div className="skills-required">
//                 <h3 className='font-bold text-md'>skills required</h3> 
//                  <ul>
//                     <li>HTML</li>
//                     <li>CSS</li>
//                     <li>JavaScript</li>
//                     <li>React</li>
//                  </ul>
//             </div>
//             <div className='year-experience flex flex-col gap-1 my-2'>
//                 <div className='flex gap-2 items-center'>
//                 <IoBagOutline />
//                 <p>0-2 years</p>
//                 </div>
//                 <div className='flex gap-2 items-center'>
//                 <RiAccountCircleLine />
//                  <p>2 vacancy</p>
//                 </div>
//                 <div className='flex gap-2 items-center'>
//                 <CiWallet />
//                 <p>not disclosed</p>
//                 </div>
//                 <div className='flex gap-2 items-center'>
//                 <CiLocationOn />
//                   <p>On-site</p>
//                 </div>
//             </div> 
           
//             <div className='apply-btn my-2'>
//                 <button className='bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-700'>Apply</button>
//             </div>
//             <div className='flex flex-col gap-2 justify-center'>
//                 <h3 className='font-bold text-md'>upgrade your skills</h3>
//                 <Link to="/">Click here</Link>
//             </div>
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }
