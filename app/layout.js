import './globals.css';
import { roboto400, roboto400_italick, roboto700 } from '@/fonts';

import ContentWrapper from 'components/ContentWrapper/ContentWrapper';
import PageHeader from 'components/PageHeader/PageHeader';
import PageFooter from 'components/PageFooter/PageFooter';
import Scroll from 'components/Scroll/Scroll';
import CartProvider from '@/components/CartProvider/CartProvider';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'Bookway - книжковий клуб',
  description: 'Bookway - книжковий клуб, пропонує кники на будь-який смак',
}

export default function RootLayout({ children }) {
  const fontsVariables = `${ roboto400.variable } ${roboto400_italick.variable} ${roboto700.variable}`;
  const cookiesList = cookies();
  const cart = cookiesList.get('user-cart');
  const cartCookie = cart ? JSON.parse(cart.value) : [];
  return (
    <html lang="en">
      <body className={ fontsVariables }>
        <CartProvider cartCookie={cartCookie}>
          <Scroll style={{ '--scroll-thumb-color': 'var(--text-dark)' }}>
            <PageHeader />

            <ContentWrapper style={{ minHeight: '60vh' }}>
              {children}
            </ContentWrapper>

            <PageFooter/>
          </Scroll>
        </CartProvider>
      </body>
    </html>
  );
}
