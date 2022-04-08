import { useEffect } from "react";
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../../aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

export default function MyApp({ Component, pageProps }) {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    console.log("App", user);
    console.log("App", signOut);
  }, [user, signOut]);

  return (
    <main>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <Component {...pageProps} />
    </main>
    // <Authenticator>
    //   {({ signOut, user }) => (
    //     <main>
    //       <h1>Hello {user.username}</h1>
    //       <button onClick={signOut}>Sign out</button>
    //       <Component {...pageProps} />
    //     </main>
    //   )}
    // </Authenticator>
  );
}
