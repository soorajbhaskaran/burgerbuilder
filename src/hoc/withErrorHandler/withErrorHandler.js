import React from 'react';
import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends React.Component {
        state = {
            error: null
        }
        componentDidMount() {
            axios.interceptors.request.use(request => {
                this.setState({ error: null })
                return request;
            });
            axios.interceptors.response.use(req => req, error => {
                console.log(error);
                this.setState({ error: error })
            });
        }
        clickModalElement = () => {
            this.setState({ error: null });
        }
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} clicked={this.clickModalElement}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Aux>
            );
        }
    }
}
export default withErrorHandler;