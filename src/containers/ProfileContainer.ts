import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ProfileForm from '../components/settings/ProfileForm';
import { IRootState } from 'interfaces';
import { IProfileData } from '../redux/actions/profile/interfaces';
import { sendProfile } from '../redux/actions/profile';

const mapStateToProps = (state : IRootState) => ({
  userId: state.user.id,
  girl_name: state.profile.girl_name,
  girl_age: state.profile.girl_age,
  boy_name: state.profile.boy_name,
  boy_age: state.profile.boy_age
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
   sendProfile: (profileData : IProfileData) => sendProfile(profileData)(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);