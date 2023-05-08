import styles from './style.module.css';

import TextInput from '../TextInput/TextInput';

function TextField({ type = 'text', value, setValue, ...delegated }) {
  return (
    <fieldset className={styles.group}>
      <TextInput
        { ...delegated }
        type={ type } 
        required={true}
        value={ value }
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </fieldset>
  );
}

export default TextField;