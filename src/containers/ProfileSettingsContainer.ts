import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ProfileForm from '../components/settings/ProfileSettings';
import { IRootState } from 'interfaces';
import { updateProfile } from '../redux/actions/profile';
import { IProfileData } from 'redux/actions/profile/interfaces';

const mapStateToProps = (state : IRootState) => ({
  id: state.profile.id,
  girl_name: state.profile.girl_name,
  girl_age: state.profile.girl_age,
  boy_name: state.profile.boy_name,
  boy_age: state.profile.boy_age,
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
  updateProfile: (profileData : IProfileData) => updateProfile(profileData)(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);