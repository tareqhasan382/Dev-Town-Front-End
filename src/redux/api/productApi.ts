import { baseApi } from "./baseApi";
// /auth/login
export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addProduct: build.mutation({
      query: (data) => ({
        url: "/api/v1/addProduct",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["product"],
    }),
    getProducts: build.query({
      query: () => ({
        url: "/api/v1/products",
        method: "GET",
      }),
    }),
    userProfile: build.query({
      query: () => ({
        url: "/api/users",
        method: "GET",
      }),
    }),
  }),
});
//users
export const {
  useAddProductMutation,
  useGetProductsQuery,
  useUserProfileQuery,
} = productApi;