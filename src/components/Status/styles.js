import styled from 'styled-components';
import statusStyles from '~/styles/statusColors';

export const Status = styled.span`
  width: max-content;
  padding: 3px 8px;
  border-radius: 12px;

  background: ${(props) => statusStyles[props.status].background};
  color: ${(props) => statusStyles[props.status].color};

  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  text-indent: -9999px;

  @media (min-width: 700px) {
    text-indent: inherit;
  }

  &:before {
    content: '';
    height: 9px;
    width: 9px;

    background-color: ${(props) => statusStyles[props.status].color};
    display: inline-block;
    border-radius: 50%;

    @media (min-width: 700px) {
      margin-right: 5px;
    }
  }
`;
