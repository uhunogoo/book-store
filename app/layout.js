import './globals.css';
import { Roboto } from 'next/font/google';

import ContentWrapper from 'components/ContentWrapper/ContentWrapper';
import PageHeader from 'components/PageHeader/PageHeader';
import PageFooter from 'components/PageFooter/PageFooter';

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

export const metadata = {
  title: 'Bookway - книжковий клуб',
  description: 'Bookway - книжковий клуб, пропонує кники на будь-який смак',
}

export default function RootLayout({ children }) {
  const fontsVariables = `${ roboto400.variable } ${roboto400_italick.variable} ${roboto700.variable}`;
  return (
    <html lang="en">
      <body className={ fontsVariables }>
        
        <PageHeader />

        <ContentWrapper>
          {children}
        </ContentWrapper>

        <PageFooter/>
      </body>
    </html>
  );
}
