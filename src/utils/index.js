import { XWALLET_FILENAME } from "../constants/itemLinks";

export const downloadFile = () => {
  window.location.href = `${process.env.REACT_APP_BASE_URL}/${XWALLET_FILENAME}`;
};
