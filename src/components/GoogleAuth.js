import React from 'react';

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null,
    };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            // initialize the auth2 client. Init returns a promise
            window.gapi.client.init({
                clientId: '148525925888-v60jijf8b1sijhti00pg6opcr4ule877.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn : this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = () => {
      this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return <div>Signed In </div>
        } else {
            return <div>Defs not signed in</div>
        }
    }

    render() {
        return (
            <div>
                Google Auth
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth