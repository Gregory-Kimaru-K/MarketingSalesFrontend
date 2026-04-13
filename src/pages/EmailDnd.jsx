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
            <h3>CUSTOM EMAIL</h3>
            <div className='email_btn'>
                <button>Save Design</button>
                <button>Send Email</button>
            </div>
        </div>
        <div className='email_wrapper'>
            <EmailEditor 
                ref={emailEditorRef}
                onReady={onEReady}
                style={{ height: '100%' }}
                options={{
                    displayMode: "email",
                    projectId: "286025"
                }}
            />
        </div>
        <div className='send_wrapper'>
            <div className='send_card'>
                <h1>&#x2718;</h1>
                <h2>SEND EMAIL</h2>
                <div class="input-group">
                    <input required type="text" name="text" autocomplete="off" class="input" />
                    <label class="user-label">First Name</label>
                </div>
                <div class="input-group">
                    <input required type="text" name="text" autocomplete="off" class="input" />
                    <label class="user-label">First Name</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmailDnd