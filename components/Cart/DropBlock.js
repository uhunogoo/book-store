import { useChain, useSpringRef, useSprings, useTransition } from '@react-spring/web';
import { easings } from '@react-spring/web'

import AnimatedContent from 'components/DropDown/AnimatedContent';

function DropContainer({ children, status, className, lines = [] }) {
  const apllyedClass = className ? `${ className }` : '';

  const linesAPI = useSpringRef();
  const time = 300;
  const [styledLines, api] = useSprings(
    lines.length,
    i => ({
      ref: linesAPI,
      opacity: status ? 1 : 0, 
      transform: `scale(${status ? 1 : 0})`,
      delay: status ? delay(i) : time - delay(i),
      config: {
        duration: time,
        easing: status ? easings.easeOutSine : easings.easeInSine,
      },
    }),
    [status]
  );
  function delay(i) {
    const d = ( i === 0 || i === 1 ) ? 0 : time - time * 0.1;
    return d; 
  }

  const dropContainerAPI = useSpringRef();
  const mainContainer = useTransition(status, {
    ref: (lines.length !== 0) && dropContainerAPI,
    from: { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' },
    enter: { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
    leave: { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' },
    config: {
      duration: 600,
      easing: easings.easeOutSine,
    },
  });
  
  useChain( 
    status ? [ dropContainerAPI, linesAPI ] : [ linesAPI, dropContainerAPI ], 
    [0, 0.3],
  )
  

  return (
    <AnimatedContent
      mainContainer={mainContainer}
      className={ apllyedClass }
    >
      <AnimatedContent.AnimatedLines 
        lines={ styledLines }
        linesClasses={ lines }
      />
      { children }
    </AnimatedContent>
  );
} 

export default DropContainer;