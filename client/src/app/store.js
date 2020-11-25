import { configureStore } from '@reduxjs/toolkit';
import reverseStringReducer from '../slices/reverseStringSlice';

export default configureStore({
  reducer: {
    reverseString: reverseStringReducer,
  },
});
