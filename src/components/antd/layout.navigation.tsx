/* eslint-disable no-unused-vars */
import { Layout, Menu, MenuItemProps, SubMenuProps, MenuProps } from 'antd';
import Link from 'next/link';
import { Icons } from './icons/icons';

const { SubMenu } = Menu;
const { Header, Sider } = Layout;

interface ISubMenu extends SubMenuProps {
  key: string;
  href?: string;
  menus?: IMenu[];
}

export interface IMenu extends MenuItemProps {
  key: string;
  href?: string;
  submenus?: ISubMenu[];
}

export interface INavigation extends MenuProps {
  menus?: IMenu[];
  submenus?: ISubMenu[];
  collapsed?: boolean;
  onSiderCollapse?: (isCollapsed: boolean, value: string) => void;
  siderWidth?: number;
}

export function HeaderNavigation(props: INavigation) {
  return (
    <Header className="header">
      <div className="logo" />
      <Navigation {...props} />
    </Header>
  );
}

export function SiderNavigation(props: INavigation) {
  return (
    <Sider
      width={props.siderWidth || 200}
      collapsible
      collapsed={props.collapsed}
      onCollapse={(isCollapsed, value) => props.onSiderCollapse(isCollapsed, value)}
    >
      <Navigation {...props} />
    </Sider>
  );
}

function Navigation(props: INavigation) {
  return (
    <Menu theme={props.theme} mode={props.mode} defaultSelectedKeys={props.defaultSelectedKeys}>
      {props.menus &&
        props.menus.map(m => {
          if (m.submenus) {
            // Main Menu
            return (
              <SubMenu key={m.key} icon={<Icons type={m.icon} />} title={m.title}>
                {m.submenus.map(sm => {
                  if (sm.menus) {
                    // Nested Menu
                    return (
                      <SubMenu key={sm.key} title={sm.title}>
                        {sm.menus.map(mn => (
                          <Menu.Item key={mn.key} icon={<Icons type={mn.icon} />}>
                            <Link href={m.href}>
                              <a> {m.title}</a>
                            </Link>
                          </Menu.Item>
                        ))}
                      </SubMenu>
                    );
                  }

                  return (
                    <Menu.Item key={sm.key} icon={<Icons type={sm.icon} />}>
                      <Link href={m.href}>
                        <a> {m.title}</a>
                      </Link>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          }

          return (
            <Menu.Item key={m.key} icon={<Icons type={m.icon} />}>
              <Link href={m.href}>
                <a> {m.title}</a>
              </Link>
            </Menu.Item>
          );
        })}
    </Menu>
  );
}
