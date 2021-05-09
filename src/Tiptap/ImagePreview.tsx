import { css, cx } from '@emotion/css';
import { useEffect, useState } from 'react';

export interface ImagePreviewProps {
  className?: string;
  url: string;
}


const imageStyle = css`
  max-width: 100%;
`;


export function ImagePreview(props: ImagePreviewProps) {

  const { className, url } = props;

  return (
    <div className={cx('image-preview', className)}>
      {url && <img className={imageStyle} src={url} />}
    </div>
  );
}

export interface UseLocalImageProps {
  file: File | null;
}


export function useLocalImage(props: UseLocalImageProps) {

  const { file } = props;
  const [blobUrl, setBlobUrl] = useState<null | string>(null);
  const [isValid, setIsValid] = useState<null | boolean>(null);

  useEffect(() => {

    setIsValid(null);

    if (!file) {
      return;
    }

    const newUrl = URL.createObjectURL(file);
    const image = new Image();

    image.addEventListener('load', () => {
      setBlobUrl(newUrl);
      setIsValid(true);
    }, false);

    image.addEventListener('error', () => {
      URL.revokeObjectURL(newUrl);
      setIsValid(false);
    }, false);

    // Attempt to load the image.
    image.src = newUrl;

    return () => URL.revokeObjectURL(newUrl);

  }, [file]);


  return {
    url: blobUrl,
    isValid
  };
}
