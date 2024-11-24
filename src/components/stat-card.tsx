
import React, { ReactNode } from 'react'

interface StatCardType {
  children:ReactNode
  title: string
  count: number
}

export default function StatCard({children,title,count}: StatCardType) {
  return (
    <div className=" m-6 flex flex-col items-center justify-center w-52 h-36 bg-opacity-50 bg-slate-800 rounded-lg shadow-sm">
      <div className="h-10 w-10 text-slate-100">{children}</div>
      <h3
        className="mt-2 text-lg text-slate-300"
       
      >
        {title}
      </h3>
      <p
        className="mt-1 text-2xl font-bold text-slate-200"
        
      >
        {count}
      </p>
    </div>
  )
}


