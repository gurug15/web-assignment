

export interface AdminDataType {
    status: string
    message: string
    dashboard : DashboardType
}

export interface DashboardType {
  userMetrics: MetricsType<UserDataType>
  contentMetrics: MetricsType<ContentDataType>
  engagementMetrics: MetricsType<EngagementDataType>
}

export interface MetricsType<T>{
    daily: T
    monthly: T
    allTime: T
}



export interface UserDataType {
    totalUser: number,
    totalReferral: number,
    activeUser: number,
    creator: number,
    chartData?: ChartDataType[]
}



export interface ContentDataType {
    totalPosts:number 
    totalCategory: number
    totalPostExitCount: number
    totalPostShares: number
    totalViews: number
    totalComments: number
    totalPostBlocked: number
    totalPostDeleted: number
    chartData?: ChartDataType[]
}



export interface EngagementDataType {
    totalLikes: number
    totalViews: number
    totalNotifications: number
    totalMessage: number
    privateChats: number
    chartData?: ChartDataType[]
}


export interface ChartDataType {
    timestamp: Date,
    count: number
}

