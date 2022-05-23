
const axios = require('axios')

const getnasapicture = async () => {
    const keynasa = "vf5BqSFzTiHKDkQj0ZpoGZwgay80pgIwjDJ2vWlu"
    const reqUrl = "https://api.nasa.gov/planetary/apod?api_key=${keynasa}"
    return new Promise(async function(resolve, reject) {
        try {
            const ret = await axios.get(reqUrl, {
                method: 'GET'
            })
            resolve(ret.data);
            print(re)
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}