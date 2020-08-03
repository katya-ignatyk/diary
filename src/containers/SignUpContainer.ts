import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SignUpForm from '../components/SignUpForm';
import { IUserRegistrationData } from 'components/SignUpForm/interfaces';
import { startLoader } from '../redux/actions/loader';
import { signUp } from '../redux/actions/user';
import { IRootState } from '../interfaces';

const mapStateToProps = (state : IRootState) => ({
  isLoaderActive: state.loader.isLoaderActive
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
  fetchUser: (userData : IUserRegistrationData) => signUp(userData)(dispatch),
  startLoader: () => dispatch(startLoader())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
