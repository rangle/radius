import React from 'react';
import {
  Box,
  Text,
  Spinner,
  Heading,
  Link,
  Flex,
  Label,
  Image,
  Icons,
  AspectImage,
  AspectRatio,
  Input,
  TextArea,
  Checkbox,
  theme,
} from 'ds';
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
  imageSource: userImg,
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <div className="App" style={{ height: '100vh' }}>
        <Box mb={4}>
          <Navigation
            navbarLinks={navbarLinks}
            userProfileData={userProfileData}
          />
          <Box mb={3} p={3}>
            <Heading variant="heading-1">This heading 1</Heading>
            <Heading variant="heading-2">This heading 2</Heading>
            <Heading variant="heading-3">This heading 3</Heading>
          </Box>
          <Box mb={3} p={3}>
            <Text variant="body">This is body text</Text>
            <Text variant="caption">This is caption text</Text>
            <Text variant="hint">This is hint text</Text>
            <Text variant="label">This is label text</Text>
          </Box>
          <Flex mb={3} p={3} flexDirection="column">
            <Link href="#!" variant="default">
              This is default Link
            </Link>
            <Link href="#!" variant="inline">
              This is inline Link
            </Link>
            <Link href="#!" variant="nav1">
              This is nav1 Link
            </Link>
            <Link href="#!" variant="nav2">
              This is nav2 Link
            </Link>
          </Flex>
          <Box mb={3} p={3}>
            <Spinner size={3} mr={3} block={false} />
            <Spinner
              color="brand.primary"
              p={2}
              bg="brand.muted"
              block={false}
              size={3}
            />
          </Box>
          <Box mb={3} p={3}>
            <Label>Field Label</Label>
            <Label adornment="(optional)" mb={4}>
              Field Label
            </Label>
            <Label adornment="(optional)" mb={4}>
              Field Label
            </Label>
            <Label adornment="(more info)" required>
              Field Label
            </Label>
            <Label
              adornment={<Icons.Info color="brand.primary" fontSize={2} />}
            >
              Field Label
            </Label>
          </Box>
          <Box mb={3} p={3}>
            <Image variant="default" src={userImg} maxWidth={600} mr={2} />
            <Image variant="avatar" src={userImg} />
          </Box>
          <Box mb={3} p={3}>
            <Icons.CheckboxChecked
              title="checkbox checked"
              color="brand.accent"
            />
            <Icons.CheckboxChecked
              title="checkbox checked"
              fontSize={3}
              color="brand.primary"
            />
            <Icons.CheckboxChecked
              title="checkbox checked"
              fontSize={4}
              color="brand.pmuted"
            />
          </Box>
          <Box mb={3} p={3}>
            <AspectImage ratio={16 / 9} src={userImg} />
          </Box>
          <Box mb={3} p={3}>
            <AspectRatio
              ratio={16 / 9}
              bg="brand.primary"
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Heading variant="heading-5" color="brand.muted">
                Aspect Ratio
              </Heading>
            </AspectRatio>
          </Box>
          <Box mb={3} p={3}>
            <Input
              value="Inputted text"
              leftIcon={<Icons.Search aria-hidden />}
              rightIcon={<Icons.Close color="brand.primary" aria-hidden />}
            />
          </Box>
          <Box mb={3} p={3}>
            <TextArea placeholder="Placeholder text" maxCharacters={100} />
          </Box>
          <Box mb={3} p={3}>
            <Checkbox label="Option" />
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default App;
