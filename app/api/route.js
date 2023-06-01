import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const target = searchParams.get('target');
  const token = request.cookies.get(target);
  return NextResponse.json( token || false );
}
export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  const id = searchParams.get('id');

  
  // Work with previus result
  const cookieStore = cookies();
  const cart = cookieStore.get( name );
  let previousValue = JSON.parse(cart.value);
  if(name === 'user-cart') {
    previousValue.splice(id, 1);
  } else {
    previousValue = previousValue.filter(item => item.id !== Number(id));
  }
  
  // Build cookies 
  const token = cookieStore.set({
    name: name, 
    value: JSON.stringify(previousValue),
    path: '/',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60
  });

  return new Response( JSON.stringify(previousValue), {
    status: 200,
    headers: { 'Set-Cookie': `${token}` }
  });
}

export async function PUT(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  const id = searchParams.get('id');
  const count = searchParams.get('count');
  
  const cookieStore = cookies();
  
  // Work with previus result
  const previous = cookieStore.get( name );
  const previousValue = JSON.parse(previous.value);
  previousValue[id].count = count;
  
  // Build cookies 
  const token = cookieStore.set({
    name: name, 
    value: JSON.stringify(previousValue),
    path: '/',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60
  });

  return new Response( JSON.stringify(previousValue), {
    status: 200,
    headers: { 'Set-Cookie': `${token}` }
  });
}

export async function POST(request) {
  const { cart, liked } = await request.json();
  const name = cart ? 'user-cart' : 'user-liked'; 
  const value = cart || liked;
  
  const cookieStore = cookies();
  
  // Work with previus result
  const previous = cookieStore.get( name );
  const previousValue = previous ? JSON.parse(previous.value) : [];
  const isExist = previousValue.find( el => el.id === value.id );
  
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

  return new Response( JSON.stringify(!isExist ? applyedValue : false), {
    status: 200,
    headers: { 'Set-Cookie': `${token}` }
  });
}