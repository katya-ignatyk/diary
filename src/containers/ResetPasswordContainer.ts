import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ResetPasswordForm from '../components/auth/ResetPasswordForm';
import { resetPassword } from '../redux/actions/user';

const mapDispatchToProps = (dispatch : Dispatch) => ({
  resetPassword: (password : string, token : string) => resetPassword(password, token)(dispatch)
});

export default connect(null, mapDispatchToProps)(ResetPasswordForm);
