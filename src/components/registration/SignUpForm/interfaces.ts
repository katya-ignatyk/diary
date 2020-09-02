import { IUserRegistrationData } from '../../../redux/actions/user/interfaces';

export interface IUserRegistrationReduxProps {
  signUp : (user : IUserRegistrationData) => Promise<void>;
}
