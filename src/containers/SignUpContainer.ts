import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchUser, startLoader, stopLoader } from '../redux/actions/user/index'
import SignUpForm from '../components/SignUpForm';
import { IRootState } from '../interfaces';
import { IUser } from 'components/SignUpForm/interfaces';


const mapStateToProps = (state: IRootState) => ({
  isVerifyEmailSend: state.user.isVerifyEmailSend,
  isEmailExists: state.user.isEmailExists,
  isLoaderActive: state.user.isLoaderActive
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchUser: (userData: IUser) => fetchUser(userData)(dispatch),
  startLoader: () => dispatch(startLoader()),
  stopLoader: () => dispatch(stopLoader())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)