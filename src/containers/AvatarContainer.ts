import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Avatar from '../components/avatar';
import { IRootState } from '../interfaces';
import { deleteAvatar, updateAvatar } from '../redux/actions/profile';

const mapStateToProps = (state : IRootState) => ({
  id: state.profile.id,
  avatar: state.profile.avatarUrl,
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
  deleteAvatar: (profileId : number) => deleteAvatar(profileId)(dispatch),
  updateAvatar: (image : FormData) => updateAvatar(image)(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);