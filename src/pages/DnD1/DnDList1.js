import { v4 as uuidv4 } from 'uuid';
export const data = [
  {
    id: '1',
    Task: 'Menentukan Kecepatan Mobil Budi',
  },
  {
    id: '2',
    Task: 'Menentukan besar energi kinetik yang dihasilkan mobil Budi',
  },
  {
    id: '3',
    Task: 'Menentukan besar massa mobil Budi',
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