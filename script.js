const shareButton = document.querySelector('.share');
const sharePopup = document.querySelector('.share-popup');

shareButton.addEventListener('click', () => {
  shareButton.classList.toggle('active');
  sharePopup.classList.toggle('hidden');
});