import { IAction } from "interfaces";
import { IProfileState } from "redux/actions/profile/interfaces";

export type ISaveProfile = IAction<IProfileActionTypes.SAVE_PROFILE, IProfileState>

export enum IProfileActionTypes {
  SAVE_PROFILE = 'SAVE_PROFILE'
}