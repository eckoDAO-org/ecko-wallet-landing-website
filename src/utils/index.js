import { XWALLET_FILENAME } from "../constants/itemLinks";

export const downloadFile = () => {
  window.location.href = `${window.location.origin}/${XWALLET_FILENAME}`;
};
