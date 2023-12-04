//Fetch nasa's exoplanets data using axios and saves it into a csv file under the name of 'data'

const axios = require("axios")
const fs = require("fs")

const fetchData = () => {
    axios.post("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/IceTable/nph-iceTblDownload","workspace=TMP_QXNQLS_27251%2FTblView%2F2023.12.04_04.35.07_029475&useTimestamp=1&table=%2Fexodata%2Fkvmexoweb%2FExoTables%2Fcumulative.tbl&format=CSV&user=&label=&columns=kepid_display%2Ckepoi_name%2Ckepler_name%2Ckoi_disposition%2Ckoi_pdisposition%2Ckoi_score%2Ckoi_fpflag_nt%2Ckoi_fpflag_ss%2Ckoi_fpflag_co%2Ckoi_fpflag_ec%2Ckoi_period_str%2Ckoi_time0bk_str%2Ckoi_impact_str%2Ckoi_duration_str%2Ckoi_depth_str%2Ckoi_prad_str%2Ckoi_teq_str%2Ckoi_insol_str%2Ckoi_model_snr%2Ckoi_tce_plnt_num%2Ckoi_tce_delivname%2Ckoi_steff_str%2Ckoi_slogg_str%2Ckoi_srad_str%2Cra%2Cdec%2Ckoi_kepmag&rows=both&mission=ExoplanetArchive")

        .then(function (response) {
            fs.writeFile('data.csv', response.data, (err) => {
                if (err) throw err;
                console.log('Data written to file');
              });
        })

        .catch(function (error) {
            if (error.response) {
            console.log(error.response.status);
            } else if (error.request) {
            console.log('Error no response was received');
            } else {
            console.log('Error in setting up the request');
            }
        });
}

fetchData()
