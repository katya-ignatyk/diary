import { connect } from 'react-redux';
import { Dispatch } from "redux";
import SignInForm from '../components/auth/SignInForm';
import { signIn } from '../redux/actions/user';
import { IUserAuthData } from '../redux/actions/user/interfaces';

const mapDispatchToProps = (dispatch : Dispatch) => ({
  signIn: (userData : IUserAuthData) => signIn(userData)(dispatch),
});

export default connect(null, mapDispatchToProps)(SignInForm);