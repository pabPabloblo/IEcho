import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addResultAsync } from '../../slices/reverseStringSlice';
import styles from './input.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


export function Input() {
  const dispatch = useDispatch();
  const [enteredText, setEnteredText] = useState('');
  const [localError, setLocalError] = useState(false);

  const onSubmit = (event) => {    
    event.preventDefault()
    if(enteredText && !localError) {
      console.log(enteredText)
      console.log(localError)
     dispatch(addResultAsync(enteredText))
     setEnteredText('')
    }
     return false;
   };

   const onTextChange = e => {
      const enteredText = e.target.value;
      setEnteredText(enteredText);
      setLocalError(typeof enteredText === 'string' && enteredText.match(/(\d|{|})/g))
      console.log(enteredText)
     
    }

  return (
    <InputGroup >    
      <Form inline className="w-100 justify-content-center" onSubmit={onSubmit} >
        <FormControl type="text"
          className="col-6 mr-3"
          aria-label="Send text"
          value={enteredText}
          placeholder="Insert text"
          onChange={onTextChange}
          isInvalid={localError}
        />
        <Button
        type="submit"
        className={`${styles.sendButon} col-md-1 col-sd-1`}          
        >
          Send
        </Button>
      </Form>
      {enteredText && localError && 
        (<span className="offset-3 badge" >
          Only text can be entered
        </span>)}
    </InputGroup>
  );
}
