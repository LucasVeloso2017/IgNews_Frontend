import React,{InputHTMLAttributes} from 'react';
import {IconBaseProps} from 'react-icons'

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    icon:React.ComponentType<IconBaseProps>
    wantErros?:boolean
}
  
const SimpleInput: React.FC<InputProps> = ({wantErros,name,icon:Icon,...rest}) => {
    
    return(
      <Container isErrored={false} isFiled={false} isFocused={true}>
        {Icon && <Icon size={20}/>}
        <input 
          {...rest}
        />
      </Container>
    );
}

export default SimpleInput;