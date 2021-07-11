import createModalMarkup from '../../tpl/card-modal.hbs';

// ссилки на DOM

const refs = {
  itemModal: document.querySelector('.item-modal'),
};

const renderItem = ({ id, data, loading, error, onRelated }) => {
  if (!id) {
    refs.itemModal.classList.add('is-hidden');
    return;
  }
  refs.itemModal.classList.remove('is-hidden');
  const markupModal = document.querySelector('.tpl-modal');
  if (error) {
    markupModal.innerHTML = error;
    return;
  }
  if (loading) {
    markupModal.innerHTML = 'loading...';
    return;
  }
  markupModal.innerHTML = '';
  markupModal.insertAdjacentHTML('beforeend', createModalMarkup(data));
  markupModal.querySelector('.modal__btn-author').addEventListener('click', () => {
    onRelated(data.name);
  });
};

export default renderItem;
