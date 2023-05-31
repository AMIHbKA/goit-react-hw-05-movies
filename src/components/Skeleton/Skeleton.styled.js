import styled from 'styled-components';

export const SkeletonStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  padding: 0;
  justify-items: center;

  .poster {
    margin-bottom: 5px;
  }
`;
