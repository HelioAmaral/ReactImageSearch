import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import searchImages from "./api";
import ImageList from "./Components/ImageList";

function App() {

    const [images, setImages] = useState([]);

    //handleSubmit function takes a parameter from the child (term)
    const handleSubmit = async (term) => {
        const result = await searchImages(term);
    
        setImages(result);
    }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </div>
  );
}

export default App;
