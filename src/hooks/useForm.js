import React, { useCallback } from "react";

//хук управления формой и валидации формы
export function useFormWithValidation(initialValues) {
  const [form, setForm] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const input = event.target;
    
    setForm({...form, [input.name]: input.type === 'checkbox' ? input.checked : input.value});
    setErrors({...errors, [input.name]: input.validationMessage });
    setIsValid(event.target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newForm = {}, newErrors = {}, newIsValid = false) => {
      setForm(newForm);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setForm, setErrors, setIsValid]
  );

  return { form, handleChange, errors, isValid, resetForm };
}