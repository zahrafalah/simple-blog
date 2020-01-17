import jsonPlaceholder from "../apis/jsonPlaceholder";

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

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  //Action
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};
