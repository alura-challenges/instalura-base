/* eslint-disable no-use-before-define */
import React from 'react';
import { userService } from '../../../services/user/userService';
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
  const [postReturn, setPostReturn] = React.useState(null);

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
      case 2:
        handlePostReturn();
        break;
      default:
        break;
    }
  }

  async function saveNewImage() {
    userService.postImage({
      photoUrl: url,
      filter: customFilter || 'none',
      description: 'new image',
    }).then((data) => {
      const timer = setTimeout(() => handlePostReturn(), 4000);
      setPostReturn({ ...data, timer });
      setPage(2);
    });
  }

  function handlePostReturn() {
    clearTimeout(postReturn?.timer);
    return postReturn.error ? setPage(1) : setModalOpen(false);
  }

  function getShenanigan() {
    switch (page) {
      case 0:
        return (
          <>
            <AddImageModalWrapper.Shenanigan.Input
              placeholder="URL da imagem"
              onChange={handleInput}
            />
            <span>Formatos suportados: jpg, png, svg e xpto.</span>
          </>
        );
      case 1:
        return (
          <FilterCarousel
            url={url}
            changeFilter={(filter) => setCustomFilter(filter)}
          />
        );
      case 2:
        return (
          <div name="postReturn">
            {postReturn.error ? postReturn.error : 'Post enviado!'}
          </div>
        );
      default:
        return '';
    }
  }

  // `
  // { "data": { "_id": "6096cc59e6a7cc000847255b", "photoUrl": "https://github.com/JulianaAmoasei.png", "filter": "filter-valencia", "description": "new image", "user": "5fe9035f5bb019a3c62572da", "likes": [], "createdAt": "2021-05-08T17:37:29.680Z", "updatedAt": "2021-05-08T17:37:29.680Z", "__v": 0 }, "timer": 229 }

  // `

  function getButtonText() {
    switch (page) {
      case 0:
        return 'Avançar';
      case 1:
        return 'Postar';
      case 2:
        return postReturn.error ? 'Tentar Novamente' : 'Fechar';
      default:
        return '';
    }
  }

  return (
    <>
      <AddButton
        onClick={() => {
          setModalOpen(true);
          setUrl(null);
          setPage(0);
        }}
        name="addImage"
      />
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        {(propsDoModal) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Box {...propsDoModal} name="modalAddImage">
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
                {getShenanigan()}
              </AddImageModalWrapper.Shenanigan>
              <AddImageModalWrapper.Button
                onClick={handleClick}
                disabled={!url}
              >
                {getButtonText()}
              </AddImageModalWrapper.Button>
            </AddImageModalWrapper>
          </Box>
        )}
      </Modal>
    </>
  );
}
