import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

//Using redux-thunk as a middleware section14
// export const fetchPosts = () => {
//   return async function(dispatch, getState) {
//     const response = await jsonPlaceholder.get("/posts");
//     //Action
//     dispatch({
//       type: "FETCH_POSTS",
//       payload: response
//     });
//   };
// };

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  //Action
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};
// before memoization
// export const fetchUser = id => async dispatch => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data
//   });
// };

//Memoizing the action Creator to avoid making multiple request to the network
export const fetchUser = id => dispatch => {
  _fetchUser(id, dispatch);
};
//OneTime Memoization to avoid network request for 100 times.
//_ at the begining of the function name means this is a private
//function and other engineers should not make a request unless they
//know what they are doing
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
});
