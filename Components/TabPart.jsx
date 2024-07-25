import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box  sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabPart() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box  sx={{ width: '100%' }}>
      <Box  sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs  value={value} onChange={handleChange}>
          <Tab label="Impact" {...a11yProps(0)} />
          <Tab label="Support" {...a11yProps(1)} />
          <Tab label="Progress" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <div className='py-2 px-2 flex items-center justify-between gap-5 max-[600px]:flex-col'>
        <div className="image rounded-lg overflow-hidden w-1/2 h-[40vh] max-[600px]:w-full ">
          <img src="" alt="" className='w-full h-full bg-black' />
        </div>
        <div className="content w-1/2 max-[600px]:w-full">
          <h1 className="text-3xl font-bold">Impact</h1>
          <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            tellus non nunc luctus ultricies. Sed ut lacinia nunc.
            </p>
        </div>
      </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className='py-2 px-2 flex items-center justify-between gap-5 max-[600px]:flex-col'>
          <div className="image rounded-lg overflow-hidden w-1/2 h-[40vh] max-[600px]:w-full">
            <img src="" alt="" className='w-full h-full bg-black' />
          </div>
          <div className="content w-1/2 max-[600px]:w-full">
            <h1 className="text-3xl font-bold">Support</h1>
            <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              tellus non nunc luctus ultricies. Sed ut lacinia nunc.
              </p>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className='py-2 px-2 flex items-center justify-between gap-5 max-[600px]:flex-col'>
          <div className="image  rounded-lg overflow-hidden w-1/2 h-[40vh] max-[600px]:w-full">
            <img src="" alt="" className='w-full h-full bg-black' />
          </div>
          <div className="content w-1/2 max-[600px]:w-full">
            <h1 className="text-3xl font-bold">Progress</h1>
            <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              tellus non nunc luctus ultricies. Sed ut lacinia nunc.
              </p>
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
