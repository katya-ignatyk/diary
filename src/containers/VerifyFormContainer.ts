import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import VerifyForm from '../components/registration/VerifyForm';
import { verifySignUp } from '../redux/actions/user';

const mapDispatchToProps = (dispatch : Dispatch) => ({
  verifyUser: (token : string) => verifySignUp(token)(dispatch)
});

export default connect(null, mapDispatchToProps)(VerifyForm);
