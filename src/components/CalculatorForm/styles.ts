import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: .75rem;
  padding: 0.25rem;
`;

export const FormInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const FormLabel = styled.label`
  font-size: 1rem;
  color: var(--text-one);
`;

export const FormInput = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 1rem;
  color: var(--text-one);
  padding: 0 1.5rem;
  border: 1px solid var(--disabled-input);
  border-radius: 0.25rem;
  background-color: var(--text-button);

  &.active {
    border-color: var(--border-and-btn-bg);
  }

  &:focus {
    outline: none;
  }
`;

export const FormSubmitBtn = styled.button`
  width: 100%;
  height: 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: var(--text-button);
  background-color: var(--border-and-btn-bg);
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:disabled {
    background-color: var(--disabled-input);
    cursor: not-allowed;
  }
`;
