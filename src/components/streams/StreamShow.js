import React from 'react';
import { connect} from 'react-redux';
import { fetchStream } from "../../actions";

export class StreamShow extends React.Component {
    componentDidMount() {
        if (!this.props.stream) {
            this.props.fetchStream(this.props.match.params.id);
        }
    }

    render(){
        if(!this.props.stream) {
            return (
                <div>
                    <div>Loading...</div>
                </div>
            )
        } else {
            const { title, description} = this.props.stream;
            return (
                <div>
                    <h1>{title}</h1>
                    <h5>{description}</h5>
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

export default connect(mapStateToProps, { fetchStream })(StreamShow);