import { produce } from 'immer';
import { SITE_DATA } from '@/data';
const { books, series } = SITE_DATA; 
const combinedBooks = books.concat( series );


export function reducer(todos, action) {
  return produce(todos, (draftTodos) => {
    switch (action.type) {
      case 'create-cart': {
        draftTodos.push({
          ...combinedBooks[action.value.id],
          count: Number(action.value.count),
        });
        break;
      }

      case 'change-count': {
        draftTodos[action.value.index].count = action.value.count
        break;
      }

      case 'delete-cart-item': {
        draftTodos.splice(action.index, 1);
        break;
      }
    }
  });
}