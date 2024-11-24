import { AdminDataType } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

export function useData() {
    return useQuery({
        queryKey: ['admin'],
        queryFn: async () => {
            try {
                const res = await fetch('/api/admin/dashboard', { cache: 'no-cache'});
                
                if (!res.ok) {
                    throw new Error(`API error: ${res.status}`);
                }
                
                const data = await res.json();
                return data as AdminDataType;
            } catch (error) {
                console.error('Data fetching error:', error);
                throw error;
            }
        },
    });
}
