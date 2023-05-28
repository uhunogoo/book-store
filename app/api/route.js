import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'
// export async function GET(request) {
//   const token = request.cookies.get('token');
// }
export async function POST(request) {
  const { cart, liked } = await request.json();
  const name = cart ? 'user-cart' : 'user-liked'; 
  const value = cart || liked;
  
  const cookieStore = cookies();
  
  // Work with previus result
  const previous = cookieStore.get( name );
  const previousValue = previous ? (previous.value.length > 0) ? JSON.parse(previous.value) : [] : [];
  
  // Apply both of new and old values
  const applyedValue = [...previousValue, value];
  
  // Build cookies 
  const token = cookieStore.set({
    name: name, 
    value: JSON.stringify(applyedValue),
    path: '/',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60
  });

  return new Response('Hello, Bookway!', {
    status: 200,
    headers: { 'Set-Cookie': `${token}` }
  });
}