import jsonPlaceholder from "../apis/jsonPlaceholder";

//Using redux-thunk as a middleware section14
export const fetchPosts = async () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response
  });
};
