import taskSlice from './slice/task';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({ reducer: { task: taskSlice } });
