import styled from 'styled-components';

export const select = {
  menu: (styles) => ({
    ...styles,
    marginTop: '0px',
  }),

  menuList: ({ isFocused }) => ({
    backgroundColor: isFocused && 'yellow',
  }),

  control: (styles, { isFocused }) => ({
    ...styles,

    width: '100%',
    height: '50px',

    borderRadius: '4px',
    cursor: 'default',
    borderColor: isFocused || (!isFocused && 'hsl(0,0%,80%)'),
    borderStyle: isFocused || (!isFocused && 'solid'),
    borderWidth: isFocused || (!isFocused && '1px'),
  }),

  dropdownIndicator: (styles) => ({
    ...styles,
  }),

  option: (styles, { isSelected }) => ({
    ...styles,
    backgroundColor: isSelected && `#BAD2FF`,
    fontWeight: isSelected ? '700' : 'normal',
    color: '#222',
    display: 'flex',
    listStyle: 'none',
    padding: '10px',
    cursor: 'pointer',
    width: '100%',
    fontFamily: 'Roboto',
  }),
};

export const Wrapper = styled.div`
  span {
    color: #db7272;
    display: inline-block;
    margin-top: 5px;
  }
`;
