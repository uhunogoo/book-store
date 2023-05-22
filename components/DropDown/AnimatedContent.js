import { animated } from '@react-spring/web';

function AnimatedContent({ children, mainContainer, className }) {
  return (<>
    {mainContainer((style, transitionStatus) => (
      <>
        { transitionStatus ? (
          <animated.div 
            style={style} 
            className={ className }
          >
            { children }
          </animated.div>
        ) : null }
      </>
    ))}
  </>)
}

function AnimatedLines({ lines = [], linesClasses = [] }) {
  if ( lines.length === 0 ) return null;

  return (<>
    {lines.map( ({ transform, opacity }, i ) => (
      <animated.div className={linesClasses[i]} key={i} style={{ transform, opacity }} />
    ))}
  </>
  )
}

AnimatedContent.AnimatedLines = AnimatedLines;

export default AnimatedContent;