// The three 2000×1125 service photos. Importing them lets astro:assets
// resize and compress the copies used in content, instead of shipping the
// full JPEG from public/.
import pestControl from '../../public/photos/pest-control.jpg';
import rodent from '../../public/photos/rodent.jpg';
import mosquito from '../../public/photos/mosquito.jpg';

export const blogPhotos = {
  '/photos/pest-control.jpg': pestControl,
  '/photos/rodent.jpg': rodent,
  '/photos/mosquito.jpg': mosquito,
} as const;

export type BlogPhotoPath = keyof typeof blogPhotos;
