import Image from 'next/image';
import { range } from '@/utils';
import { SITE_DATA } from '@/data';

import { CommentContainer } from 'components/Comments/Comments';

const COMMENTS = [
  {
    id: Math.random(),
    image: {
      src: '/photo.jpg',
      height: 50,
      width: 50,
      style: {
        objectFit: 'cover',
        objectPosition: '50% 0%',
        height: '50px'
      }
    },
    name: 'Олена Мельничук',
    role: 'Секретар',
    comment:
      'Книжка написана зрозумілою мовою, легко читається, легко сприймається. Кожна рекомендація проілюстрована реальними історіями життя, щоб показати як це працює. Рекомендується до прочитання всім, оскільки кожна людина протягом життя або впливає на інших, або піддається впливу. Після прочитання починаєш бачити те, що раніше навіть не знав!',
    rating: 4,
    date: '2 вересня 2023',
  },
]

function CommentsBlock() {
  const { books } = SITE_DATA;
  return(
    <>
      {range(9).map(item => 
        <div key={item} style={{
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: '74px 1fr',
        }}>
          <div
            style={{
              paddingRight: '1.5rem',
              borderRight: '1px solid var(--border-color)'
            }}
          >
            <Image src={books[0].image.src} width={230} height={315} alt={books[0].image.title} />
          </div>
          <CommentContainer 
            key={item} 
            style={{ paddingBottom: 0 }}
            image={COMMENTS[0].image} 
            name={COMMENTS[0].name} 
            role={COMMENTS[0].role} 
            comment={COMMENTS[0].comment} 
            rating={COMMENTS[0].rating} 
            date={COMMENTS[0].date} 
          />
        </div>
      )}
    </>
  )
}

export default CommentsBlock;