import { cookies } from 'next/headers'

export async function GET(request) {
  const token = request.cookies.get('user-cart');
}

export async function POST(request) {
  const { cart, liked } = await request.json();
  const name = cart ? 'user-cart' : 'user-liked'; 
  const value = cart || liked;
  
  const cookieStore = cookies();
  
  // Work with previus result
  const previous = cookieStore.get( name );
  const hasCookie = cookieStore.has( name );
  const previousValue = hasCookie ? JSON.parse(previous.value) : [];
  const isExist = previousValue.find( el => el.slug === value.slug );
  
  // Apply both of new and old values
  const applyedValue = !isExist ? [...previousValue, value] : previousValue;
  
  // Build cookies 
  const token = cookieStore.set({
    name: name, 
    value: JSON.stringify(applyedValue),
    path: '/',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60
  });

  return new Response( JSON.stringify(applyedValue), {
    status: 200,
    headers: { 'Set-Cookie': `${token}` }
  });
}