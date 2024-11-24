import React from 'react'
import StatCard from './stat-card'
import { GrView } from 'react-icons/gr'
import { IoNotifications } from 'react-icons/io5'
import { FaMessage } from 'react-icons/fa6'
import { BsChatSquareDotsFill } from 'react-icons/bs'
import { EngagementDataType } from '@/lib/types'
import { BiLike } from 'react-icons/bi'

export default function EngagementCards({cardData}:{cardData:EngagementDataType}) {
  return (
    <div className='grid grid-cols-5 gap-2 my-4'>
        <StatCard title='Total Likes' count={cardData.totalLikes}><BiLike className='w-full h-full'/></StatCard>
        <StatCard title='Total Views' count={cardData.totalViews}><GrView className='w-full h-full'/></StatCard>
        <StatCard title='Total Notification' count={cardData.totalNotifications}><IoNotifications className='w-full h-full'/></StatCard>
        <StatCard title='Total Message' count={cardData.totalMessage}><FaMessage className='w-full h-full'/></StatCard>
        <StatCard title='Private Chats' count={cardData.privateChats}><BsChatSquareDotsFill className='w-full h-full'/></StatCard>
        </div>
  )
}
