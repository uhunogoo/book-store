import { Rochester, Roboto } from 'next/font/google';
const rochester400 = Rochester({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  weight: '400',
  variable: '--rochester'
});
const roboto400 = Roboto({ 
  subsets: ['cyrillic'],
  display: 'swap',
  style: 'normal',
  weight: '400',
  variable: '--roboto'
})
const roboto400_italick = Roboto({ 
  subsets: ['cyrillic'],
  display: 'swap',
  style: 'italic',
  weight: '400',
  variable: '--roboto-italic'
})
const roboto700 = Roboto({
  subsets: ['cyrillic'],
  display: 'swap',
  style: 'normal',
  weight: '700',
  variable: '--roboto-bold'
})
 
export { rochester400, roboto400, roboto400_italick, roboto700 };