import { content, engagement, user } from "@/components/svgs";

export const sidebarLinks = [
    { 
      imgURL: user,
      route: '/',
      label: 'User',
    },
  
    {
      imgURL: content,
      route: '/content',
      label: 'Content',
    },
    { 
      imgURL: engagement,
      route: '/engagement',
      label:'Engagement'
    }
  ];