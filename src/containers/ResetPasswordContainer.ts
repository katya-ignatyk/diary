import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ResetPasswordForm from '../components/ResetPasswordForm';
import { startLoader } from '../redux/actions/loader';
import { resetPassword } from '../redux/actions/user';
import { IRootState } from 'interfaces';

const mapStateToProps = (state : IRootState) => ({
  isLoaderActive: state.loader.isLoaderActive
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
  startLoader: () => dispatch(startLoader()),
  resetPassword: (password : string, token : string) => resetPassword(password, token)(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);
