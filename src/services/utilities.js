import { theme } from 'components/UI/Themes/theme';

export const getFormattedTime = timeString => {
  const date = new Date(timeString);
  const formattedDate = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}.${
    date.getMonth() + 1 < 10 ? '0' : ''
  }${date.getMonth() + 1}.${date.getFullYear()}`;
  const formattedTime = `${date.getHours() < 10 ? '0' : ''}${date.getHours()}:${
    date.getMinutes() < 10 ? '0' : ''
  }${date.getMinutes()}`;

  return `${formattedDate} ${formattedTime}`;
};

export const getDominantColorFromImage = async imageUrl => {
  try {
    const image = new Image();
    image.src = imageUrl;
    image.crossOrigin = 'crossOrigin';

    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = () => reject('Ошибка загрузки изображения');
    });

    const bitmap = await createImageBitmap(image);
    const offscreenCanvas = new OffscreenCanvas(bitmap.width, bitmap.height);
    const context = offscreenCanvas.getContext('2d');
    context.drawImage(bitmap, 0, 0);

    const imageData = context.getImageData(
      0,
      0,
      offscreenCanvas.width,
      offscreenCanvas.height
    );
    const pixels = imageData.data;

    const colorFrequency = {};

    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      const color = `${r},${g},${b}`;

      if (colorFrequency[color]) {
        colorFrequency[color]++;
      } else {
        colorFrequency[color] = 1;
      }
    }

    let maxFrequency = 0;
    let dominantColor = '';

    for (const color in colorFrequency) {
      if (colorFrequency[color] > maxFrequency) {
        maxFrequency = colorFrequency[color];
        dominantColor = color.split(',').join(' ');
      }
    }

    return dominantColor;
  } catch (error) {
    throw new Error('Ошибка при получении доминирующего цвета: ' + error);
  }
};

export const getContrastColor = rgbColor => {
  const [r, g, b] = rgbColor.split(' ').map(Number);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  const contrastColor = brightness > 128 ? '0 0 0' : '255 255 255';

  return contrastColor;
};

export const getDynamicColors = async backdrop => {
  try {
    theme.mainDynamicColor = await getDominantColorFromImage(backdrop);
    theme.mainContrastColor = getContrastColor(theme.mainDynamicColor);
    console.log('theme.mainDynamicColor', theme.mainDynamicColor);
    console.log('theme.mainContrastColor', theme.mainContrastColor);
  } catch (error) {}
};
