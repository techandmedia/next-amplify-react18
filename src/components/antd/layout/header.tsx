/* eslint-disable no-unused-vars */
import { IMenuItem, Menu } from '@wsh4and/antd';

interface ILayout {
  user?: any;
  signOut?: () => void;
  menus: IMenuItem[];
}

export default function HeaderMenu(props: ILayout) {
  return (
    <Menu
      menus={props.menus}
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={['dua']}
      // style={{ marginBottom: 5 }}
    />
  );

  // return (
  //   <Header>
  //     <Menu
  //       menus={menuHeader}
  //       theme="light"
  //       mode="horizontal"
  //       defaultSelectedKeys={['dua']}
  //       style={{ marginBottom: 5 }}
  //     />
  //   </Header>
  // );
}
