export interface IPrivateRouteProps {
  component : React.FC;
  errors : boolean;
  loaded : boolean;
  exact ?: boolean;
  path : string;
}