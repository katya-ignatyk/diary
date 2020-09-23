export interface IAppProps {
  isErrors : boolean;
  isLoaded : boolean;
  fetchUser : () => Promise<boolean>;
}