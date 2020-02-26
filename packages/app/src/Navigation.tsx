import React from 'react';
import { Flex, Text, Link, Image, Icons } from 'ds';

export const Navigation: React.FC<{navbarLinks: any, userProfileData: any }> = ({navbarLinks, userProfileData}) => {
  return (
    <nav>
      <Flex style={{ width: "100%", height: "50px", justifyContent: "space-between"}}>
        <Flex>
          {navbarLinks.map(({label, href}: any) => <Link key={label} href={href} variant="nav1">{label}</Link>)}
        </Flex>
        <Flex>
          <Image src={userProfileData.imageSource} variant="avatar" style={{ width: "50px", height: "50px"}}/>
          <Flex flexDirection="column">
            <Text variant="label">{userProfileData.username}</Text>
            <Link variant="default">Logout</Link>
          </Flex>
        </Flex>
      </Flex>
    </nav>
  );
};