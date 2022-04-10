/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import { RecoilRoot } from 'recoil';
import {
  AmplifyProvider,
  Authenticator,
  CheckboxField,
  ColorMode,
  Theme,
  useAuthenticator,
} from '@aws-amplify/ui-react';
import { Amplify, Auth, AuthModeStrategyType } from 'aws-amplify';

// Styling
// Default antd css
// import 'antd/dist/antd.min.css';
// If you want to customize color theme
import 'antd/dist/antd.variable.min.css';
import '@aws-amplify/ui-react/styles.css';
import '../styling/custom-antd.css';
import '../styling/custom-amplify.css';

import awsExports from '../aws-exports';
import MainLayout from '../components/antd/layout/layout-main';
import { Input, Layout } from 'antd';

Amplify.configure({
  ...awsExports,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
  ssr: true,
});

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <RecoilRoot>
//       <Component {...pageProps} />
//     </RecoilRoot>
//   );
// }

export default function AppWrapper(props) {
  return (
    <Authenticator.Provider>
      <App {...props} />
    </Authenticator.Provider>
  );
}

function App({ Component, pageProps }) {
  const router = useRouter();
  const [colorMode, setColorMode] = useState<ColorMode>('system');
  const theme: Theme = {
    name: 'dark-mode-theme',
    overrides: [
      {
        colorMode: 'dark',
        tokens: {
          colors: {
            // neutral: flipPalette(defaultTheme.tokens.colors.neutral),
            black: { value: '#fff' },
            white: { value: '#000' },
            overlay: {
              10: { value: 'hsla(0, 0%, 100%, 0.1)' },
              20: { value: 'hsla(0, 0%, 100%, 0.2)' },
              30: { value: 'hsla(0, 0%, 100%, 0.3)' },
              40: { value: 'hsla(0, 0%, 100%, 0.4)' },
              50: { value: 'hsla(0, 0%, 100%, 0.5)' },
              60: { value: 'hsla(0, 0%, 100%, 0.6)' },
              70: { value: 'hsla(0, 0%, 100%, 0.7)' },
              80: { value: 'hsla(0, 0%, 100%, 0.8)' },
              90: { value: 'hsla(0, 0%, 100%, 0.9)' },
            },
          },
        },
      },
    ],
  };
  const [host, setHost] = useState({ name: 'dev', path: '/' });
  const [privateRoute, setPrivateRoute] = useState(true);
  const { user, signOut } = useAuthenticator(context => [context.user]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      setHost({ name: hostname === 'localhost' ? 'dev' : hostname, path: router.pathname });
    }
  }, [router.pathname]);

  useEffect(() => {
    // Update dari login
    const privateRoutes = ['/private', '/dashboard'];
    const publicRoutes = ['/', '/about', '/faq', '/blog'];
    // console.log(host.path, privateRoutes.includes(host.path));
    if (privateRoutes.includes(host.path)) {
      if (user) {
        setPrivateRoute(true);
        router.replace(host.path);
      } else {
        setPrivateRoute(false);
        router.replace('/auth');
      }
    }

    if (publicRoutes.includes(host.path)) {
      setPrivateRoute(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, host.path]);

  return (
    <AmplifyProvider theme={theme} colorMode={colorMode}>
      <MainLayout
        host={host}
        user={user}
        signOut={signOut}
        privateRoute={privateRoute}
        colorMode={colorMode}
        setColorMode={setColorMode}
      >
        <Component {...pageProps} user={user} colorMode={colorMode} setColorMode={setColorMode} />
      </MainLayout>
    </AmplifyProvider>
  );
}
