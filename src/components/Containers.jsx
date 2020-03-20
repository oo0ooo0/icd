import styled from 'styled-components';

export const LayoutContainer = styled.div`
  width: ${props => props.width || 92}%;
  margin: 10px auto;
  position: relative;
  min-width: 960px;
`;

export const MainContainer = styled(LayoutContainer)`
  margin-top: 230px;
`;
