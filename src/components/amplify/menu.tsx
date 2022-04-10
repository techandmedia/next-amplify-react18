import { Flex, Menu, MenuButton, MenuItem, useTheme } from '@aws-amplify/ui-react';

export interface IMenu {
  href: string;
  label: string;
  icon: string;
  children?: IMenu[];
}

export interface IMenuProps {
  menus: IMenu[];
  menuAlign?: 'start' | 'center' | 'end';
}

const testMenus: IMenu[] = [
  { href: '/', label: 'Home', icon: 'app' },
  { href: '/about', label: 'About', icon: 'app' },
  {
    href: '/nested1',
    label: 'Nest1',
    icon: 'app',
    children: [
      { href: '/nested1', label: 'Nested 1', icon: 'app' },
      { href: '/nested2', label: 'Nested 2', icon: 'app' },
    ],
  },
  {
    href: '/nested2',
    label: 'Nest3',
    icon: 'app',
    children: [
      { href: '/nested3', label: 'Nested 3', icon: 'app' },
      { href: '/nested4', label: 'Nested 4', icon: 'app' },
    ],
  },
];

export function MenuAlignExample(props: IMenuProps) {
  const { tokens } = useTheme();

  return (
    <Flex direction="row" width="4rem">
      {testMenus.map(m => {
        if (m.children) {
          return (
            <Menu
              direction="row"
              trigger={
                <MenuButton
                  variation="primary"
                  // size="large"
                  color={tokens.colors.pink[10]}
                  backgroundColor={tokens.colors.pink[60]}
                >
                  {m.label}
                </MenuButton>
              }
              key={m.href}
              menuAlign={!props.menuAlign ? 'start' : props.menuAlign}
            >
              {m.children.map((m: IMenu) => (
                <MenuItem key={m.href}>{m.label}</MenuItem>
              ))}
            </Menu>
          );
        }

        return (
          <MenuButton
            key={m.href}
            variation="primary"
            // size="large"
            color={tokens.colors.pink[10]}
            backgroundColor={tokens.colors.pink[60]}
          >
            {m.label}
          </MenuButton>
        );
      })}
    </Flex>
  );
}
