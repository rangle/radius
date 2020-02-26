import React from 'react';
import { Flex, Text, Link, Image, Box } from 'ds';
import logo from './R2-logo.png';

export const Navigation: React.FC<{navbarLinks: any, userProfileData: any }> = ({navbarLinks, userProfileData}) => {
  return (
    <nav>
      <Flex width="100%" height={3} justifyContent="space-between" alignItems="center" bg="white">
        <Box flex={1} >
          <Image src={logo} width={3} height={3} variant="default" />
        </Box>
        <Flex flex={2} justifyContent="space-around" alignItems="center">
          <Flex flex={2} justifyContent="space-evenly">
            {navbarLinks.map(({label, href}: any) => <Link key={label} href={href} variant="nav2" fontWeight="regular">{label}</Link>)}
          </Flex>
          <Flex flex={0.5} justifyContent="space-evenly" alignItems="center">
            <Box>
              <Image src={userProfileData.imageSource} width={2} height={2} variant="avatar"/>
            </Box>
            <Flex flexDirection="column" justifyContent="center">
              <Text as="span" variant="body" fontWeight="bold" mb={1}>{userProfileData.username}</Text>
              <Link variant="default" style={{ textDecoration: 'none'}}>Logout</Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </nav>
  );
};