import {
  FormContainer,
  FormInput,
  FormInputContainer,
  FormLabel,
  FormSubmitBtn,
} from './styles';

export const CalculatorForm = () => {
  return (
    <FormContainer>
      <FormInputContainer>
        <FormLabel htmlFor="weight">Peso</FormLabel>
        <FormInput
          className={''}
          type="number"
          name="weight"
          id="weight"
          min={0}
          placeholder="Seu peso em Kg"
          required
        />
      </FormInputContainer>
      <FormInputContainer>
        <FormLabel htmlFor="height">Altura</FormLabel>
        <FormInput
          className={'active'}
          defaultValue={1.65}
          type="number"
          name="height"
          id="height"
          min={1}
          required
          placeholder="Sua altuma em metros"
        />
      </FormInputContainer>
      <FormSubmitBtn disabled>Calcular</FormSubmitBtn>
    </FormContainer>
  );
};
