
import { Toast } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { selectError, setError } from '../../slices/reverseStringSlice'
import styles from './error.module.css';

export function Error() {
  const error = useSelector(selectError);
  const dispatcher = useDispatch();

  const markAsHandled = () => dispatcher(setError(''));
  const shouldShow = !!error;
  return shouldShow && (
    <Toast autohide animation={true} delay={1000} show={shouldShow} onClose={markAsHandled} className={styles.errorToast} >
      <Toast.Header  >
        <strong className="mr-auto">Error</strong>
      </Toast.Header>
      <Toast.Body>{error}</Toast.Body>
    </Toast>);
}