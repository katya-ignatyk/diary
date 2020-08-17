import { IProfileData } from '../../../redux/actions/profile/interfaces';

export interface IProfileReduxProps {
  userId : number;
  girl_name : string;
  girl_age : number;
  boy_name : string;
  boy_age : number;
  sendProfile : (profile : IProfileData) => void;
}