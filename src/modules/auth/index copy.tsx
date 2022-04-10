/* eslint-disable no-unused-vars */
import { Authenticator, CheckboxField, useAuthenticator } from '@aws-amplify/ui-react';
import { Card, Col, Row, Tabs } from 'antd';
import { Auth } from 'aws-amplify';
import { useState } from 'react';
import RegistrationForm from './registration';
import SignIn from './signin';

const { TabPane } = Tabs;

function TabText(props) {
  return <span style={{ fontSize: '24px' }}>{props.text}</span>;
}

export default function AuthPage(props) {
  const [host, setHost] = useState('dev');

  const services = {
    async validateCustomSignUp(formData) {
      // TODO change error message to Indonesia
      console.log('validateCustomSignUp:', formData);

      if (!formData.acknowledgement) {
        return {
          acknowledgement: 'You must agree to the Terms & Conditions',
        };
      }
    },

    async handleSignUp(formData) {
      let { username, password, attributes } = formData;
      // custom username - able to change username later on
      // for instance - cama email to registration number
      // then when they pass all exams, as students can be login using NIM
      attributes.email = attributes.email.toLowerCase();
      attributes['custom:ptcode'] = host;

      console.log('username:', username);

      return Auth.signUp({
        username,
        password,
        attributes,
      });
    },
  };

  return (
    <Authenticator
      // Default to Sign Up screen
      // initialState="signUp"
      // Customize `Authenticator.SignUp.FormFields`
      // signUpAttributes={[
      //   // 'address',
      //   // 'birthdate',
      //   // 'email',
      //   // 'family_name',
      //   // 'gender',
      //   // 'given_name',
      //   // 'locale',
      //   // 'middle_name',
      //   // 'name',
      //   // 'nickname',
      //   // 'phone_number',
      //   // 'picture',
      //   // 'preferred_username',
      //   // 'profile',
      //   // 'updated_at',
      //   // 'website',
      //   // 'zoneinfo',
      //   // 'custom:ptcode',
      // ]}
      components={{
        SignUp: {
          FormFields() {
            const { validationErrors } = useAuthenticator();
            return (
              <>
                {/* Re-use default `Authenticator.SignUp.FormFields` */}
                <Authenticator.SignUp.FormFields />

                {/* Append & require Terms & Conditions field to sign up  */}
                <CheckboxField
                  errorMessage={validationErrors.acknowledgement as string}
                  hasError={!!validationErrors.acknowledgement}
                  name="acknowledgement"
                  value="yes"
                  label="I agree with the Terms & Conditions"
                />
              </>
            );
          },
        },
      }}
      services={services}
    >
      {({ signOut, user }) => {
        console.log('Authenticator', user);
        console.log('Authenticator', signOut);

        return <h1>Hello {user.username}</h1>;
      }}
    </Authenticator>
  );
}

// export default function AuthPage(props) {
//   return (
//     <Row style={{ padding: 24 }}>
//       <Col
//         xs={24}
//         sm={{
//           offset: 2,
//           span: 16,
//         }}
//         md={{
//           offset: 4,
//           span: 16,
//         }}
//         lg={{
//           offset: 4,
//           span: 12,
//         }}
//         xl={{
//           offset: 4,
//           span: 10,
//         }}
//       >
//         <Card
//           bodyStyle={{ width: '100%', paddingRight: '40px' }}
//           // style={{ border: '2px solid #92fcf7c7', borderRadius: 4 }}
//         >
//           <Tabs defaultActiveKey="sign-in" centered>
//             <TabPane tab={<TabText text="Sign In" />} key="sign-in">
//               <SignIn {...props} />
//             </TabPane>
//             <TabPane tab={<TabText text="Registration" />} key="registration">
//               <RegistrationForm {...props} />
//             </TabPane>
//           </Tabs>
//         </Card>
//       </Col>
//     </Row>
//   );
// }
