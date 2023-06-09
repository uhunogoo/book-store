import { produce } from 'immer';
import { SITE_DATA } from '@/app/lib/data';
const { books, series } = SITE_DATA; 
const combinedBooks = books.concat( series );


export function reducer(todos, action) {
  return produce(todos, (draftTodos) => {
    switch (action.type) {
      case 'create-list': {
        const generated = action.value.map( item => {
          return ({
            ...combinedBooks[item.id],
            count: Number(item.count)
          });
        });
        draftTodos.splice(0, draftTodos.length);
        draftTodos.push( ...generated );
        break;
      }
      case 'add-to-list': {
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
      case 'delete-fav-item': {
        const index = draftTodos.findIndex( item => item.id === action.id );
        draftTodos.splice(index, 1);
        break;
      }
    }
  });
}