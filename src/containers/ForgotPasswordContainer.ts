import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import { startLoader } from '../redux/actions/loader';
import { sendEmail } from '../redux/actions/user';
import { IRootState } from 'interfaces';

const mapStateToProps = (state : IRootState) => ({
  isLoaderActive: state.loader.isLoaderActive
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
  startLoader: () => dispatch(startLoader()),
  sendEmail: (email : string) => sendEmail(email)(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordForm);
