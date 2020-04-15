import styled from 'styled-components';

export const FormBodyGrid = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 10px 25px 25px;
  height: auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  grid-template-rows: repeat(80px, 1fr);
  grid-template-areas:
    'name'
    'street'
    'number'
    'complement'
    'city'
    'state'
    'post_code';

  label {
    margin: 0;
  }

  input {
    margin-top: 10px;
  }

  #name {
    grid-area: name;
  }

  #street {
    grid-area: street;
  }

  #number {
    grid-area: number;
  }

  #complement {
    grid-area: complement;
  }

  #city {
    grid-area: city;
  }

  #state {
    grid-area: state;
  }

  #post_code {
    grid-area: post_code;
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-areas:
      'name name name name name name name name'
      'street street street street number number complement complement'
      'city city city state state state post_code post_code';
  }
`;
