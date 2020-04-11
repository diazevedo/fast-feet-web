import styled from 'styled-components';

export const select = {
  menu: (styles) => ({
    ...styles,
    marginTop: '0px',
  }),

  menuList: ({ isFocused }) => ({
    backgroundColor: isFocused && 'yellow',
  }),

  control: (styles) => ({
    ...styles,
    fontSize: '14px',
    width: '100%',
    height: '50px',
    fontFamily: 'Roboto',

    borderRadius: '4px',
    cursor: 'default',
    // borderColor: isFocused || (!isFocused && 'hsl(0,0%,80%)'),
    borderColor: '#dddddd',
    borderStyle: 'solid',
    borderWidth: '1px',
  }),

  dropdownIndicator: (styles) => ({
    ...styles,
  }),

  option: (styles, { isSelected, isFocused }) => ({
    ...styles,
    // backgroundColor: (isSelected && `#BAD2FF`) || (isFocused && '#ddd9'),
    backgroundColor: isFocused && '#ddd9',
    fontWeight: isSelected ? '700' : '300',
    color: '#444444',
    display: 'flex',
    listStyle: 'none',
    padding: '10px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '14px',
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
