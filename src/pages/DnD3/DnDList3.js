import { v4 as uuidv4 } from 'uuid';
export const data = [
  
  {
    id: '1',
    Task: 'Menentukan jarak perpindahan tembok yang di dorong Rudi ',
  },
  {
    id: '2',
    Task: 'Menentukan usaha yang dihasilkan Rudi mendorong tembok',
  },
  {
    id: '3',
    Task: 'Menentukan gaya yang dihasilkan Rudi mendorong tembok',
  },
];

export const columnsFromBackend = {
  [uuidv4()]: {
    title: 'Kumpulan Rencana Penyelesaian',
    items: data,
  },
  [uuidv4()]: {
    title: 'Urutan Rencana Penyelesaian',
    items: [],
  },
  
};