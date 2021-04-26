import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { Box } from '../../foundation/layout/Box';
import Modal from '../Modal';

export function AddImageModal() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <AddButton onClick={() => setModalOpen(true)} />
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        {(propsDoModal) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Box {...propsDoModal}>
            <AddImageModalWrapper>
              <AddImageModalWrapper.Top>
                <AddImageModalWrapper.Top.Button
                  type="button"
                  onClick={() => setModalOpen(false)}
                >
                  x
                </AddImageModalWrapper.Top.Button>
              </AddImageModalWrapper.Top>
              <AddImageModalWrapper.Image />
              <AddImageModalWrapper.Shenanigan>
                shenanigans
              </AddImageModalWrapper.Shenanigan>
              <AddImageModalWrapper.Button>
                botao
              </AddImageModalWrapper.Button>
            </AddImageModalWrapper>
          </Box>
        )}
      </Modal>
    </>
  );
}

const AddImageModalWrapper = styled.div`
  position: absolute;
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  place-content: space-around;
  box-shadow: -10px 0px 24px rgba(7, 12, 14, 0.1);

  ${breakpointsMedia({
    xs: css`
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      `,
    md: css`
      top: 10%;
      bottom: 10%;
      left: 30%;
      right: 30%;
      `,
  })}
`;

AddImageModalWrapper.Top = styled.div`
  display: flex;
  align-self: flex-end;
`;
AddImageModalWrapper.Top.Button = styled.button`
  background-color: transparent;
  border-color: transparent;
`;
AddImageModalWrapper.Image = styled.div`
  width: 100%;
  height: 50%;
  background: #0f0f0f0f
`;
AddImageModalWrapper.Shenanigan = styled.div`
  width: 100%;
  height: 25%;
  background: red
`;
AddImageModalWrapper.Button = styled.button`
  background-color: #D7385E;
  height: 8%;
  border-radius: 12px;
  color:#FFFFFF;
  width: 90%;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 5%;
`;

const AddButton = styled.button`
  width:32px;
  height:32px;
  border-radius:100%;
  position:relative;
  margin:4px;
  display:inline-block;
  vertical-align:middle;
  background: #FB7B6B;
  box-shadow: 0px 0px 12px rgba(251, 123, 107, 0.3);
  border: unset;

  &:before, &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:#FFFFFF;
  }

  &:before {
    width: 2px;
    margin: 6px auto;
  }

  &:after {
    height: 2px;
    margin: auto 6px;
  }
`;
