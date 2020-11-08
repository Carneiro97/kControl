import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

import {
  RiErrorWarningLine,
  RiShieldCheckLine,
  RiDeleteBin2Line,
} from 'react-icons/ri';
import { GiCancel } from 'react-icons/gi';
import { MdDoneAll, MdUpdate } from 'react-icons/md';
import { GoDiffAdded } from 'react-icons/go';

import theme from '../../styles/theme';

export const Container = styled(ToastContainer).attrs((props) => ({
  autoClose: props.autoClose,
}))`
  .Toastify__toast-container {
    background-color: #ffff;
  }
  .Toastify__toast {
  }
  .Toastify__toast--error {
    background-color: #ffff;
    color: #60656c;
    border-radius: 10px;
    font: 'Regular' 14px Work Sans;
    font: 200 14px Work Sans;
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--success {
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;

export const AuthToastContainer = styled(RiShieldCheckLine).attrs((props) => ({
  size: props.size,
  color: theme.mainColor,
}))`
  margin: 0;
`;

export const UpdateToastContainer = styled(MdUpdate).attrs((props) => ({
  size: props.size,
  color: theme.mainColor,
}))`
  margin: 0;
`;
export const SuccessToastContainer = styled(MdDoneAll).attrs((props) => ({
  size: props.size,
  color: theme.mainColor,
}))`
  margin: 0;
`;
export const DeleteToastContainer = styled(RiDeleteBin2Line).attrs((props) => ({
  size: props.size,
  color: theme.mainColor,
}))`
  margin: 0;
`;
export const AddToastContainer = styled(GoDiffAdded).attrs((props) => ({
  size: props.size,
  color: theme.mainColor,
}))`
  margin: 0;
`;

export const WarningToastContainer = styled(RiErrorWarningLine).attrs(
  (props) => ({
    size: props.size,
  })
)`
  color: ${theme.yellowDefault};
  margin: 0;
`;

export const ErrorToastContainer = styled(GiCancel).attrs((props) => ({
  size: props.size,
}))`
  color: ${theme.redDefault};
  margin: 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;

  span {
    font: 300 14px 'Calibri';
    color: #5a5a5a;
    padding-left: 10px;

    strong {
      font: bold 15px 'Calibri';
    }
  }
`;
