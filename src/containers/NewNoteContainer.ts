import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IRootState } from '../interfaces';
import { createNote } from '../redux/actions/notes';
import newNote from '../components/notes/newNote';
import { INoteState } from '../redux/reducers/notes/interfaces';

const mapStateToProps = (state : IRootState) => ({
  profileId: state.profile.id
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
  createNote: (note : Partial<INoteState>, profileId : number) => createNote(note, profileId)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(newNote);
