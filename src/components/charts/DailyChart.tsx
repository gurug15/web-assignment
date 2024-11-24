'use client'
import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartDataType, ContentDataType, EngagementDataType, UserDataType } from '@/lib/types';
import EngagementCards from '../EngagementCards';
import { usePathname } from 'next/navigation';
import ContentCards from '../ContentCards';
import UserCards from '../UserCards';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


interface ProcessedDatatype {
  daily: ChartData<'bar'> | null
  monthly: ChartData<'bar'> | null
}

interface CardDataType {
  daily: EngagementDataType | ContentDataType | UserDataType | null
  monthly: EngagementDataType | ContentDataType | UserDataType | null
}

type DailyDataType = EngagementDataType | ContentDataType | UserDataType
  




const DailyChart = ({dailyData,monthlyData}:{dailyData: DailyDataType ,monthlyData: DailyDataType}) => {
  const pathname = usePathname()
  const [activeView, setActiveView] = useState<'daily'|'monthly'>('daily');
  const [processedData, setProcessedData] = useState<ProcessedDatatype>({ daily: null, monthly: null });
  const [cardData, setCardData] = useState<CardDataType>({ daily: null, monthly: null }) 
   
  
  const dailyChartData = dailyData?.chartData
  const monthlyChartData = monthlyData?.chartData
  
  

  const processDailyData = (data:ChartDataType[]) => {

    const hourlyBuckets = Array(24).fill(0);
    
    data.forEach(item => {
      const hour = new Date(item.timestamp).getHours();
      hourlyBuckets[hour] += item.count;
    });

    return {
      labels: Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`),
      datasets: [{
        label: 'Hourly Count',
        data: hourlyBuckets,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }]
    };
  };

  const processMonthlyData = (data: ChartDataType[]) => {
    const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    const dailyBuckets = Array(daysInMonth).fill(0);
    
    data.forEach(item => {
      const day = new Date(item.timestamp).getDate() - 1;
      dailyBuckets[day] += item.count;
    });

    return {
      labels: Array.from({ length: daysInMonth }, (_, i) => `Day ${i + 1}`),
      datasets: [{
        label: 'Daily Count',
        data: dailyBuckets,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      }]
    };
  };

  useEffect(() => {
    
    setCardData({
      daily: dailyData,
      monthly: monthlyData
    })
    
    setProcessedData({
      daily: processDailyData(dailyChartData as unknown as ChartDataType[]),
      monthly: processMonthlyData(monthlyChartData as unknown as ChartDataType[])
    });
  }, [dailyData,monthlyData]);


  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="mb-4 flex gap-4">
        <button 
          onClick={() => setActiveView('daily')}
          className={`px-4 py-2 rounded ${
            activeView === 'daily' 
              ? 'bg-slate-200 ' 
              : 'bg-slate-500 text-white'
          }`}
        >
          Daily View
        </button>
        <button 
          onClick={() => setActiveView('monthly')}
          className={`px-4 py-2 rounded ${
            activeView === 'monthly' 
              ? 'bg-slate-200' 
              : 'bg-slate-500 text-white'
          }`}
        >
          Monthly View
        </button>
      </div>
      
      <div className='max-w-7xl h-[1px] bg-slate-500 my-1'></div>

      {cardData[activeView] && (
  pathname === '/' ? (
    <UserCards cardData={cardData[activeView] as UserDataType}/>
  ) : pathname === '/content' ? (
    <ContentCards cardData={cardData[activeView] as ContentDataType}/>
  ) : pathname === '/engagement' ? (
    <EngagementCards cardData={cardData[activeView] as EngagementDataType} />
  ) : null
)}

        
      <div className='max-w-7xl h-[1px] bg-slate-500 my-1 mb-4'></div>

      <div className=" p-4 rounded-lg shadow bg-slate-800">
        <div className="h-[600px]">
          {processedData[activeView] && (
            <Bar className='w-full h-full bg-slate-800'
              data={processedData[activeView]} 
             
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyChart;