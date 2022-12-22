function ImageShow({image}){
    return (
        <div>
            <img src={image.urls.small} alt={image.alt_descritpion}/>
        </div>
    ) 
}

export default ImageShow;