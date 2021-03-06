import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import theme from '../../styles/theme';

export const Container = styled.input.attrs((props) => ({
  readOnly: props.readOnly,
  autoFocus: props.autoFocus,
  id: props.id,
  name: props.name,
}))`
  font: 16px Calibri Regular;
  color: ${theme.grey};
  padding: 10px;
  outline: none;


    ${({ hide }) =>
      !hide
        ? css`
            &:focus {
              border: 2px solid ${theme.mainColor} !important;
            }
            &:hover:enabled {
              ${({ lessHover }) =>
                !lessHover
                  ? css`
                      border: 2px solid ${theme.secondColor};
                    `
                  : css`
                      border: 1px solid ${theme.secondColor};
                    `}
              ::placeholder {
                font: 16px Calibri Regular;
                letter-spacing: 0.52px;
                color: ${theme.grey};
              }
            }
          `
        : css`
            border: none !important;
            color: transparent;
            width: 0px !important;
            height: 0px !important;
          `}



${({ margin }) =>
  margin
    ? css`
        margin: ${margin}px;
      `
    : ''}

  ${({ marginTop }) =>
    marginTop
      ? css`
          margin-top: ${marginTop}px;
        `
      : ''}

${({ border }) =>
  border
    ? css`
        border: ${border};
      `
    : `border: 1px solid ${theme.mainColor}`};
    }
  }


${({ background }) =>
  background
    ? css`
        background: ${background};
      `
    : `background: ${theme.white} 0% 0% no-repeat padding-box`};
    }
  }

  ${({ disabled }) =>
    disabled
      ? css`
          background: ${theme.inputBackgroundGray} 0% 0% no-repeat padding-box;
          cursor: not-allowed;
        `
      : css``}


${({ borderRadius }) =>
  borderRadius
    ? css`
        border-radius: ${borderRadius};
      `
    : `border-radius: 5px`};
    }
  }


${({ opacity }) =>
  opacity
    ? css`
        opacity: ${opacity};
      `
    : `opacity: 1`};
    }
  }

${({ color }) =>
  color
    ? css`
        color: ${color};
      `
    : `color: ${theme.inputColorGray}`};
    }
  }



${({ font }) =>
  font
    ? css`
        font: ${font};
      `
    : `font: 15px Calibri Regular`};
    }
  }

${({ textAlign }) =>
  textAlign
    ? css`
        text-align: ${textAlign};
      `
    : `text-align: left`};
    }
  }

  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : css`
                width: 100%};
             `}
  }

  ${({ height }) =>
    height
      ? css`
          height: ${height};
        `
      : null};
    }
  }


  @media (max-width: 768px) {
    flex: 0 1 ${({ percentageMobile }) =>
      percentageMobile ? `${percentageMobile}%` : '100%'};
  }
`;
