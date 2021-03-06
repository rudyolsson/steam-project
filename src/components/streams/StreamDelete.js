import React from 'react';
import Modal from "../Modal";
import history from "../../history";
import {connect} from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from 'react-router-dom';

export class StreamDelete extends React.Component {
     componentDidMount() {
         if (!this.stream) {
             this.props.fetchStream(this.props.match.params.id);
         }
     }

     renderActions() {
         const { id } = this.props.match.params;
         return (
             // can also be <> it is the exact same syntax
             <React.Fragment>
                 <button onClick={() => this.props.deleteStream(id)} className="ui negative button">Delete</button>
                 <Link to="/" className="ui button">Cancel</Link>
             </React.Fragment>
         )
     }

     renderContent() {
         if (!this.props.stream) {
             return `Do you want to delete this stream`;
         } else {
             return `Do you want to delete the stream with the title: ${this.props.stream.title}?`;
         }
     }

    render(){
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};


export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);