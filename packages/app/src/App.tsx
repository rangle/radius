import React from 'react';
import { Box, Text, theme } from 'ds';
import { Navigation } from './Navigation';
import userImg from './imgs/user.png';
import { ThemeProvider } from 'styled-components';

const navbarLinks = [
  { href: '#!', label: 'Home' },
  { href: '#!', label: 'Portfolios' },
  { href: '#!', label: 'Dashboard' },
  { href: '#!', label: 'Teams' },
];

const userProfileData = {
  username: 'Rangle',
  imageSource: userImg
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <div className="App" style={{ backgroundColor: "black", height: "100vh"}}>
        <Box mb={4}>
          <Navigation navbarLinks={navbarLinks} userProfileData={userProfileData}/>
          <Text variant="body">This is body text</Text>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default App;
