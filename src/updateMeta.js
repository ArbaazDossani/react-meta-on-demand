import mapping from './mapping';

function updateMeta(documentTitle) {
  const previousPage = sessionStorage.getItem('documentTitle') || null;
  if (previousPage !== 'index') {
    const previousPageMetas = document.querySelectorAll(`meta[page="${previousPage}"]`) || [];
    previousPageMetas.forEach(() => {
      document.querySelector(`meta[page="${previousPage}"]`).parentNode.removeChild(document.querySelector(`meta[page="${previousPage}"]`));
    });
  }
  const currentMetas = mapping[documentTitle] || [];
  currentMetas.forEach((currentMeta) => {
    const metaObj = document.createElement('meta');
    Object.keys(currentMeta).forEach((currentMetaKey) => {
      metaObj.setAttribute(currentMetaKey, currentMeta[currentMetaKey]);
      metaObj.setAttribute('page', documentTitle);
    });
    document.getElementsByTagName('head')[0].appendChild(metaObj);
  });
  sessionStorage.setItem('documentTitle', documentTitle);
}

export default updateMeta;
