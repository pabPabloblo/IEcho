import { createSlice } from '@reduxjs/toolkit';

const baseUrl = process.env.REACT_APP_SERVER_URL ||  String.raw`http:\\localhost:5059` // not an actual enviroment variable, set up by dotenv library
;
const pageSize = process.env.REACT_APP_PAGE_SIZE || 5;



const updateCurrentPages = (currentPage, results) => results.slice(0).reverse().slice((currentPage - 1) * pageSize, currentPage * pageSize);
export const reverseStringSlice = createSlice({
  name: 'reverseString',
  initialState: {
    results: [],
    currentResults: [],
    currentPage: 1,
    totalPages: 1,
    error: ''
  },
  reducers: {
    addResult: (state, action) => {
      state.results.push(action.payload);
      state.totalPages = Math.ceil(state.results.length / pageSize);
      state.currentResults = updateCurrentPages(state.currentPage, state.results);
    },
    goToPage: (state, action) => {
      state.currentPage = action.payload;
      state.currentResults = updateCurrentPages(state.currentPage, state.results);
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
});

export const { addResult, goToPage, setError } = reverseStringSlice.actions;

export const addResultAsync = enteredText => dispatch => {
  fetch(`${baseUrl}/iecho?${new URLSearchParams({ text: enteredText })}`).then(response => {
    if (!response.ok) {
      if (response.status === 400)
        return response.json().then(response => Object.assign(response, { status:400 }))
      throw new Error("Network error.");
    }
    return response.json()
  }).then((result) => {
    if (!result.status) { dispatch(addResult(result)) } else { dispatch(setError(result.error)) }
  }).catch(error => dispatch(setError(error.message)));
};

export const selectResults = state => state.reverseString.currentResults;
export const selectCurrentPage = state => state.reverseString.currentPage;
export const selectTotalPages = state => state.reverseString.totalPages;
export const selectError = state => state.reverseString.error;

export default reverseStringSlice.reducer;
