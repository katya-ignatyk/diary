import { IAction } from '../../../interfaces';
import { UserActionTypes } from '../../reducers/user/interfaces';
import { IUserState } from '../../reducers/user/interfaces';

export type ISaveUser = IAction<UserActionTypes.SAVE_USER_DATA, IUserState>