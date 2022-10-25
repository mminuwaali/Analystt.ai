import { createSlice } from '@reduxjs/toolkit';
import type { state, task } from '../../types';

interface payloadType { type: string; payload: task; };

const taskSlice = createSlice({
  name: 'task',
  initialState: <state<task[]>>({ load: 0, error: 0, data: [] }),
  reducers: ({
    add: (state, { payload }: payloadType): void => { state.data.push(payload) },
    remove: (state, { payload: { date } }: payloadType): void => { state.data.filter(item => item.date !== date) },
    update: (state, { payload }: payloadType): void => { state.data.map(item => payload.date == item.date ? { ...payload } : item) },
  }),
});

export default taskSlice.reducer;
export const { add, remove, update } = taskSlice.actions;
