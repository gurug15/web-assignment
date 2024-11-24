'use client'
import DailyChart from "@/components/charts/DailyChart";
import ContentCards from "@/components/ContentCards";
import { useData } from "@/hooks/useData";
import { ContentDataType } from "@/lib/types";


export default function Content() {
  const { data, isLoading, isError }  = useData();
  if(isError) return <h1>404 - Chart Not Found</h1>
  if(isLoading) return <h1>IS LOADING ....</h1>
  const dailyData = data && data?.dashboard?.contentMetrics.daily
  const monthlyData = data?.dashboard.contentMetrics.monthly
  const allTimeData = data?.dashboard.contentMetrics.allTime

  
  return (
    <div className='max-w-7xl overflow-clip'>
      
      {dailyData && monthlyData && <DailyChart dailyData={dailyData} monthlyData={monthlyData}/>}
      <div className='w-[1220px] h-[1px] bg-slate-500 my-1 ml-4'></div>
      <div className='w-full text-white font-bold ml-4 my-3 text-2xl px-4'>
          All Time Data
      </div>
      <div className='w-[1220px] h-[1px] bg-slate-500 my-1 ml-4'></div>
      {allTimeData && (<div className='mx-4'><ContentCards cardData={allTimeData as unknown as ContentDataType}/></div>)}
      <div className='max-w-7xl h-[1px] bg-slate-500 my-1'></div>
    </div>
  )
}
