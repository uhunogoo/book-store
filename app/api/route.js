import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'
// export async function GET(request) {
//   const token = request.cookies.get('token');
// }
export async function POST(request) {
  const res = await request.json();
  
  const cookieStore = cookies();
  const token = cookieStore.set(
    'token', 
    JSON.stringify(res)
  );
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `${token}` },
  });
}