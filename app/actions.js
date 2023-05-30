'use server';

import { cookies } from 'next/headers';

export async function removeItem(data) {
  const { cart, liked } = data;
  const name = cart ? 'user-cart' : 'user-liked'; 
  const value = cart || liked;
  
  
  // Build cookies 
  const cookieStore = cookies();
  const values = cookieStore.get( name ).value;
  const parsed = JSON.parse( values );
  parsed.splice( value.index, 1 );

  cookieStore.set({
    name: name, 
    value: JSON.stringify( parsed ),
    path: '/',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60
  });

  return parsed;
}
export async function addItem(data) {
  const { cart, liked } = data;
  const name = cart ? 'user-cart' : 'user-liked'; 
  const value = cart || liked;

  const cookieStore = cookies();
  
  // Work with previus result
  const previous = cookieStore.get( name );
  const hasCookie = previous ? previous.value.length > 0 : false;
  const previousValue = hasCookie ? JSON.parse(previous.value) : [];
  const isExist = previousValue.find( el => el.id === value.id );
  
  // Apply both of new and old values
  const applyedValue = !isExist ? [...previousValue, value] : previousValue;

  // Build cookies 
  cookieStore.set({
    name: name, 
    value: JSON.stringify(applyedValue),
    path: '/',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60
  });

  return isExist ? false : value;
}
export async function getItem(name = '') {
  const searchName = name || 'user-cart';
  const cartId = cookies().get( searchName );
  const hasCookie = cartId ? cartId.value.length > 0 : false;
  const cookie = hasCookie ? JSON.parse( cartId.value ) : [];
  return cookie;
}