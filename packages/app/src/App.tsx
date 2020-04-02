import React from "react";
import {
  Box,
  Button,
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
  FormControl,
  Select,
  theme
} from "ds";
import { Navigation } from "./Navigation";
import userImg from "./imgs/user.png";
import { ThemeProvider } from "styled-components";

const navbarLinks = [
  { href: "#!", label: "Home" },
  { href: "#!", label: "Portfolios" },
  { href: "#!", label: "Dashboard" },
  { href: "#!", label: "Teams" }
];

const userProfileData = {
  username: "Rangle",
  imageSource: userImg
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <div className="App" style={{ height: "100vh" }}>
        <Box mb={4}>
          <Navigation
            navbarLinks={navbarLinks}
            userProfileData={userProfileData}
          />
          {/* Banner */}
          <Box mx={4}>
            <Flex flexDirection="row">
              <Box mr={3} flex="none" width="50%">
                <Heading variant="heading-4" mb={2}>
                  Shell Design Systems
                </Heading>
                <Text variant="body" mb={2}>
                  Shell is a global group of energy and petrochemical companies
                  with an average of 86,000 employees in more than 70 countries.
                  Shell uses advanced technologies and take an innovative
                  approach to help build a sustainable energy future.
                </Text>
                <Button
                  variant="primary"
                  mr={3}
                  mb={2}
                  rightIcon={<Icons.Visibility aria-hidden />}
                >
                  Learn more
                </Button>
                <Text variant="caption">Shell copyright 2020</Text>
              </Box>
              <Box flex="none" width="50%">
                {/* use aspect image component */}
                <Image src={userImg} maxWidth={600}></Image>
              </Box>
            </Flex>
          </Box>

          {/* Location Search */}

          {/* Buttons - Primary */}
          <Button variant="primary" mr={3}>
            Primary
          </Button>
          <Button
            variant="primary"
            leftIcon={<Icons.Visibility aria-hidden />}
            mr={3}
          >
            Left Icon
          </Button>
          <Button variant="primary" isLoading>
            Loading
          </Button>

          {/* Button Secondary */}
          <Button variant="secondary" mr={3}>
            Secondary
          </Button>
          <Button
            variant="secondary"
            mr={3}
            leftIcon={<Icons.Visibility aria-hidden />}
          >
            Left Icon
          </Button>
          <Button variant="secondary" isLoading>
            Loading
          </Button>

          {/* TextArea */}
          <Box>
            <TextArea placeholder="Placeholder text..." maxCharacters={100} />
            <TextArea
              value="Typed in text looks like this."
              maxCharacters={100}
            />
            <TextArea
              error
              aria-invalid="true"
              placeholder="Placeholder text..."
              maxCharacters={100}
            />
            <TextArea
              error
              aria-invalid="true"
              value="Text area with error"
              maxCharacters={100}
            />
          </Box>

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
          <Flex mb={3} p={3} flexDirection="row">
            <Button variant="primary">Lets get some</Button>
            <Button variant="secondary">Buttons</Button>
            <Button variant="transparent">Up in here</Button>
          </Flex>
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
              color="brand.muted"
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
          <Box mb={3} p={3}>
            <FormControl.Field>
              <Label htmlFor="zip-code" required>
                Zip Code
              </Label>
              <Input
                id="zip-code"
                placeholder="Zip Code"
                aria-describedby="zip-code-helper-text zip-code-error-text"
                error
                rightIcon={<Icons.Error aria-hidden color="ui.error" />}
              />
              <FormControl.Hint id="zip-code-helper-text">
                5 Digits
              </FormControl.Hint>
              <FormControl.Error id="zip-code-error-text">
                Please enter a ZIP code
              </FormControl.Error>
            </FormControl.Field>
          </Box>
          <Box mb={3} p={3}>
            <FormControl.FieldSet>
              <Label htmlFor="terms" required>
                Terms and Conditions
              </Label>
              <Checkbox
                id="terms"
                aria-describedby="terms-error-text"
                label="I agree to the terms and conditions."
                error
              />
              <FormControl.Error id="terms-error-text">
                Please agree to the terms and conditions
              </FormControl.Error>
            </FormControl.FieldSet>
          </Box>
          <Box mb={3} p={3} width={8}>
            <FormControl.FieldSet mb={3}>
              <Label htmlFor="location" required>
                Location
              </Label>
              <Select defaultValue="Select a city" name="city">
                <option>Select a city</option>
                <option>Toronto</option>
                <option>Istanbul</option>
                <option>Amsterdam</option>
              </Select>
            </FormControl.FieldSet>
            <FormControl.FieldSet>
              <Label htmlFor="lcoation" required>
                Location
              </Label>
              <Select
                defaultValue="Select a city"
                leftIcon={<Icons.Place color="text.primary" aria-hidden />}
              >
                <option>Select a city</option>
                <option>Toronto</option>
                <option>Istanbul</option>
                <option>Amsterdam</option>
              </Select>
            </FormControl.FieldSet>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default App;
