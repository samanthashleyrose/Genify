import React from 'react';

function Message({ onClose }) {

    const continueBtn = (event) => {
        event.preventDefault();
        onClose();
    }

    return (
        <div className="msg-container">
            <h3 className="msg-title">oops!</h3>
            <h4 className="instructions" id='alert-msg'> link your Spotify account</h4>
            <button id="continue" onClick={continueBtn}>continue</button>
        </div>
    );
}

export default Message;