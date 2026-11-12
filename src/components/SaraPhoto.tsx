import { useState } from 'react';
import { SARA_PHOTO_SRC } from '@/data/content';

interface SaraPhotoProps {
  className?: string;
  imgClassName?: string;
  loading?: 'eager' | 'lazy';
  alt?: string;
}

export default function SaraPhoto({
  className = '',
  imgClassName = '',
  loading = 'lazy',
  alt = 'سارة',
}: SaraPhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-gradient-to-br from-plum-500 via-midnight-700 to-midnight ${className}`}
      />
    );
  }

  return (
    <img
      src={SARA_PHOTO_SRC}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${imgClassName} ${className}`}
    />
  );
}
