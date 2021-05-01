/* eslint-disable no-use-before-define */
import React from 'react';
import { Box } from '../../foundation/layout/Box';
import Modal from '../Modal';
import { AddButton, AddImageModalWrapper } from './AddImageModalComponents';
import { FilterCarousel } from './FilterCarousel';

export function AddImageModal() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [url, setUrl] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [customFilter, setCustomFilter] = React.useState(null);
  const placeholder = '/images/bubbles.svg';

  function handleInput(event) {
    const { value } = event.target;
    setUrl(value);
  }

  function handleClick() {
    switch (page) {
      case 0:
        setPage(1);
        break;
      case 1:
        saveNewImage();
        break;
      default:
        break;
    }
  }

  function saveNewImage() {
    console.log({
      photoUrl: url,
      filter: customFilter,
      description: '',
    });
  }

  return (
    <>
      <AddButton onClick={() => {
        setModalOpen(true);
        setUrl(null);
        setPage(0);
      }}
      />
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
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
              <AddImageModalWrapper.Image
                src={url || placeholder}
                className={url ? customFilter : null}
                url={url}
                alt="Sua Imagem"
              />
              <AddImageModalWrapper.Shenanigan>
                {
                  !page
                    ? (
                      <>
                        <AddImageModalWrapper.Shenanigan.Input
                          placeholder="URL da imagem"
                          onChange={handleInput}
                        />
                        <span>Formatos suportados: jpg, png, svg e xpto.</span>
                      </>
                    )
                    : (
                      <FilterCarousel
                        url={url}
                        changeFilter={(filter) => setCustomFilter(filter)}
                      />
                    )
                }
              </AddImageModalWrapper.Shenanigan>
              <AddImageModalWrapper.Button
                onClick={handleClick}
                disabled={!url}
              >
                {!page ? 'Avançar' : 'Postar'}
              </AddImageModalWrapper.Button>
            </AddImageModalWrapper>
          </Box>
        )}
      </Modal>
    </>
  );
}
