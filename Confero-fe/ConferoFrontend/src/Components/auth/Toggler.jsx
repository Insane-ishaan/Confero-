import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Collapse from "@mui/material/Collapse";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GmailBasedAuth from '../../Components/auth/GmailBasedAuth';
import WithGoogleBtn from './WithGoggleBtn';

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
          variant="fullWidth"
          aria-label="lab tabs"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label={`${isRegister ? "Register" : "Login"} with Gmail`} value="1" />
          <Tab label="Continue with Gmail" value="2" />
        </TabList>
        <Collapse in={value === "1"} timeout={300}>
          <Box sx={{ p: 2 }}>
            <GmailBasedAuth mode={isRegister} />
          </Box>
        </Collapse>

        <Collapse in={value === "2"} timeout={300}>
          <Box sx={{ p: 2 }}>
            <WithGoogleBtn />
          </Box>
        </Collapse>
      </TabContext>
    </Box>
  );
}
