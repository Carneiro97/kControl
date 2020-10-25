import styled, { css } from 'styled-components';

import theme from '../../styles/theme';

const handleTextType = (type) => {
  switch (type) {
    case 'headlineOne':
      return css`
        font-family: 'unimed_slabsemibold';
        font-size: 16px;
        font-weight: 300;
        letter-spacing: 0.2px;
      `;
    case 'headlineTwo':
      return css`
        font-family: 'work_sans';
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 0.2px;
      `;
    case 'subHead':
      return css`
        font-family: 'unimed_slabsemibold';
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 0.2px;
      `;
    case 'body':
      return css`
        font-family: 'work_sans';
        font-size: 13px;
        font-weight: 300;
        letter-spacing: 0.15px;
      `;
    default:
  }
};

export const Container = styled.p`
${({ font }) =>
  font
    ? css`
        font: ${font};
      `
    : `font: 14px Calibri Regular`};
    }
  }


${({ fontFamily }) =>
  fontFamily
    ? css`
        font-family: ${fontFamily};
      `
    : ''}
${({ bold }) =>
  bold
    ? css`
        font-weight: bold;
      `
    : ''}

${({ paddingBottom }) =>
  paddingBottom
    ? css`
        padding-bottom: ${paddingBottom}px;
      `
    : ''}

${({ paddingLeft }) =>
  paddingLeft
    ? css`
        padding-left: ${paddingLeft};
      `
    : ''}

${({ paddingRight }) =>
  paddingRight
    ? css`
        padding-right: ${paddingRight};
      `
    : ''}

${({ height }) =>
  height
    ? css`
        height: ${height}px;
      `
    : ''}

 ${({ margin }) =>
   margin
     ? css`
         margin: ${margin}px;
       `
     : margin
     ? css`
         margin: 11px;
       `
     : ''}

         ${({ paddingTop }) =>
           paddingTop
             ? css`
                 padding-top: ${paddingTop};
               `
             : ''}

 ${({ padding }) =>
   padding
     ? css`
         padding: ${padding};
       `
     : ''}

${({ letterSpacing }) =>
  letterSpacing
    ? css`
        letter-spacing: ${letterSpacing};
      `
    : `letter-spacing: 0.48px`};
    }
  }

${({ color }) =>
  color
    ? css`
        color: ${color};
      `
    : `color:  ${theme.black}`};
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

${({ opacity }) =>
  opacity
    ? css`
        opacity: ${opacity};
      `
    : `opacity: 1`};
    }
  }

  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : ''}


  ${({ width }) =>
    width
      ? css`
          max-width: ${width};
          min-width: ${width};
        `
      : ''}

  ${({ onClick }) =>
    onClick
      ? css`
          cursor: pointer;
        `
      : ''}

  ${({ flex }) =>
    typeof flex === 'number'
      ? css`
          flex: ${flex};
        `
      : flex
      ? css`
          flex: 1;
        `
      : ''}

  ${({ ellipsis }) =>
    ellipsis
      ? css`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `
      : ''}

  ${({ center }) =>
    center
      ? css`
          text-align: center;
        `
      : ''}

  ${({ right }) =>
    right
      ? css`
          text-align: right;
        `
      : ''}

${({ marginTop }) =>
  marginTop
    ? css`
        margin-top: ${marginTop};
      `
    : ''}


    ${({ marginBottom }) =>
      marginBottom
        ? css`
            margin-bottom: ${marginBottom};
          `
        : ''}

  ${({ marginLeft }) =>
    marginLeft
      ? css`
          margin-left: ${marginLeft};
        `
      : ''}

  ${({ marginRight }) =>
    marginRight
      ? css`
          margin-right: ${marginRight};
        `
      : ''}

  ${({ capitalize }) =>
    capitalize
      ? css`
          text-transform: capitalize;
        `
      : ''}

  ${({ noWrap }) =>
    noWrap
      ? css`
          white-space: nowrap;
        `
      : ''}

  ${({ lineHeight }) =>
    typeof lineHeight === 'number'
      ? css`
          line-height: ${lineHeight}px;
        `
      : lineHeight
      ? css`
          line-height: 20px;
        `
      : ''}

  ${({
    darkGray,
    grayDefault,
    gray,
    lightGray,
    white,
    green,
    red,
    black,
    movBlack,
    movBlack90,
    movPrimary,
    blue,
  }) =>
    darkGray
      ? css`
          color: ${theme.textGray};
        `
      : grayDefault
      ? css`
          color: ${theme.grayDefault};
        `
      : gray
      ? css`
          color: ${theme.grey};
        `
      : lightGray
      ? css`
          color: ${theme.textSidebarDisabled};
        `
      : white
      ? css`
          color: ${theme.bgWhite};
        `
      : green
      ? css`
          color: ${theme.greenDefault};
        `
      : red
      ? css`
          color: ${theme.redDefault};
        `
      : black
      ? css`
          color: #000;
        `
      : movBlack
      ? css`
          color: ${theme.movBlack};
        `
      : movBlack90
      ? css`
          color: ${theme.movBlack90};
        `
      : movPrimary
      ? css`
          color: ${theme.movPrimary};
        `
      : blue
      ? css`
          color: ${theme.blue};
        `
      : `color: ${theme.grey}`}


  ${({ small, big, huge, extraHuge }) =>
    small
      ? css`
          font-size: 11px;
        `
      : big
      ? css`
          font-size: 14px;
        `
      : huge
      ? css`
          font-size: 18px;
        `
      : extraHuge
      ? css`
          font-size: 24px;
        `
      : ''}

    ${({ highlight }) =>
      highlight
        ? css`
            width: fit-content;
            color: ${theme.blueDefault};
            background-color: ${theme.bgHighlight};
          `
        : ''}

  @media (max-width: 768px) {
    ${({ marginTop }) =>
      typeof marginTop === 'number'
        ? css`
            margin-top: ${marginTop}px;
          `
        : marginTop
        ? css`
            margin-top: 7px;
          `
        : ''}

    ${({ small, big, huge }) =>
      small
        ? css`
            font-size: 11px;
          `
        : big
        ? css`
            font-size: 14px;
          `
        : huge
        ? css`
            font-size: 18px;
          `
        : ''}

    ${({ lineHeight }) =>
      lineHeight
        ? css`
            line-height: 17px;
          `
        : ''}
  }


  ${({ type }) => type && handleTextType(type)}
`;

export const InputFileContainer = styled(Container)`

${({ color }) =>
  color
    ? css`
        color: ${color};
      `
    : `color: ${theme.movGrey}`};
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


${({ font }) =>
  font
    ? css`
        font: ${font};
      `
    : `font: 16px Calibri Regular`};
    }
  }

${({ letterSpacing }) =>
  letterSpacing
    ? css`
        letter-spacing: ${letterSpacing};
      `
    : `letter-spacing: 0.64px`};
    }
  }

${({ margin }) =>
  margin
    ? css`
        margin: ${margin};
      `
    : `margin: 0`};
    }
  }

${({ marginLeft }) =>
  marginLeft
    ? css`
        margin-left: ${marginLeft};
      `
    : `margin-left: 30px`};
    }
  }

${({ padding }) =>
  padding
    ? css`
        padding: ${padding};
      `
    : `padding: 0`};
    }
  }

${({ lineHeight }) =>
  lineHeight
    ? css`
        line-height: ${lineHeight};
      `
    : `line-height: 20px`};
    }
  }




`;
