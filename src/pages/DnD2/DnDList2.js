import { v4 as uuidv4 } from 'uuid';
export const data = [
  
  {
    id: '1',
    Task: 'Menentukan energi potensial yang dihasilkan Asep dan Yudi',
  },
  {
    id: '2',
    Task: 'Menentukan massa Asep dan Yudi',
  },
  
  {
    id: '3',
    Task: 'Menentukan Ketinggian tempat Asep dan Yudi berada',
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