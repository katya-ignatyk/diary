import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ProfileLayout } from '../layouts/ProfileLayout';
import { IRootState } from '../interfaces';
import { getAllNotes } from '../redux/actions/notes';

const mapStateToProps = (state : IRootState) => ({
  profileId: state.profile.id,
  boy_name: state.profile.boy_name,
  girl_name: state.profile.girl_name,
  username: state.user.username
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
  getNotes: (profileId : number) => getAllNotes(profileId)(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileLayout);
