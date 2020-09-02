import { connect } from 'react-redux';
import Header from '../components/shared/Header';
import { IRootState } from 'interfaces';

const mapStateToProps = (state : IRootState) => ({
  avatar: state.profile.avatarUrl
});

export default connect(mapStateToProps)(Header);