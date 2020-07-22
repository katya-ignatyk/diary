import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootState } from '../interfaces';
import { deleteNotification } from '../redux/actions/notifications/index';
import Notification from '../components/Notification';

const mapStateToProps = (state : IRootState) => ({
  notifications: state.notifications
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
  deleteNotification: (index : number) => dispatch(deleteNotification(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
