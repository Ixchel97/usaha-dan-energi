import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import "./KiKd.css";

const KiKd = () => {
    const [showKiKd,setShowKiKd] = useState(true);
    const [showIndikator,setShowIndikator] = useState(false);
    const [showTujuan,setShowTujuan] = useState(false);

    const handleKiKd = () =>{
        setShowKiKd(true);
        setShowIndikator(false);
        setShowTujuan(false);
      }

    const handleIndikator = () =>{
        setShowKiKd(false);
        setShowIndikator(true);
        setShowTujuan(false);
      }

    const handleTujuan = () =>{
        setShowKiKd(false);
        setShowIndikator(false);
        setShowTujuan(true);
      }
    
    const navigate = useNavigate();
    

    const onBerandaClick = useCallback(() => {
        navigate("/");
      }, [navigate]);

  return (
    <div className="KiKd">
        <div className='nav-kikd'>
            <a className="beranda" onClick={onBerandaClick}>Kembali</a>
        </div>
        <div className='kikd-title-button'>
            <button onClick={handleKiKd}><span>KI & KD</span></button>
            <button onClick={handleIndikator}><span>INDIKATOR</span></button>
            <button onClick={handleTujuan}><span>TUJUAN</span></button>
        </div>

        {showKiKd?
            <>
            <div className='kikd-body'>
                <h2>KI & KD</h2>
                <div className='kikd-des'>
                    <h3>Kompetensi Inti</h3>
                    <table>
                        <tr>
                            <td className='kikd-no-table'>3.</td>
                            <td>
                            Memahami, menerapkan, menganalisis pengetahuafaktual, konseptual, prosedural berdasarkan rasa ingintahunyatentang 
                            ilmu pengetahuan, teknologi, seni, budaya, dan humaniora dengan wawasan kemanusiaan, kebangsaan, kenegaraan, 
                            dan peradaban terkait penyebab fenomena dan kejadian, serta menerapkan pengetahuan prosedural pada bidang kajian 
                            yang spesifik sesuai dengan bakat dan minatnya untuk memecahkan masalah
                            </td>
                        </tr>
                        <tr>
                            <td className='kikd-no-table'>4.</td>
                            <td>
                            Mengolah, menalar, dan menyaji dalam ranah konkret dan ranah abstrak terkait dengan pengembangan dari yang 
                            dipelajarinya di sekolah secara mandiri, dan mampu menggunakan metode sesuai kaidah keilmuan
                            </td>
                        </tr>
                    </table>

                    <h3>Kompetensi Dasar</h3>
                    <table>
                        <tr>
                            <td className='kikd-no-table'>3.9</td>
                            <td>
                            Menganalisis konsep energi, usaha (kerja), hubungan usaha (kerja) dan perubahan energi, 
                            hukum kekekalan energi, serta penerapannya dalam peristiwa sehari-hari
                            </td>
                        </tr>
                        <tr>
                            <td className='kikd-no-table'>4.9</td>
                            <td>
                            Menerapkan metode ilmiah untuk mengajukan gagasan penyelesaian masalah gerak dalam 
                            kehidupan sehari-hari, yang berkaitan dengan konsep energi, usaha (kerja) dan hukum kekekalan energi
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            </>
            :null}

            {showIndikator?
            <>
            <div className='indikator-body'>
                <h2>INDIKATOR</h2>
                <div className='indikator-des'>
                    <table>
                        <tr>
                            <td className='indikator-no-table'>3.9.1</td>
                            <td>
                                Menjelaskan pengertian usaha, energi, dan hukum kekekalan energi
                            </td>
                        </tr>
                        <tr>
                            <td className='indikator-no-table'>3.9.2</td>
                            <td>
                                Mengidentifikasi jenis-jenis energi
                            </td>
                        </tr>
                        <tr>
                            <td className='indikator-no-table'>3.9.3</td>
                            <td>
                                Membedakan konsep energi potensial, energi kinetik, dan energi mekanik
                            </td>
                        </tr>
                        <tr>
                            <td className='indikator-no-table'>3.9.4</td>
                            <td>
                                Menghitung besarnya energi kinetik, potensial, dan mekanik dalam suatu benda
                            </td>
                        </tr>
                        <tr>
                            <td className='indikator-no-table'>3.9.5</td>
                            <td>
                                Menganalisis hubungan antara konsep energi, usaha, hubungan usaha dan perubahan energi, hukum kekekalan energi
                            </td>
                        </tr>
                        <tr>
                            <td className='indikator-no-table'>4.9.1</td>
                            <td>
                                Menyelesaikan masalah nyata yang berkaitan dengan gerak dalam kehidupan sehari-hari dengan menerapkan metode ilmiah, 
                                konsep energi, usaha (kerja), dan hukum kekekalan energi
                            </td>
                        </tr>
                        <tr>
                            <td className='indikator-no-table'>4.9.2</td>
                            <td>
                            Menyelesaikan masalah nyata yang berkaitan dengan gerak dalam kehidupan sehari-hari dengan menerapkan metode ilmiah, 
                            konsep energi, usaha (kerja), dan hukum kekekalan energi
                            </td>
                        </tr>
                    </table>

                    
                </div>
            </div>
            </>
            :null}

            {showTujuan?
            <>
            <div className='tujuan-body'>
                <h2>TUJUAN</h2>
                <div className='tujuan-des'>
                    <h3>Tujuan Pembelajaran</h3>
                    <p>Setelah kegiatan pembelajaran ini diharapkan, peserta didik dapat:</p>
                    <table>
                        <tr>
                            <td className='tujuan-no-table'>1.</td>
                            <td>
                                menemutunjukkan adanya kuantitas energi kinetik dan energi potensial dalam berbagai gerak
                            </td>
                        </tr>
                        <tr>
                            <td className='tujuan-no-table'>2.</td>
                            <td>
                                menghitung energi kinetik, energi potensial, dan energi mekanik pada berbagai gerak yang 
                                sudah dipelajari (gerak lurus, gerak parabola, gerak melingkar, atau gerak getaran)
                            </td>
                        </tr>
                        <tr>
                            <td className='tujuan-no-table'>3.</td>
                            <td>
                                menjelaskan konsep usaha dalam hubungannya dengan gaya dan perpindahan
                            </td>
                        </tr>
                        <tr>
                            <td className='tujuan-no-table'>4.</td>
                            <td>
                                membedakan usaha positif, usaha nol, dan usaha negatif
                            </td>
                        </tr>
                        <tr>
                            <td className='tujuan-no-table'>5.</td>
                            <td>
                                menerapkan hubungan usaha dengan perubahan energi kinetik dan potensial
                            </td>
                        </tr>
                        <tr>
                            <td className='tujuan-no-table'>6.</td>
                            <td>
                                menerapkan hukum kekekalan energi mekanik pada gerak vertikal
                            </td>
                        </tr>
                        <tr>
                            <td className='tujuan-no-table'>7.</td>
                            <td>
                                menerapkan hukum kekekalan energi mekanik pada gerak parabola
                            </td>
                        </tr>
                        <tr>
                            <td className='tujuan-no-table'>8.</td>
                            <td>
                            menerapkan hukum kekekalan energi mekanik pada gerak melingkar
                            </td>
                        </tr>
                        <tr>
                            <td className='tujuan-no-table'>9.</td>
                            <td>
                            menerapkan hukum kekekalan energi mekanik pada gerak getaran
                            </td>
                        </tr>
                    </table>

                    
                </div>
            </div>
            </>
            :null}

    </div>
  )
}

export default KiKd