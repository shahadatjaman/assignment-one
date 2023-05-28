import jwt_decode from "jwt-decode";

import { userLoggedIn } from "./authSlice";
import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;

          const decodedUserData = jwt_decode(data.accessToken);

          dispatch(
            userLoggedIn({
              user: decodedUserData,
              accessToken: data.accessToken,
            })
          );
        } catch (err) {
          console.log(err);
          // do nothing
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
