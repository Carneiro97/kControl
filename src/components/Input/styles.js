import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import theme from '../../styles/theme';

export const Container = styled.input`
  padding: 10px;
  font: 16px Calibri Regular;
  color: ${theme.grey};
  border: 2px solid;

  ::placeholder {
    font: 16px Calibri Regular;
    letter-spacing: 0.52px;
    color: ${theme.grey}
}

    &:hover:enabled {
        border: 2px solid ${theme.secondColor};
    }

    &:focus{
        border: 2px solid ${theme.secondColor};
    }


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
        : `border: 1px solid ${theme.colorGray}`};
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
                background: ${theme.inputBackgroundGray} 0% 0% no-repeat
                    padding-box;
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
                width: ${width}px;
            `
          : null};
    }
  }

  ${({ height }) =>
      height
          ? css`
                height: ${height}px;
            `
          : null};
    }
  }


  @media (max-width: 768px) {
    flex: 0 1 ${({ percentageMobile }) =>
        percentageMobile ? `${percentageMobile}%` : '100%'};
  }
`;
