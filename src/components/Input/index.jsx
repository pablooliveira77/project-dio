import { IconContainer, InputContainer, InputText } from "./styles";
import { Controller } from "react-hook-form";

export default function Input({ leftIcon, name, control, ...rest  }) {
  return (
    <InputContainer>
      {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
      <Controller 
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => <InputText {...field} {...rest}/>}
      />
      
    </InputContainer>
  );
}
