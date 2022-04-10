/* eslint-disable no-unused-vars */
import {
  Badge,
  Button,
  Card,
  ColorMode,
  Flex,
  Heading,
  Image,
  Text,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
} from '@aws-amplify/ui-react';
import { useEffect } from 'react';
import ContentView from '../../components/amplify/content';
import { GridView } from '../../components/amplify/content';

export default function Page({ colorMode, setColorMode }) {
  const { tokens } = useTheme();

  useEffect(() => {}, []);

  return (
    <>
      {/* <MenuAlignExample menus={menus} /> */}
      This is a blog title 123
      <Button>TEST 123</Button>
      <Card>
        <ToggleButtonGroup
          value={colorMode}
          isExclusive
          onChange={(value: ColorMode) => {
            console.log(value);

            setColorMode(value);
          }}
        >
          <ToggleButton value="light">Light</ToggleButton>
          <ToggleButton value="dark">Dark</ToggleButton>
          <ToggleButton value="system">System</ToggleButton>
        </ToggleButtonGroup>
        <Text>Current color mode: {colorMode}</Text>
      </Card>
      <GridView rowLarge={2} columnLarge={4}>
        <ContentView column={3}>
          SATU
          <Content tokens={tokens} />
        </ContentView>

        <ContentView row={2}>
          DUA
          <Content tokens={tokens} />
        </ContentView>

        <ContentView column={3} isScrollAble>
          TIGA
          <Content tokens={tokens} />
        </ContentView>

        <ContentView column={4}>
          EMPAT
          <Content tokens={tokens} />
        </ContentView>
      </GridView>
    </>
  );
}

function Content({ tokens }) {
  return (
    <Flex direction="row" alignItems="flex-start">
      {/* <Image alt="Road to milford sound" src="/road-to-milford-new-zealand-800w.jpg" width="33%" /> */}
      <Flex direction="column" alignItems="flex-start" gap={tokens.space.xs}>
        <Flex>
          <Badge size="small" variation="info">
            Plus
          </Badge>
          <Badge size="small" variation="success">
            Verified
          </Badge>
        </Flex>

        <Heading level={5}>New Zealand White Water Outdoor Adventure</Heading>

        <Text as="span">
          Join us on this beautiful outdoor adventure through the glittering rivers through the
          snowy peaks on New Zealand.
        </Text>
        <Button variation="primary">Book it</Button>
        <Button variation="primary">Book it</Button>
        <Button variation="primary">Book it</Button>
      </Flex>
    </Flex>
  );
}
