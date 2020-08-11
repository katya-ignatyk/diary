export interface IPrivateRouteProps {
  component : React.FC;
  errors : boolean;
  loading : boolean;
  exact ?: boolean;
  path : string;
}