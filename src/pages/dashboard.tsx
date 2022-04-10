/* eslint-disable no-unused-vars */
import { ChatBot } from 'aws-amplify-react';
import { useEffect } from 'react';

export default function Render() {
  const handleChatComplete = event => {
    const { data, err } = event.detail;
    if (data) console.log('Chat fulfilled!', JSON.stringify(data));
    if (err) console.error('Chat failed:', err);
  };

  // useEffect(() => {
  //   const chatbotElement = document.querySelector('amplify-chatbot');
  //   chatbotElement.addEventListener('chatCompleted', handleChatComplete);
  //   return function cleanup() {
  //     chatbotElement.removeEventListener('chatCompleted', handleChatComplete);
  //   };
  // }, []);

  return (
    <>
      DASHBOARD
      {/* <ChatBot
        botName="yourBotName"
        // botTitle="My ChatBot"
        onComplete={(a, b) => console.log(a, b)}
        welcomeMessage="Hello, how can I help you?"
      /> */}
    </>
  );
}
