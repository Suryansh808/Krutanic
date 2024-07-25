// import * as React from 'react';
// import { Link } from 'react-router-dom';
// // import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// // import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import BasicPie from '../Components/BasicPie';
// import BasicBars from '../Components/BasicBar';
// import { CgProfile } from "react-icons/cg";
// //import * as React from 'react';
// //import DeleteIcon from '@mui/icons-material/Delete';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';




// // const Item = styled(Paper)(({ theme }) => ({
// //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
// //   ...theme.typography.body2,
// //   padding: theme.spacing(1),
// //   textAlign: 'center',
// //   color: theme.palette.text.secondary,
// // }));

// export default function BasicGrid() {
//    // const { state: formData } = useLocation();
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2} className='p-2 max-[600px]:grid-cols-2 auto-cols-max'>
//         <Grid item xs={6} className='h-[50vh] border-2 rounded-md flex items-center justify-center'>
//             <div>
              
//               <div className='mt-11 flex flex-col items-center justify-center'>
//               <h2>Resume Bar stats </h2>
              
//                 <BasicBars/>
//                </div>
           
//              </div>
//         </Grid>
//         <Grid item xs={6} className='border-2 rounded-md'>
//         <div className= 'text-3xl w-full flex flex-col items-end'>
//         <Tooltip title="Profile">
//       <IconButton>
//        <Link to='/Profile'><CgProfile /></Link>
//       </IconButton>
//     </Tooltip>
//     </div>
//           <div className=' flex flex-col items-center justify-center'>
//             <h2>Pie chart</h2>
//             <div className='mt-11 flex flex-col items-center justify-center'>
//             <BasicPie/>
//            </div>
//           </div>
//         </Grid>
//         <Grid item xs={6} className='h-[50vh] border-2 rounded-md'>
//         <div>
//           <h1 className='text-center'>Skills stats according to job profile </h1>
//           <ul className='list-disc px-5 mt-20' >
//             <li>Lorem ipsum dolor sit amet.</li>
//             <li>Lorem ipsum dolor sit amet.</li>
//             <li>Lorem ipsum dolor sit amet.</li>
//             <li>Lorem ipsum dolor sit amet.</li>
//             <li>Lorem ipsum dolor sit amet.</li>
//             <li>Lorem ipsum dolor sit amet.</li>
            

//           </ul>
//         </div>
//         </Grid>
       
//         <Grid item xs={6} className='h-[50vh] border-2 rounded-md'>
//         <div>
//           <h1 className='text-center'>Steps to follow </h1>
//           <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusantium harum quas sequi aperiam non expedita. At molestiae voluptate odit nostrum quidem, repellendus, accusamus, quos consequuntur eius exercitationem consequatur. Temporibus.</p>
//           <ul className='list-decimal px-5 mt-10' >
//             <li>Lorem ipsum dolor sit amet.</li>
//             <li>Lorem ipsum dolor sit amet.</li>
//             <li>Lorem ipsum dolor sit amet.</li>
//             <li>Lorem ipsum dolor sit amet.</li>
//             <li>Lorem ipsum dolor sit amet.</li>
//             <li>Lorem ipsum dolor sit amet.</li>

//           </ul>
//         </div>
         
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BasicPie from '../Components/BasicPie';
import BasicBars from '../Components/BasicBar';
import { CgProfile } from "react-icons/cg";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
//import bgImage from '../assets/background.jpg'; // Make sure to add your background image in the assets folder

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} className="relative min-h-screen bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
      <div className="relative z-10 p-6">
        <Grid container spacing={4} className="max-[600px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Resume Bar Stats */}
          <Grid item xs={12} sm={6} className="border border-gray-700 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 flex flex-col items-center justify-center bg-gray-800 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Resume Bar Stats</h2>
              <BasicBars />
            </div>
          </Grid>
          
          {/* Pie Chart */}
          <Grid item xs={12} sm={6} className="border border-gray-700 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 flex flex-col items-center justify-center bg-gray-800 rounded-lg">
              <div className="w-full flex justify-end mb-4">
                <Tooltip title="Profile">
                  <IconButton aria-label="profile" className="text-white">
                    <Link to='/Profile'><CgProfile size={24} /></Link>
                  </IconButton>
                </Tooltip>
              </div>
              <h2 className="text-xl font-semibold mb-4">Pie Chart</h2>
              <BasicPie />
            </div>
          </Grid>
          
          {/* Skills Stats */}
          <Grid item xs={12} sm={6} className="border border-gray-700 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 bg-gray-800 rounded-lg">
              <h1 className="text-2xl font-semibold text-center mb-4">Skills Stats According to Job Profile</h1>
              <ul className="list-disc px-5 text-gray-300">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </Grid>
          
          {/* Steps to Follow */}
          <Grid item xs={12} sm={6} className="border border-gray-700 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 bg-gray-800 rounded-lg">
              <h1 className="text-2xl font-semibold text-center mb-4">Steps to Follow</h1>
              <p className="text-gray-300 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusantium harum quas sequi aperiam non expedita. At molestiae voluptate odit nostrum quidem, repellendus, accusamus, quos consequuntur eius exercitationem consequatur. Temporibus.</p>
              <ul className="list-decimal px-5 text-gray-300">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

