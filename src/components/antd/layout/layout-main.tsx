/* eslint-disable no-unused-vars */
import { CSSProperties, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Layout, Breadcrumb, Sider, Content, Menu, Footer } from '@wsh4and/antd';
import { Authenticator, ColorMode, Grid, useTheme } from '@aws-amplify/ui-react';

// Shared Antd-Components
import { headerMenus, siderMenus } from './menu';
import { ConfigProvider, Typography } from 'antd';
import { Head } from './head';
import SiderMenu from './sider';
import HeaderMenu from './header';

interface ILayout {
  host: { name: string; path: string };
  user?: any;
  children: React.ReactNode;
  signOut: () => void;
  privateRoute: boolean;
  colorMode?: ColorMode;
  setColorMode: Dispatch<SetStateAction<ColorMode>>;
}

export default function MainLayout(props: ILayout) {
  const [color, setColor] = useState({
    primaryColor: '#1890ff',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff',
  });
  const [collapsed, setCollapsed] = useState(false);
  const menuHeader = headerMenus(props.user);
  const menuSider = siderMenus(collapsed, props.signOut);
  const { tokens } = useTheme();

  function onColorChange(nextColor: CSSProperties) {
    const mergedNextColor = {
      ...color,
      ...nextColor,
    };
    setColor(mergedNextColor);
    ConfigProvider.config({
      theme: mergedNextColor,
    });
  }

  useEffect(() => {
    // console.log(props);

    if (props.host.name === 'dev') {
      ConfigProvider.config({
        theme: {
          ...color,
          primaryColor: '#327136',
        },
      });
    }
  }, [color, props]);

  return (
    <Layout style={{ padding: '0px', backgroundColor: '#ffffff' }}>
      <Head />
      <HeaderMenu menus={menuHeader} />

      <Layout style={{ padding: '0px', backgroundColor: '#ffffff' }}>
        {/* Menu Sider Dashboard tidak boleh muncul pada saat user memilih route public */}
        {props.privateRoute && <SiderMenu signOut={props.signOut} />}

        <Layout style={{ padding: '24px', backgroundColor: '#c5ada4', minHeight: '97vh' }}>
          {/* TODO harus ada list di mana Breadcrumb tidak perlu muncul, seperti di menu sign in*/}
          {props.host.path !== '/auth' && <Breadcrumb />}
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              backgroundColor: '#ffffff',
              borderRadius: 4,
            }}
          >
            <h3>
              Anda berada di domain:{`"${props.host.name}"`} dengan path:{`"${props.host.path}"`}
            </h3>
            <h3>Welcome {props.user?.username || 'Guest'}</h3>
            {props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
