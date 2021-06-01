import React from 'react';
import { Flex, Text, Link, Image, Box } from '../src';
import logo from './R2-logo.png';

type linkObjectTypes = {
  href: string,
  label: string
}

type userProfileDataTypes = {
  username: string,
  imageSource: string
}

export const Navigation: React.FC<{navbarLinks: linkObjectTypes[], userProfileData: userProfileDataTypes }> = ({navbarLinks, userProfileData}) => {
  return (
    <Box as="nav" bg="bg.primary" px={3} py={2}>
      <Flex height={3} justifyContent="space-between" alignItems="center">
        <Image
          src={logo}
          flex="none"
          width={3}
          height={3}
          variant="default"
          alt="Rnagle.io"
        />
        <Flex flex={1} />
        {navbarLinks.map(({label, href}: linkObjectTypes) => (
          <Link
            key={label}
            href={href}
            variant="nav2"
            fontWeight="regular"
            ml={3}>
            {label}
          </Link>
        ))}
        <Flex alignItems="center" ml={[3, 4]}>
          <Image 
            src={userProfileData.imageSource}
            flex="none"
            variant="avatar"
            mr={3} 
          />
          <Box>
            <Text variant="body" fontWeight="bold" mb={1}>
              {userProfileData.username}
            </Text>
            <Link
              variant="default"
              display="inline-block"
              style={{ textDecoration: 'none'}}>
              Logout
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};