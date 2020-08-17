import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SignUpForm from '../components/registration/SignUpForm';
import { IUserRegistrationData } from 'components/registration/SignUpForm/interfaces';
import { signUp } from '../redux/actions/user';

const mapDispatchToProps = (dispatch : Dispatch) => ({
  signUp: (userData : IUserRegistrationData) => signUp(userData)(dispatch),
});

export default connect(null, mapDispatchToProps)(SignUpForm);
