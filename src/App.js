import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import ImageInfo from './components/ImageInfo/ImageInfo';
import './App.css';

export default function App() {
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const handleFormSubmit = imageName => {
    setImageName(imageName);
    setImages([]);
    setPage(1);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageInfo
        imageName={imageName}
        images={images}
        page={page}
        setImages={setImages}
        setPage={setPage}
      />
      <ToastContainer autoClose={3000} />
    </>
  );
}

/* class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageInfo imageName={this.state.imageName} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App; */
