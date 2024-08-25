import React, { useEffect } from 'react'
import { useGetChatsQuery } from '../../chatapi'

export default function HomePage() {

  const { data: chats, error, isLoading } = useGetChatsQuery()

  useEffect(() => {
    
  }, [])


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
       <ul>
      {chats?.map((chat) => (
        <li key={chat._id}>{chat.chatName}</li>
      ))}
    </ul>
    </div>
  )
}
