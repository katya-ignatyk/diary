import { connect } from 'react-redux';
import Button from '../components/shared/Form/Button';
import { IRootState } from 'interfaces';

const mapStateToProps = (state : IRootState) => ({
  isLoaderActive: state.loader.isLoaderActive
});

export default connect(mapStateToProps, null)(Button);
