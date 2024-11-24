import { UserDataType } from "@/lib/types";
import StatCard from "./stat-card";
import { BiUser } from "react-icons/bi";
import { Gi3dGlasses } from "react-icons/gi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaCreativeCommonsRemix } from "react-icons/fa6";


export default function UserCards({cardData}:{cardData: UserDataType}) {
  return <div className='grid grid-cols-5 gap-2 my-4'>
  <StatCard title='Total Users' count={cardData.totalUser}><BiUser className='w-full h-full'/></StatCard>
  <StatCard title='Total Referral' count={cardData.totalReferral}><Gi3dGlasses className='w-full h-full'/></StatCard>
  <StatCard title='Active Users' count={cardData.activeUser}><BsFillPersonLinesFill className='w-full h-full'/></StatCard>
  <StatCard title='Creator' count={cardData.creator}><FaCreativeCommonsRemix className='w-full h-full'/></StatCard>
  </div>
}

