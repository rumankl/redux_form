import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseurl } from '../../constants/apis';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseurl, }),

  endpoints: (builder) => ({

    getTodos: builder.query({

      query: () => ({
        url: '/todos',
        method: 'GET',
     
      })

      // query: (q) => ({ /// this is for moviedb ko 
      //   url: `/${q}`,
      //   method: 'GET',
      //    header:{
      //     authorization:'bearer achgasvdiuiaubgsagv hgasdfgad sdfasjd AAHDDTRD3RFSCG4 .... token ko hai ...'
      //    }


      // })


    })


  })


});



export const { useGetTodosQuery } = todoApi;