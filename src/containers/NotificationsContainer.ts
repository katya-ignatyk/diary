import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Notification from '../components/shared/Notification';
import { IRootState } from '../interfaces';
import { deleteNotification } from '../redux/actions/notifications/index';

const mapStateToProps = (state : IRootState) => ({
  notifications: state.notifications
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
  deleteNotification: (index : number) => dispatch(deleteNotification(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
