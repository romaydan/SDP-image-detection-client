import axios from 'axios';
import parser from 'fast-xml-parser';

import * as api from '../api';
import { FETCH_ALL } from '../constants/actionTypes';

const mapToViewModel = async (json, images) => {
  const data = [];

  for (const j of json) {
    const { data: jsonData } = await axios.get(j.Url);

    data.push({
      ...jsonData,
      url: images.find((i) => i.Name === jsonData.id).Url,
    });
  }

  return data;
};

export const getPosts = () => async (dispach) => {
  try {
    const { data: xmlData } = await api.fetchPosts();
    const parsedData = parser.parse(xmlData);
    const blobData = [parsedData.EnumerationResults.Blobs.Blob].flat();

    const json = blobData.filter((f) => f.Name.includes('.json'));
    const images = blobData.filter((f) => !f.Name.includes('.json'));

    const data = await mapToViewModel(json, images);

    dispach({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
