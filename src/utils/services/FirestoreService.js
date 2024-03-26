import { db } from '../../firebase'
function getAllsiswa() {
   return new Promise((resolve, reject) => {
      db.collection("siswa").get().then((allsiswa) => {
           resolve(allsiswa);
      }).catch((e) => {
           reject(e);
      })
   })
}
export default { getAllsiswa }