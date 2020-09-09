import { connect } from 'react-redux';
import { IRootState } from '../interfaces';
import Notes from '../components/notes';

const mapStateToProps = (state : IRootState) => ({
  notes: state.notes,
});

export default connect(mapStateToProps)(Notes);
