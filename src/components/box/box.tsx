import styled from 'styled-components';

export type DsBoxProps = {
  children?: React.ReactNode;
};

const DsBox = styled.div<DsBoxProps>({
  display: 'flex',
  boxSizing: 'border-box',
  minWidth: 0,
});

export default DsBox;
