import { IProfileData } from '../../../redux/actions/profile/interfaces';

export interface IProfileReduxProps {
  id : number;
  girl_name : string;
  girl_age : number;
  boy_name : string;
  boy_age : number;
  updateProfile : (profile : IProfileData) => void;
}