import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import App from '../components/App';
import { fetchUser } from '../redux/actions/user';
import { IRootState } from 'interfaces';

const mapStateToProps = (state : IRootState) => ({
  isLoading: state.user.isLoading,
  isErrors: state.user.isErrors
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
  fetchUser: () => fetchUser()(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
