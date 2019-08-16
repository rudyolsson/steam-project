import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                <div className="header">Delete Stream</div>
                <div className="content">Do you want to continue?</div>
                <div className="actions">
                    div
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
};

export default Modal;