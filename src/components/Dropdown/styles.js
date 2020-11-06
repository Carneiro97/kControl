import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import theme from '../../styles/theme';

export const Container = styled.ul`
  overflow: auto;
  list-style: none;
  padding: 0;

  ${({ invisibleScroll }) =>
    invisibleScroll
      ? css`
          ::-webkit-scrollbar {
            display: none;
          }
        `
      : ``};

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : ``};

  ${({ maxHeight }) =>
    maxHeight
      ? css`
          max-height: ${maxHeight};
        `
      : `max-height: 200px;`};
  ${({ border }) =>
    border
      ? css`
          border: ${border} solid ${theme.mainColor};
        `
      : `border: 2px solid ${theme.mainColor}`};

  ${({ background }) =>
    background
      ? css`
          background: ${background};
        `
      : `background: ${theme.white} 0% 0% no-repeat padding-box`};

  ${({ borderRadius }) =>
    borderRadius
      ? css`
          border-radius: ${borderRadius};
        `
      : `border-radius: 5px`};

  ${({ opacity }) =>
    opacity
      ? css`
          opacity: ${opacity};
        `
      : `opacity: 1`};

  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : `color: ${theme.dropdownColorGray}`};

  ${({ font }) =>
    font
      ? css`
          font: ${font};
        `
      : `font: 15px Calibri Regular`};

  ${({ textAlign }) =>
    textAlign
      ? css`
          text-align: ${textAlign};
        `
      : `text-align: left`};

  ${({ letterSpacing }) =>
    letterSpacing
      ? css`
          letter-spacing: ${letterSpacing};
        `
      : `letter-spacing: 0.52px`};
`;

export const SelectOption = styled.li`
  list-style-position: inside;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  padding: 10px;
  cursor: pointer;

  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : ``};

  &:hover,
  &:focus {
    color: ${theme.mainColor};
    background-color: ${lighten(0.65, theme.mainColor)};
    font-weight: bold;
  }

  &:active {
    border: 2px solid ${theme.mainColor};
    background-color: ${theme.mainColor};
    color: ${theme.white};
    border-radius: 0px;
  }

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : ``};

  ${({ borderRadius }) =>
    borderRadius
      ? css`
          border-radius: ${borderRadius};
        `
      : `border-radius: 5px;`};
`;

export const DropdownHeader = styled.div`
  &:active:not([disabled='disabled']) {
    ${({ cancelActive }) =>
      cancelActive
        ? css`
            border: 2px solid ${theme.secondColor};
            background-color: ${lighten(0.65, theme.secondColor)};
            color: ${theme.secondColor}; ;
          `
        : ``};
  }

  ${({ disable }) =>
    !disable
      ? css`
          &:hover {
            border: 1px solid ${theme.secondColor};
          }
        `
      : ``};

  background: ${theme.whiteBackground} 0% 0% no-repeat padding-box;
  color: #a1a1a1;

  font-size: 15px;
  font-family: 'Calibri';
  letter-spacing: 0.52px;
  opacity: 1;
  text-align: left;

  min-height: 2.875rem;
  padding: 6px;
  align-content: baseline;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* svg {
        margin-left: 10px;
    } */

  ${({ marginRight }) =>
    marginRight
      ? css`
          margin-right: ${marginRight};
        `
      : ``};

  ${({ border }) =>
    border
      ? css`
          border: ${border};
        `
      : css`
          border: 1px solid ${theme.mainColor};
        `};

  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : css`
          color: ${theme.grey};
        `};

  ${({ disable }) =>
    !disable
      ? css`
          cursor: pointer;
        `
      : css`
          &:active:not([disabled='disabled']) {
            background: ${theme.greyDisable} 0% 0% no-repeat padding-box;
            border: 1px solid ${theme.grayDefault};
            color: ${theme.grayDefault};
          }
          cursor: not-allowed;
        `};

  ${({ borderRadius }) =>
    borderRadius
      ? css`
          border-radius: ${borderRadius};
        `
      : `border-radius: 5px;`};

  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : `width: 13.75rem;`};

  ${({ height }) =>
    height
      ? css`
          height: ${height};
        `
      : `height: 2.875rem;`};

  ${({ whiteSpace }) =>
    whiteSpace
      ? css`
          white-space: ${whiteSpace};
        `
      : ``};

  ${({ active }) =>
    active
      ? css`
          border: 2px solid ${theme.mainColor} !important;
          background-color: ${lighten(0.65, theme.mainColor)};
          color: ${theme.mainColor};
        `
      : css``}
`;

export const OptionContainer = styled.div`
  min-height: 1.875rem;
  padding: 0;
  margin: 0;
  font-size: 1.3rem;
  font-weight: 500;
  position: absolute;
  z-index: 10;
  margin-top: 3px;

  &:first-child {
    padding-top: 0.8em;
  }

  ${({ display }) =>
    display
      ? css`
          display: ${display};
        `
      : ``};

  ${({ borderRadius }) =>
    borderRadius
      ? css`
          border-radius: ${borderRadius};
        `
      : `border-radius: 5px;`};

  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : `width: 13.75rem;`};

  ${({ height }) =>
    height
      ? css`
          height: ${height};
        `
      : `height: 1.875rem`};

  ${({ minWidth }) =>
    minWidth
      ? css`
          min-width: ${minWidth};
        `
      : ''}
`;
export const DropDownWrapper = styled.div`
  min-height: 2.875rem;

  ${({ margin }) =>
    margin
      ? css`
          margin: ${margin};
        `
      : ``};

  ${({ display }) =>
    display
      ? css`
          display: ${display};
        `
      : ``};

  ${({ borderRadius }) =>
    borderRadius
      ? css`
          border-radius: ${borderRadius};
        `
      : `border-radius: 5px;`};

  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : `width: 13.75rem;`};

  ${({ height }) =>
    height
      ? css`
          min-height: ${height};
          height: ${height};
        `
      : `height: 1.875rem;`};

  ${({ backgroundColor }) =>
    backgroundColor
      ? css`
          background-color: ${backgroundColor};
        `
      : `background-color: ${theme.white}`};

  ${({ marginLeft }) =>
    marginLeft
      ? css`
          margin-left: ${marginLeft}px;
        `
      : ``};

  ${({ marginRight }) =>
    marginRight
      ? css`
          margin-right: ${marginRight}px;
        `
      : ``};

  ${({ disable }) =>
    !disable
      ? css``
      : css`
          cursor: not-allowed;
          background: ${theme.greyDisable} 0% 0% no-repeat padding-box;
        `};
`;
