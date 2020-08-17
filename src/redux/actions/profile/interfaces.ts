export interface IProfileState {
  id : number;
  girl_name : string;
  girl_age : number;
  boy_name : string;
  boy_age : number;
}

export interface IProfileData {
  userId : number;
  profile : {
    girl_name : string,
    girl_age : number,
    boy_name : string,
    boy_age : number,
  };
}