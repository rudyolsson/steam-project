import React from 'react';
import { connect} from 'react-redux';
import { fetchStream } from "../../actions";

export class StreamShow extends React.Component {
    componentDidMount() {
        if (!this.stream) {
            this.props.fetchStream(this.props.match.params.id);
        }
    }

    render(){
        return (
            <div>
                <div>Loading...</div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);