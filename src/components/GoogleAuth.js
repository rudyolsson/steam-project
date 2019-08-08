import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '148525925888-rdbh1io0jbii70ped8pfied88ki2kjlj.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    }

    render() {
        return <div>GAUTH</div>
    }
}

export default GoogleAuth