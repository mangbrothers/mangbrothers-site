import { getImage } from 'astro:assets';
import heroSrc from '../assets/hero-backyard.jpg';

// Shared so the layout can preload the exact files the hero paints.
export async function getHeroImages() {
  const [phone, desk, wide] = await Promise.all([
    getImage({ src: heroSrc, width: 900, format: 'webp', quality: 62 }),
    getImage({ src: heroSrc, width: 1920, format: 'webp', quality: 58 }),
    getImage({ src: heroSrc, width: 2560, format: 'webp', quality: 55 }),
  ]);
  return { phone, desk, wide };
}
