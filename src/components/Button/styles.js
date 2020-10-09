import styled, { css } from 'styled-components';

import theme from '../../styles/theme';

export const Container = styled.button`


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
        : `font: 15px Calibri Regular`};
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
`;
