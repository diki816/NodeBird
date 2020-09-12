import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const PostImages = ({ Iamges }) => {
    const [showImagesZoom, setShowImagesZoom] = useState(this);

    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);

    if (images.length == 1) {
        return (
            <>
                <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
            </>
        );    
    }
    if (images.length == 2) {
        return (
            <>
                <img role="presentation" style={{display: 'inline-block', width: "50%"}} src={images[0].src} alt={images[0].src} onClick={onZoom} />
                <img role="presentation" style={{display: 'inline-block', width: "50%"}} src={images[1].src} alt={images[1].src} onClick={onZoom} />
            </>
        );    
    }
    return (
        <>
            <img role="presentation" width="50%" src={images[0].src} alt={images[0].src} onClick={onZoom} />
            <div role="presentation" 
                style={{ display: 'inline-block', width: '50%', textAlign: 'center', vertialAlign: 'middle'}} 
                onClick={onZoom} 
            >
            <PlusOutlined />
            <br/>
            {images.length - 1}
            개의 사진 더 보기
            </div>
        </>
    );
};

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
}
export default PostImages;