import { createSlice } from '@reduxjs/toolkit';

export const signCandidate = createSlice({
    name: 'signCandidate',
    initialState: {
        value: 0,
        onLine: 0
    },
    reducers: {
        addSignCandidateValue: (state, { payload }) => {
            state.value = payload;
        },
        addSignCandidateOnLineValue: (state, { payload }) => {
            state.onLine = payload;
        },
        cleanSignCandidateValues: (state) => {
            state.value = 0;
            state.onLine = 0;
        }
    }
});

export const { addSignCandidateValue, addSignCandidateOnLineValue, cleanSignCandidateValues } = signCandidate.actions;

export default signCandidate.reducer;