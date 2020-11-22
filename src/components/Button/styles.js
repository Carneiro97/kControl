import styled, { css } from 'styled-components';

import theme from '../../styles/theme';

export const Container = styled.button`

  
${({ disabled }) =>
  disabled
    ? css`
        background-color: ${theme.grey} !important;
        border: none !important;
      `
    : css`
        &:hover {
          font-weight: bold;
        }
      `};
      }
    }

  ${({ border }) =>
    border
      ? css`
          border: ${border};
        `
      : `border: 1px solid ${theme.secondColor}`};
      }
    }

  ${({ font }) =>
    font
      ? css`
          font: ${font};
        `
      : `font: 24px Calibri Regular`};
      }
    }

  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : `color: ${theme.white}`};
      }
    }

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

    ${({ height }) =>
      height
        ? css`
            height: ${height};
          `
        : ''};
    }
  }

  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : ''};
    }
  }

  ${({ background }) =>
    background
      ? css`
          background: ${background};
        `
      : `background: ${theme.secondColor}`};
    }
  }

  ${({ marginTop }) =>
    marginTop
      ? css`
          margin-top: ${marginTop};
        `
      : ''};
    }
  }
  ${({ marginLeft }) =>
    marginLeft
      ? css`
          margin-left: ${marginLeft};
        `
      : ''};
    }
  }

  ${({ marginRight }) =>
    marginRight
      ? css`
          margin-right: ${marginRight};
        `
      : ''};
    }
  }
  ${({ display }) =>
    display
      ? css`
          display: ${display};
        `
      : ''};
    }
  }
`;
