import React,{InputHTMLAttributes,useState,useCallback,useEffect, useRef} from 'react';
import {IconBaseProps} from 'react-icons'
import {FiAlertCircle} from 'react-icons/fi'

import { Container,Error } from './styles'

import {useField} from '@unform/core'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    icon:React.ComponentType<IconBaseProps>
    wantErros?:boolean
}
  
const Input: React.FC<InputProps> = ({wantErros,name,icon:Icon,...rest}) => {
    
    const inputRef = useRef<HTMLInputElement>(null)
  
    const { fieldName,defaultValue, error,registerField } = useField(name)
    const[focused,setIsFocused]=useState(false)
    const[filed,setIsFiled]=useState(false)
  
    const handleInputFocus = useCallback(()=>{
      setIsFocused(true)
    },[])
  
    const handleInputBlur = useCallback(()=>{    
      setIsFocused(false)
  
      inputRef.current?.value ?
      setIsFiled(true) :
      setIsFiled(false)
  
    },[])
  
    useEffect(()=>{
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
      })
    },[fieldName,registerField])
  
  
    return(
      <Container isErrored={!!error} isFiled={filed} isFocused={focused}>
        {Icon && <Icon size={20}/>}
        <input 
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef} 
          {...rest}
        />
        {wantErros ? (
          error && (
          <Error title={error}>
            <FiAlertCircle color="red" size={20}/>
          </Error>)
          )
          :null
        }
      </Container>
    );
}

export default Input;