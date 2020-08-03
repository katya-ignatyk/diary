import { connect } from 'react-redux';
import { Dispatch } from "redux";
import SignInForm from '../components/SignInForm';
import { signIn } from '../redux/actions/user';
import { IUserAuthData } from '../components/SignInForm/interfaces';
import { startLoader } from '../redux/actions/loader';
import { IRootState } from '../interfaces';

const mapStateToProps = (state : IRootState) => ({
  isLoaderActive: state.loader.isLoaderActive
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
  fetchUser: (userData : IUserAuthData) => signIn(userData)(dispatch),
  startLoader: () => dispatch(startLoader())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);