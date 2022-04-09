import { useEffect } from "react";
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../../aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

export default function AppWrapper(props) {
  return (
    <Authenticator.Provider>
      <MyApp {...props} />
    </Authenticator.Provider>
  );
}

function MyApp({ Component, pageProps }) {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    console.log("user", user);
    console.log("signOut", signOut);
  }, [user, signOut]);

  return (
    <main>
      <h1>Hello {user?.username || "Guest"}</h1>
      <button onClick={signOut}>Sign out</button>
      <Component {...pageProps} />
    </main>
    // <Authenticator.Provider>
    //   {({ signOut, user }) => (
    //     <main>
    //       <h1>Hello {user.username}</h1>
    //       <button onClick={signOut}>Sign out</button>
    //       <Component {...pageProps} />
    //     </main>
    //   )}
    //   <Authenticator.Provider>
  );
}
