import { useState, useEffect } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import css from './App.module.css';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '41732117-59258c5357db5fde0d38d4929'; // Replace with your actual API key
        const perPage = 12;
        const apiUrl = `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

        setIsLoading(true);

        const response = await fetch(apiUrl);
        const data = await response.json();

        setImages(prevState => [...prevState, ...data.hits]);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchQuery, currentPage]);

  const handleSearchSubmit = () => {
    setCurrentPage(1);
    setImages([]);
    setSearchQuery(searchQuery);
    // Fetch data using the existing state values (searchQuery, currentPage)
  };

  const handleLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  const handleImageClick = imageUrl => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={css.container}>
      <Searchbar className={css.searchbar} onSubmit={handleSearchSubmit} />
      <ImageGallery
        className={css.imageGallery}
        images={images}
        onImageClick={handleImageClick}
      />
      {isLoading && <Loader className={css.loader} />}
      {images.length > 0 && (
        <Button className={css.button} onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <Modal
          className={css.modal}
          isOpen={!!selectedImage} // Use the selectedImage state to manage modal visibility
          imageUrl={selectedImage}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export { App };
