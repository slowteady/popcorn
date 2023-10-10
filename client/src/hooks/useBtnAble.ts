import { useEffect, useState } from 'react';
import { SignInForm, SignUpForm } from '../types/sign';
import { strValidation } from '../utils/validation';

interface InputField {
  type: string;
  fieldsName: string;
  label: string;
  value: string;
}

const useBtnAble = (inputFields: InputField[], formData: SignUpForm | SignInForm, validateFunc: Function) => {
  const [isAble, setIsAble] = useState(false);

  useEffect(() => {
    const isAble = inputFields.every((field) => {
      const { value, fieldsName } = field;
      const validation = strValidation(value).isNotEmpty() && validateFunc(fieldsName, formData);

      return validation && validation.isValid;
    });
    setIsAble(isAble);
  }, [inputFields, formData, validateFunc]);

  return isAble;
};

export default useBtnAble;
