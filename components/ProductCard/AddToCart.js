import  React from 'react';

import { addItem } from '@/app/actions';
import Button from 'components/Button/Button';
import { CartContext } from '../CartProvider/CartProvider';


function AddToCart({ sku = null }) {
  const { handleCreateTodo } = React.useContext( CartContext );
  const [ itemInCart, setItemInCart ] = React.useState( false );
  const [isPending, startTransition] = React.useTransition();

  function handleClick() {
    startTransition(async () => {
      const action = { cart: { id: sku, count: 1 } }
      const data = await addItem( action );
      
      data && handleCreateTodo( data );
      setItemInCart( true );
    })
  }

  return (
    <Button 
      onClick={ handleClick }
      disabled={ itemInCart }
      title="Купити" 
      visual="outline"
    >
      <span>Купити</span>
    </Button>
  );
}

export default AddToCart;