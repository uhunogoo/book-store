import * as ScrollArea from '@radix-ui/react-scroll-area';

import styles from './style.module.css';
import React from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Button from 'components/Button/Button';
import { SITE_DATA } from '@/data';

function SelectBlock() {
  const {dropDown} = SITE_DATA;
  
  const genres = React.useMemo(() => {
    const genres = {};
    dropDown.forEach((genre) => {
      genres[genre.title] = false;
      return genres;
    });
    
    return genres;
  }, [dropDown]); 

  const [
    pizzaToppings,
    setPizzaToppings
  ] = React.useState(genres);
  const toppingsList = Object.keys(genres);

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <Button className={styles.IconButton} aria-label="Customise options">
          Жанри
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.DropdownMenuContent} sideOffset={5}>
          <ScrollArea.Root className={styles.ScrollAreaRoot}>
            <ScrollArea.Viewport className={styles.ScrollAreaViewport}>
              <form>
                <fieldset>
                  {toppingsList.map(option => (
                    <div key={option}>
                      <input
                        type="checkbox"
                        id={option}
                        value={option}
                        checked={pizzaToppings[option] === true}
                        onChange={event => {
                          setPizzaToppings({
                            ...pizzaToppings,
                            [option]: event.target.checked,
                          })
                        }}
                      />
                      <label htmlFor={option}>
                        {option}
                      </label>
                    </div>
                  ))}
                </fieldset>
              </form>
            </ScrollArea.Viewport>

            <ScrollArea.Scrollbar className={styles.ScrollAreaScrollbar} orientation="vertical">
              <ScrollArea.Thumb className={styles.ScrollAreaThumb} />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className={styles.ScrollAreaCorner} />
          </ScrollArea.Root>

          <DropdownMenu.Arrow className={styles.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default SelectBlock; 