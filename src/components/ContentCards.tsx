import React from 'react'
import StatCard from './stat-card'
import { ContentDataType } from '@/lib/types'
import { GrView } from 'react-icons/gr'
import { FaDeleteLeft, FaShare } from "react-icons/fa6";
import { IoExit } from 'react-icons/io5';
import { BiComment, BiLock, BiSolidCategory } from "react-icons/bi";
import { GiPostStamp } from "react-icons/gi";



export default function ContentCards({cardData}:{cardData :  ContentDataType}) {
  return (
    <div className='grid grid-cols-5 gap-2 my-4'>
        <StatCard title='Total Posts' count={cardData.totalPosts}><GiPostStamp className='w-full h-full'/></StatCard>
        <StatCard title='Total Category' count={cardData.totalCategory}><BiSolidCategory className='w-full h-full'/></StatCard>
        <StatCard title='Total Exit Count' count={cardData.totalPostExitCount}><IoExit className='w-full h-full'/></StatCard>
        <StatCard title='Total PostShares' count={cardData.totalPostShares}><FaShare className='w-full h-full'/></StatCard>
        <StatCard title='Total Views' count={cardData.totalViews}><GrView className='w-full h-full'/></StatCard>
        <StatCard title='Total Comments' count={cardData.totalComments}><BiComment className='w-full h-full'/></StatCard>
        <StatCard title='Total PostBlocked' count={cardData.totalPostBlocked}><BiLock className='w-full h-full'/></StatCard>
        <StatCard title='Total PostDeleted' count={cardData.totalPostDeleted}><FaDeleteLeft className='w-full h-full'/></StatCard>
        </div>
  )
}


// totalPosts:number 
//     totalCategory: number
//     totalPostExitCount: number
//     totalPostShares: number
//     totalViews: number
//     totalComments: number
//     totalPostBlocked: number
//     totalPostDeleted: number