import React, { useRef } from 'react';
import {EmailEditor} from 'react-email-editor';

function App() {
  const emailEditorRef=useRef(null)

  const onEReady = () => {
    console.log("Email is ready")
  }

  return (
    <div className='container'>
      <EmailEditor 
        ref={emailEditorRef}
        onReady={onEReady}
        style={{ minHeight: '100vh' }}
        options={{
          displayMode: "email",
          projectId: "286025"
        }} 
        />
    </div>
  )
}

export default App
