import {useEffect, useState} from 'react';

// TODO: add necessary imports
const baseUrl = 'http://media.mw.metropolia.fi/wbma/';
const useLoadMedia = () => {
  // TODO: move mediaArray state here
  const [mediaArray, setMediaArray] = useState([]);
  // TODO: move loadMedia function here
  const loadMedia = async (limit) => {
    try {
      const listResponse = await fetch(baseUrl + 'media?limit=' + limit);
      const listJson = await listResponse.json();

      const media = await Promise.all(
        listJson.map(async (item) => {
          const fileResponse = await fetch(baseUrl + 'media/' + item.file_id);
          const fileJson = await fileResponse.json();
          return fileJson;
        })
      );
      console.log('media:', media);
      setMediaArray(media);
    } catch (e) {
      console.error('loadMedia error', e);
    }
  };

  useEffect(() => {
    loadMedia(3);
  }, []);
  return mediaArray;
};

export {useLoadMedia};
