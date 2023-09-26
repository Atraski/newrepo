import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from 'firebase/database';
import { Segment, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyDT4Z9iamyL8n9piUid_bjKhAe-OT9Xcvs",
  authDomain: "chatbot-f3e28.firebaseapp.com",
  databaseURL: "https://chatbot-f3e28-default-rtdb.firebaseio.com",
  projectId: "chatbot-f3e28",
  storageBucket: "chatbot-f3e28.appspot.com",
  messagingSenderId: "1027874989950",
  appId: "1:1027874989950:web:58128665a70c6c0685352f"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const databaseRef = ref(database, 'chatbot');

const Chat = () => {
  const navigate = useNavigate();

  const handleEnd = ({ steps, values }) => {
    const chatData = {
      timestamp: Date.now(),
      steps: steps.map(({ id, message, value }) => ({ id, message, value })),
      values
    };

    push(databaseRef, chatData)
      .then(() => console.log('Data successfully pushed to Firebase'))
      .catch(error => console.error('Error pushing data to Firebase:', error));
  };
  const handleGoBack = () => {
    navigate('/'); // Replace '/' with the path of your main menu page
  };

  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to our website',
      trigger: 'Done',
    },
    {
      id: 'Done',
      message: 'Please enter your name!',
      trigger: (previousValue) => {
        if (previousValue !== 'waiting1') {
         return 'waiting1';
        }
      },
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Name',
    },
    {
      id: 'Name',
      message: 'Hi {previousValue}, please enter your contact number and gmail.',
      trigger: 'waiting2',
    },
    {
      id: 'waiting2',
      user: true,
      trigger: 'ContactNumber',
    },
    {
      id: 'ContactNumber',
      message: 'Great! We will contact you at {previousValue}, kindly let us know with which service we can help you',
      trigger: 'issues',
    },
    {
      id: 'issues',
      options: [
        {
          value: 'Digital Marketing',
          label: 'Digital Marketing',
          trigger: 'Digital Marketing',
        },
        {
          value: 'Events',
          label: 'Events',
          trigger: 'Events',
        },
        {
          value: 'Public Relation',
          label: 'Public Relation',
          trigger: 'Public Relation',
        },
        {
          value: 'Production',
          label: 'Production',
          trigger: 'Production',
        },
        {
          value: 'Web Development',
          label: 'Web Development',
          trigger: 'Web Development',
        },
        {
          value: 'MICE',
          label: 'MICE',
          trigger: 'MICE',
        },
        {
          value: 'Influencer Marketing',
          label: 'Influencer Marketing',
          trigger: 'Influencer Marketing',
        },
      ],
    },
    {
      id: 'Digital Marketing',
      message: 'Thanks for your interest. Our team will get in touch with you.',
      end: true,
    },
    {
      id: 'Events',
      message: 'Thanks for your interest. Our team will get in touch with you. Have a look at our past projects',
      end: true,
    },
    {
      id: 'Public Relation',
      message: 'Thanks for your interest. Our team will get in touch with you. Have a look at our past projects',
      end: true,
    },
    {
      id: 'Production',
      message: 'Thanks for your interest. Our team will get in touch with you. Have a look at our past projects',
      end: true,
    },
    {
      id: 'Web Development',
      message: 'Thanks for your interest. Our team will get in touch with you. Have a look at our past projects',
      end: true,
    },
    {
      id: 'MICE',
      message: 'Thanks for your interest. Our team will get in touch with you. Have a look at our past projects',
      end: true,
    },
    {
      id: 'Influencer Marketing',
      message
: 'Thanks for your interest. Our team will get in touch with you.Have a look at our past projects',
      end: true,
    },
  ];

  return (
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
    <Segment floated="right">
      <ChatBot steps={steps} handleEnd={handleEnd} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button
          onClick={handleGoBack}
          style={{ backgroundColor: 'transparent', color: 'white',fontSize: '18px',padding:'10px', border:'2px solid #6554AF', borderRadius:'20px' }}
        >
          Go back to main menu
        </Button>
      </div>
    </Segment>
  </div>
  );
};
;

export default React.memo(Chat);