import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com', }),

  endpoints: (builder) => ({

    getPosts: builder.query({

      query: () => ({
        url: '/posts',
        method: 'GET',


      })





    })


  })


});



export const { useGetPostsQuery } = todoApi;