import React from 'react'

export default function ChatPage() {
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
