import React from 'react';

import {
  Container,
  WarningToastContainer,
  InfoContainer,
  ErrorToastContainer,
  SuccessToastContainer,
  AddToastContainer,
  DeleteToastContainer,
  UpdateToastContainer,
} from './styles';

function Toast(props) {
  return <Container {...props} />;
}

export const WarningToast = ({ children }) => {
  return (
    <InfoContainer>
      <WarningToastContainer size="40" />
      <span>{children}</span>
    </InfoContainer>
  );
};

export const ErrorToast = ({ children, size }) => {
  return (
    <InfoContainer>
      <ErrorToastContainer size={size} />
      <span>{children}</span>
    </InfoContainer>
  );
};

export const SuccessToast = ({ children, size }) => {
  return (
    <InfoContainer>
      <SuccessToastContainer size={size} />
      <span>{children}</span>
    </InfoContainer>
  );
};
export const DeleteToast = ({ children, size }) => {
  return (
    <InfoContainer>
      <DeleteToastContainer size={size} />
      <span>{children}</span>
    </InfoContainer>
  );
};
export const AddToast = ({ children, size }) => {
  return (
    <InfoContainer>
      <AddToastContainer size={size} />
      <span>{children}</span>
    </InfoContainer>
  );
};
export const UpdateToast = ({ children, size }) => {
  return (
    <InfoContainer>
      <UpdateToastContainer size={size} />
      <span>{children}</span>
    </InfoContainer>
  );
};

export default Toast;
