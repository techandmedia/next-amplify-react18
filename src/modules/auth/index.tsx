/* eslint-disable no-unused-vars */
import { Authenticator, CheckboxField, useAuthenticator } from '@aws-amplify/ui-react';
import { Card, Col, Row, Tabs } from 'antd';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import RegistrationForm from './registration';
import SignIn from './signin';

const { TabPane } = Tabs;

function TabText(props) {
  return <span style={{ fontSize: '24px' }}>{props.text}</span>;
}

interface IAuthPage {
  user: any;
}

export default function AuthPage(props: IAuthPage) {
  const router = useRouter();
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

  useEffect(() => {
    console.log(props.user);

    if (props.user) {
      router.replace('/dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.user]);

  return (
    <Authenticator>
      {() => {
        console.log('Authenticator', props.user);

        return <h1>Hello {props.user?.username || 'Guest'}</h1>;
      }}
    </Authenticator>
  );
}
