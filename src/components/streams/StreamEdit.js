import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import { pick } from 'lodash';

class StreamEdit extends React.Component {
    componentDidMount() {
        if (!this.stream) {
            this.props.fetchStream(this.props.match.params.id);
        }
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.stream.id, formValues);
    };

    render(){
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    <h1>Edit A Stream</h1>
                    <StreamForm 
                    initialValues={pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit}
                    />
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);