import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Note from '../components/notes/note';
import { IRootState } from '../interfaces';
import { removeNote, updateNote } from '../redux/actions/notes';
import { INoteState } from 'redux/reducers/notes/interfaces';

const mapStateToProps = (state : IRootState) => ({
  profileId: state.profile.id
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
  updateNote: (note : INoteState) => updateNote(note)(dispatch),
  deleteNote: (profileId : number, id : number, index : number) => removeNote(profileId, id, index)(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);
