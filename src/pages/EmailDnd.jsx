import React, { useRef } from 'react';
import {EmailEditor} from 'react-email-editor';

function EmailDnd() {
    const emailEditorRef=useRef(null)
    const onEReady = () => {
        console.log("Email is ready")
    }
  return (
    <div className='econtainer'>
        <div className='enav'>
            this
        </div>
        <div className='email_wrapper'>
            <EmailEditor 
                ref={emailEditorRef}
                onReady={onEReady}
                style={{ minHeight: '100%' }}
                options={{
                    displayMode: "email",
                    projectId: "286025"
                }} 
            />
        </div>
    </div>
  )
}

export default EmailDnd