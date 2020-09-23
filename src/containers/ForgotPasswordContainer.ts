import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ForgotPasswordForm from '../components/auth/ForgotPasswordForm';
import { sendForgotPasswordEmail } from '../redux/actions/user';

const mapDispatchToProps = (dispatch : Dispatch) => ({
  sendForgotPasswordEmail: (email : string) => sendForgotPasswordEmail(email)(dispatch)
});

export default connect(null, mapDispatchToProps)(ForgotPasswordForm);
