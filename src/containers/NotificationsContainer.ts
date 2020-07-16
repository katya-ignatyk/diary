import { connect } from 'react-redux';
import { IRootState } from '../interfaces';
import Notification from '../components/Notification';

const mapStateToProps = (state : IRootState) => ({
  notificationText: state.notifications.notificationText
});

export default connect(mapStateToProps, null)(Notification);
