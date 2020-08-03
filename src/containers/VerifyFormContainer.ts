import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import VerifyForm from '../components/VerifyForm';
import { verifyUser } from '../redux/actions/user';
import { startLoader } from '../redux/actions/loader';
import { IRootState } from 'interfaces';

const mapStateToProps = (state : IRootState) => ({
  isLoaderActive: state.loader.isLoaderActive
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
  startLoader: () => dispatch(startLoader()),
  verifyUser: (token : string) => verifyUser(token)(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(VerifyForm);
