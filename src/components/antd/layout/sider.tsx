import { CSSProperties, useState } from 'react';
import { Sider, Menu } from '@wsh4and/antd';

// Shared Antd-Components
import { siderMenus } from './menu';
import { Typography } from 'antd';

const menuStyle: CSSProperties = {
  backgroundColor: '#fff',
  borderTopRightRadius: '20px',
  borderBottomRightRadius: '20px',
};

interface ILayout {
  user?: any;
  signOut: () => void;
}

export default function SiderMenu(props: ILayout) {
  const [collapsed, setCollapsed] = useState(false);
  const menuSider = siderMenus(collapsed, props.signOut);

  function onCollapse(isCollapsed, value) {
    console.log(isCollapsed, value);
    setCollapsed(!collapsed);
  }

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ ...menuStyle }}>
      {/* Put logo here */}
      <div className="logo">
        <Typography.Title level={4}>LOGO</Typography.Title>
      </div>
      <Menu
        menus={menuSider}
        // theme="light"
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        // defaultOpenKeys={['enam-a21']}
        style={{ ...menuStyle, height: '100%' }}
      />
    </Sider>
  );
}
