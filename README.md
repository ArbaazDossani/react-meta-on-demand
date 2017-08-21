
# react-meta-on-demand

Pure Javascript Component for generating Dynamic Meta Tags to DOM

### Installation

```bash
npm i react-meta-on-demand
```

### Example
Update a Mapping JS file as JSON for meta tags in each of Your Document/Component Usage

```js
import updateMeta from 'react-meta-on-demand';

class LandingPage extends Component {
  componentDidMount(){
    updateMeta('landing');
  }
  render() {
    return (
      <div className="App">
        Landing Page Metas Loaded into DOM <br/>
        <Link to="/login">GO TO Login Page</Link> <br/>
        <Link to="/redirect">GO TO Redirect</Link> <br/>
      </div>
    );
  }
}

```

```
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
```

### Methods
* `updateMeta(title)`   - Clears Previous Meta Tags from the DOM (except Index Metas) and adds metas of the current page using mappingJSON

###
Check out the src folder for Customized Usage
