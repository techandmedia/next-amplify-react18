import { Icons, IMenuItem } from '@wsh4and/antd';
import { Button } from 'antd';
import { DataStore } from 'aws-amplify';
import { NavLink } from './nav-link';

export function headerMenus(user: any) {
  const menus: IMenuItem[] = [
    {
      key: 'home',
      component: <NavLink href="/" title="home" iconType="book" />,
    },
    {
      key: 'satu',
      component: <NavLink href="/satu" title="satu" iconType="book" />,
    },
    {
      key: 'dua',
      component: <NavLink href="/dua" title="dua" iconType="book" />,
    },
    {
      key: 'tiga',
      component: <NavLink href="/tiga" title="tiga" iconType="book" />,
    },
    {
      key: 'empat',
      submenuicon: 'download',
      component: <span>Empat A</span>,
      submenus: [
        {
          key: 'empat-a1',
          component: <NavLink href="/dua" title="empat-a1" iconType="book" />,
        },
        {
          key: 'empat-a2',
          component: <NavLink href="/dua" title="empat-a2" iconType="book" />,
        },
      ],
    },
    {
      key: 'lima',
      component: <span>Lima A</span>,
      groupmenus: [
        {
          key: 'lima-a1',
          grouptitle: 'lima-a1',
          menus: [
            {
              key: 'lima-a11',
              component: <NavLink href="/dua" title="lima-a11" iconType="book" />,
            },
            {
              key: 'lima-a12',
              component: <NavLink href="/dua" title="lima-a12" iconType="book" />,
            },
          ],
        },
        {
          key: 'lima-a21',
          grouptitle: 'lima-a21',
          menus: [
            {
              key: 'lima-a121',
              component: <NavLink href="/dua" title="lima-a121" iconType="book" />,
            },
            {
              key: 'lima-a122',
              component: <NavLink href="/3" title="lima-a122" iconType="dashboard" />,
            },
          ],
        },
      ],
    },
    {
      key: 'auth',
      component: <NavLink href="/auth" title="auth" iconType="book" />,
    },
    {
      key: 'blog',
      component: <NavLink href="/blog" title="blog" iconType="book" />,
    },
    {
      key: 'user',
      component: <span>Welcome {user?.username || 'Guest'}</span>,
    },
  ];

  const authMenus: IMenuItem[] = [
    {
      key: 'dashboard',
      component: <NavLink href="/dashboard" title="dashboard" iconType="book" />,
    },
  ];

  // TODO menu dashboard letakkan sebelum menu auth/signout
  return user ? [...menus, ...authMenus] : menus;
}

export function siderMenus(collapsed: boolean, signOut: () => void) {
  function logout() {
    signOut();
    DataStore.clear();
  }

  const menus: IMenuItem[] = [
    {
      key: 'home',
      component: <NavLink href="/" title="home" iconType="book" collapsed={collapsed} />,
    },
    {
      key: 'dashboard',
      component: (
        <NavLink href="/dashboard" title="dashboard" iconType="book" collapsed={collapsed} />
      ),
    },
    {
      key: 'about',
      component: <NavLink href="/about" title="about" iconType="book" collapsed={collapsed} />,
    },
    {
      key: 'private',
      component: <NavLink href="/private" title="private" iconType="book" collapsed={collapsed} />,
    },
    {
      key: 'empat',
      submenuicon: 'download',
      component: <span>Empat A</span>,
      submenus: [
        {
          key: 'empat-a1',
          component: <NavLink href="/dua" title="empat-a1" iconType="book" collapsed={collapsed} />,
        },
        {
          key: 'empat-a2',
          component: <NavLink href="/dua" title="empat-a2" iconType="book" collapsed={collapsed} />,
        },
      ],
    },
    {
      key: 'lima',
      component: <span>Lima A</span>,
      groupmenus: [
        {
          key: 'lima-a1',
          grouptitle: 'lima-a1',
          menus: [
            {
              key: 'lima-a11',
              component: (
                <NavLink href="/dua" title="lima-a11" iconType="book" collapsed={collapsed} />
              ),
            },
            {
              key: 'lima-a12',
              component: (
                <NavLink href="/dua" title="lima-a12" iconType="book" collapsed={collapsed} />
              ),
            },
          ],
        },
        {
          key: 'lima-a21',
          grouptitle: 'lima-a21',
          menus: [
            {
              key: 'lima-a121',
              component: (
                <NavLink href="/dua" title="lima-a121" iconType="book" collapsed={collapsed} />
              ),
            },
            {
              key: 'lima-a122',
              component: (
                <NavLink href="/3" title="lima-a122" iconType="dashboard" collapsed={collapsed} />
              ),
            },
          ],
        },
      ],
    },
    {
      key: 'enam',
      submenuicon: 'create-form',
      component: <span>Enam A</span>,
      groupmenus: [
        {
          key: 'enam-a1',
          grouptitle: 'enam-a1',
          menus: [
            {
              key: 'enam-a11',
              component: (
                <NavLink href="/3" title="enam-a11" iconType="dashboard" collapsed={collapsed} />
              ),
            },
            {
              key: 'enam-a12',
              component: (
                <NavLink href="/3" title="enam-a12" iconType="dashboard" collapsed={collapsed} />
              ),
            },
          ],
        },
        {
          key: 'enam-a21',
          grouptitle: 'enam-a21',
          menus: [
            {
              key: 'enam-a121',
              component: (
                <NavLink href="/3" title="enam-a121" iconType="dashboard" collapsed={collapsed} />
              ),
            },
            {
              key: 'enam-a122',
              component: (
                <NavLink href="/3" title="enam-a122" iconType="dashboard" collapsed={collapsed} />
              ),
            },
          ],
        },
      ],
    },
    {
      key: 'logout',
      component: (
        <Button type="text" onClick={logout} icon={<Icons type="logout" />}>
          Logout
        </Button>
      ),
    },
  ];

  return menus;
}
