'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { ReactNode, useState } from 'react'



export default function Provider({children}:{children:ReactNode}) {
    const [queryClient] = useState(()=> new QueryClient())
  return (
    <div>
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
         {children}
    </QueryClientProvider>
    </div>
  )
}
