export interface IAppProps {
  isErrors : boolean;
  isLoading : boolean;
  fetchUser : () => void;
}