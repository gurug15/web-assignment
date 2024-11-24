import { AdminCharts } from '@/components/charts/AdminCharts'
import StatCard from '@/components/stat-card'
import { SigmaSquare } from 'lucide-react'
import React from 'react'

export default function Engagement() {
  return (
    <div>
      <StatCard title='totalPostExitCount' count={10}><SigmaSquare className='w-full h-full'/></StatCard>
      <AdminCharts/>
    </div>
  )
}