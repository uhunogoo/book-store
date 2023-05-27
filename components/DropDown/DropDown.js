"use client";

import React from 'react';
import { gsap } from 'gsap';
import { CSSTransition } from 'react-transition-group';

import styles from './drop-down.module.css'

import DecoratedBooks from '../DecoratedBooks/DecoratedBooks';
import DropDownContent from './DropDownContent';
import Button from '../Button/Button';
import { useClickOutside } from '@/hooks/useClickOutside';
import useToggle from '@/hooks/useToggle';

gsap.registerEffect({
  name: "openMenu",
  effect(targets, { bgX = 0, ...values }) {
    const params = {
      yPercent: 100,
      ...values
    };

    const dropDown = targets;
    const q = gsap.utils.selector(dropDown);  
    const listItems = q('a');
    
    // Reset before animation start
    gsap.config({ force3D: false });
    gsap.set(listItems, { opacity: 1, yPercent: 0, x: 0, scale: 1, rotate: '0deg' });
    gsap.set(q('.gsapBooks'), { skewX: '0deg', backgroundPositionX: '-211px' });
    
    const animation = gsap.timeline();
    animation.fromTo(q('.gsapDorp'), 
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      }, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1,
        ease: 'power3'
      }
    );
    animation.from(q('.gsapBooks'), {
      skewX: '10deg',
      backgroundPositionX: '-=' + bgX,
      ease: 'power1',
      duration: 1
    }, 0);
    animation.from(listItems, {
      ...params,
      ease: 'power4',
      duration: 0.6,
      stagger: distributeByPosition({
        amount: 0.4,
        axis: "y",
        from: "start" 
      })
    }, 0);

    return animation;
  }
});
gsap.registerEffect({
  name: "closeMenu",
  effect(targets, {bgX = 0, ...values}) {
    const params = {
      yPercent: 100,
      ...values
    };

    const dropDown = targets;
    const q = gsap.utils.selector(dropDown);  
    const listItems = q('a');
    const animation = gsap.timeline();
    animation.to(listItems, {
      ...params,
      opacity: 0,
      ease: 'power3.in',
      stagger: distributeByPosition({
        amount: 0.3,
        axis: "y",
        from: "end" 
      })
    });
    animation.fromTo(q('.gsapDorp'), 
      { 
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      }, { 
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 0.6,
        ease: 'power1.in'
      }, 0.2
    );

    return animation;
  }
});

function DropDown({ data }) {
  const ctx = React.useMemo( () => gsap.context(() => {}), []);

  const [ dropDownStatus, setDropDownStatus ] = useToggle( false );
  const ref = useClickOutside( dropDownStatus, setDropDownStatus );

  const activeClass = dropDownStatus ? styles.active : ''
  const buttonClass = `${styles.dropDownButton} ${activeClass}`;

  React.useLayoutEffect(() => {
    const animationParams = {
      yPercent: 140,
      scale: 1.02,
      transformOrigin: '0% 100%',
      bgX: 200
    };
    ctx.add('open', (node) => {
      return gsap.effects['openMenu']( node, animationParams);
    });
    ctx.add('close', (node) => {
      return gsap.effects['closeMenu']( node, animationParams);
    });

    return () => ctx.revert();
  }, []);

  const handleOnEnter = (node) => ctx.open( node );
  const handleOnExit = (node) => ctx.close( node );

  return (
    <>
      <div ref={ref} className={ styles.dropContainer }>
        <Button
          onClick={ setDropDownStatus }
          ariaLabel="Подивитись каталог"
          title="Подивитись каталог" 
          type="button"
          className={ buttonClass }
        >
          Каталог
          {' '}
          <span className={ styles.arrow }></span>
        </Button>

        <CSSTransition
          in={ dropDownStatus }
          unmountOnExit
          onEnter={handleOnEnter}
          onExit={handleOnExit}
          timeout={800}
        >
          <DropDownContent data={ data } className="gsapDorp">
            <DecoratedBooks className="gsapBooks" style={{ margin: '1.75rem -1.2rem -1.5rem -1.2rem' }} />
          </DropDownContent>
        </CSSTransition>
      </div>
    </>
  );
}

/*
pass in an object with any of the following optional properties (just like the stagger special object):
{
  amount: amount (in seconds) that should be distributed
  from: "center" | "end" | "edges" | start" | index value (integer)
  ease: any ease, like "power1"
  axis: "x" | "y" (or omit, and it'll be based on both the x and y positions)
}
*/
function distributeByPosition(vars) {
	var ease = vars.ease && gsap.parseEase(vars.ease),
		from = vars.from || 0,
		base = vars.base || 0,
		axis = vars.axis,
		ratio = {center: 0.5, end: 1, edges:0.5}[from] || 0,
		distances;
	return function(i, target, a) {
		var l = a.length,
			originX, originY, x, y, d, j, minX, maxX, minY, maxY, positions;
		if (!distances) {
			distances = [];
			minX = minY = Infinity;
			maxX = maxY = -minX;
			positions = [];
			for (j = 0; j < l; j++) {
				d = a[j].getBoundingClientRect();
				x = (d.left + d.right) / 2; //based on the center of each element
				y = (d.top + d.bottom) / 2;
				if (x < minX) {
					minX = x;
				}
				if (x > maxX) {
					maxX = x;
				}
				if (y < minY) {
					minY = y;
				}
				if (y > maxY) {
					maxY = y;
				}
				positions[j] = {x:x, y:y};
			}
			originX = isNaN(from) ? minX + (maxX - minX) * ratio : positions[from].x || 0;
			originY = isNaN(from) ? minY + (maxY - minY) * ratio : positions[from].y || 0;
			maxX = 0;
			minX = Infinity;
			for (j = 0; j < l; j++) {
				x = positions[j].x - originX;
				y = originY - positions[j].y;
				distances[j] = d = !axis ? Math.sqrt(x * x + y * y) : Math.abs((axis === "y") ? y : x);
				if (d > maxX) {
					maxX = d;
				}
				if (d < minX) {
					minX = d;
				}
			}
			distances.max = maxX - minX;
			distances.min = minX;
			distances.v = l = (vars.amount || (vars.each * l) || 0) * (from === "edges" ? -1 : 1);
			distances.b = (l < 0) ? base - l : base;
		}
		l = (distances[i] - distances.min) / distances.max;
		return distances.b + (ease ? ease(l) : l) * distances.v;
	};
}

export default React.memo( DropDown );