import { Layout, Breadcrumb, Content, Menu } from '@wsh4and/antd';

// Shared Antd-Components
import { headerMenus } from './menu';
import { Head } from './head';

interface ILayout {
  host: string;
  user?: any;
  children: React.ReactNode;
  signOut: () => void;
}

export default function PublicLayout(props: ILayout) {
  const menuHeader = headerMenus(props.user);

  return (
    <Layout>
      <Head />
      {/* <Header> */}
      <Menu
        menus={menuHeader}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['dua']}
        style={{ marginBottom: 5 }}
      />
      {/* </Header> */}
      {/* style={{ marginBottom: 300 }} */}
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb />
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            backgroundColor: '#8d5e4c',
            borderRadius: 4,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}
