import { NextResponse } from "next/server";




export async function GET() {
    try {
        const response = await fetch('https://api.socialverseapp.com/admin/dashboard',{
            headers:{
              'Content-Type': "application/json"
            }
        }
        );
        const data = await response.json()


        return NextResponse.json(data)
          
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: "Failed to Fetch data"}, {status: 500})
    }
}