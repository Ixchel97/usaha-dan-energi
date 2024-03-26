import { v4 as uuidv4 } from 'uuid';
export const data = [
  {
    id: '1',
    Task: 'Menentukan besar energi kinetik bola kasti yang di lempar Yanti',
  },
  {
    id: '2',
    Task: 'Menentukan percepatan gravitasi di tempat tersebut',
  },
  {
    id: '3',
    Task: 'Menentukan massa bola kasti yang di lempar Yanti',
  },
  {
    id: '4',
    Task: 'Menentukan kecepatan awal bola kasti yang di lempar Yanti',
  },
  {
    id: '5',
    Task: 'Menentukan ketinggian pada kondisi kedua bola kasti yang di lempar Yanti ',
  },
  {
    id: '6',
    Task: 'Menentukan ketinggian mula-mula bola kasti yang di lempar Yanti',
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