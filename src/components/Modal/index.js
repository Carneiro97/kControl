import React, { useContext } from 'react';

import { MdClose } from 'react-icons/md';
import ModalContext from '../../context/ModalContext';

import {
  ModalContainer,
  ModalContentContainer,
  ModalContentWrapperContainer,
  ModalFooterContainer,
  ModalHeaderContainer,
  ModalBackGround,
} from './styles';

const Modal = ({
  children,
  isOpen,
  onClick,
  height,
  maxHeight,
  width,
  maxWidth,
  havingBackground = true,
  position,
  top,
  left,
}) => {
  return isOpen ? (
    <>
      {havingBackground ? <ModalBackGround /> : null}
      <ModalContainer
        position={position}
        top={top}
        left={left}
        height={height}
        width={width}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
      >
        <ModalContext.Provider value={{ onClick }}>
          {children}
        </ModalContext.Provider>
      </ModalContainer>
    </>
  ) : null;
};

const ModalHeader = ({ children, justifyContent, padding }) => {
  const { onClick } = useContext(ModalContext);

  return (
    <ModalHeaderContainer justifyContent={justifyContent} padding={padding}>
      {children}
      <MdClose onClick={(e) => onClick(e)} />
    </ModalHeaderContainer>
  );
};

const ModalContentWrapper = ({ children, height, display, paddingTop }) => {
  return (
    <ModalContentWrapperContainer
      paddingTop={paddingTop}
      height={height}
      display={display}
    >
      {children}
    </ModalContentWrapperContainer>
  );
};

const ModalContent = ({
  children,
  isModalWithWarning,
  overflow,
  maxHeight,
  ref,
}) => {
  return (
    <ModalContentContainer
      isModalWithWarning={isModalWithWarning}
      overflow={overflow}
      maxHeight={maxHeight}
      ref={ref}
    >
      {children}
    </ModalContentContainer>
  );
};

const ModalBody = ({
  children,
  isModalWithWarning,
  overflow,
  maxHeight,
  ref,
}) => {
  return (
    <ModalContentContainer
      isModalWithWarning={isModalWithWarning}
      overflow={overflow}
      maxHeight={maxHeight}
      ref={ref}
    >
      {children}
    </ModalContentContainer>
  );
};

const ModalFooter = ({
  children,
  justifyContent,
  alignItems,
  padding,
  marginBottom,
  paddingBottom,
}) => {
  return (
    <ModalFooterContainer
      justifyContent={justifyContent}
      alignItems={alignItems}
      padding={padding}
      marginBottom={marginBottom}
      paddingBottom={paddingBottom}
    >
      {children}
    </ModalFooterContainer>
  );
};

export {
  Modal,
  ModalHeader,
  ModalContentWrapper,
  ModalContent,
  ModalBody,
  ModalFooter,
};
