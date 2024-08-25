import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const URLS = ["http://localhost:5000"]
const baseURL = URLS[0]

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }), // Adjust the base URL if needed
  endpoints: (builder) => ({
    getChats: builder.query({
      query: () => '/chats',
    }),
    getSingleChat: builder.query({
      query: (id) => `/chats/${id}`,
    }),
    addSession: builder.mutation({
      query: (newSessions) => ({
        url: '/sessions',
        method: 'POST',
        body: newSessions,
      }),
    }),
    deleteSession: builder.mutation({
      query: (id) => ({
        url: `/sessions/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetChatsQuery, useGetSingleChatQuery, useAddSessionMutation, useDeleteSessionMutation } = chatApi;
