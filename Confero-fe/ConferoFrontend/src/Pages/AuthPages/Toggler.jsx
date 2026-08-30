import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GmailBasedAuth from './GmailBasedAuth';
import PhoneBasedAuth from "./PhoneBasedAuth";

export default function Toggler({ isRegister }) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="lab tabs"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Register with Gmail" value="1" />
          <Tab label="Register with Phone" value="2" />
        </TabList>
        <TabPanel value="1" tabIndex={0}>
          <GmailBasedAuth mode={isRegister}/>
        </TabPanel>
        <TabPanel value="2" tabIndex={0}>
          <PhoneBasedAuth mode={isRegister}/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
