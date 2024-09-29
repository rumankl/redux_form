import React from 'react'
import { useGetTodosQuery } from './todosApi';

const Todos = () => {
  const { isLoading, data, error, isError, isFetching } = useGetTodosQuery();
  // const { isLoading, data, error, isError, isFetching } = useGetTodosQuery('popular'); //themoviedb ko

  // const { isLoading, data,  } = useGetTodosQuery('',{pollingInterval:5000}); ///pollinginterval ko lai 
  

  if (isLoading){
    return <h1>Loading...</h1>
  }
  console.log(data);
   /* const f = () => ({
    name: 'ram'
   });
   const c = f();
   console.log(c);*/

  return (
    <div>
    {data && data.todos.map(({todo,id})=>{
      return <h1 key={id}>{todo}</h1>
    })}
    </div>
  )
}

export default Todos