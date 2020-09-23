import { connect } from 'react-redux';
import { IRootState } from 'interfaces';
import { PublicLayout } from '../layouts/PublicLayout';

const mapStateToProps = (state : IRootState) => ({
  isLoaded: state.user.isLoaded,
  isErrors: state.user.isErrors
});

export default connect(mapStateToProps)(PublicLayout);
