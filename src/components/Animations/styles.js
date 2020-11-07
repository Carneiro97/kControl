import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {

        opacity: 0;
    }

    to {

        opacity: 1;
    }
`;
const fadeOut = keyframes`
    from {

        opacity: 1;
    }

    to {

        opacity: 0;
    }
`;

// const Fade = styled.default.div`
//   display: inline-block;
//   visibility: ${(props) => (props.out ? 'hidden' : 'visible')};
//   animation: ${(props) => (props.out ? fadeOut : fadeIn)} 1s linear;
//   transition: visibility 1s linear;
// `;

export const Container = styled.div`
  ${({ hasFadeIn }) =>
    hasFadeIn
      ? css`
          visibility: 'visible';
          animation: ${fadeIn} 0.5s linear;
          transition: visibility 0.5s linear;
        `
      : css``}

  ${({ hasFadeOut }) =>
    hasFadeOut
      ? css`
          visibility: 'hidden';
          animation: ${fadeOut} 0.5s linear;
          transition: visibility 0.5s linear;
        `
      : css``}


  ${({ height }) =>
    height
      ? css`
          height: ${height};
        `
      : css`
          height: 100%;
        `}
  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : css`
          width: 100%;
        `}
`;
