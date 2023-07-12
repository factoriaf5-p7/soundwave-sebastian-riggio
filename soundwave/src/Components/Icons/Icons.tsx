import React from 'react';

interface CustomComponentProps {
  imageSrc: string;
  altText: string;
  captionText: string;
}

const CustomComponent: React.FC<CustomComponentProps> = ({
  imageSrc,
  altText,
  captionText,
}) => {
  return (
    <div className="bg-black d-flex flex-column align-items-center p-3">
      <img className="w-100 h-auto p-3" src={imageSrc} alt={altText} />
      <p>{captionText}</p>
    </div>
  );
};

export default CustomComponent;
