import { css, cx } from '@emotion/css';
import { useEffect, useState } from 'react';

export interface ImagePreviewProps {
  className?: string;

  file: File;
}


const imageStyle = css`
  max-width: 100%;
`;


export function ImagePreview(props: ImagePreviewProps) {

  const { className, file } = props;
  const [blobUrl, setBlobUrl] = useState<null | string>(null);

  useEffect(() => {
    const blob = URL.createObjectURL(file);
    setBlobUrl(blob);

    return () => URL.revokeObjectURL(blob);
  }, [file]);

  return (
    <div contentEditable={false} className={cx('image-preview', className)}>
      {blobUrl && <img className={imageStyle} src={blobUrl} />}
    </div>
  );
}
