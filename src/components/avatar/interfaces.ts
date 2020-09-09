export interface IAvatarReduxProps {
  id : number;
  avatar : string;
  deleteAvatar : (id : number) => Promise<void>;
  updateAvatar : (image : FormData) => void;
}