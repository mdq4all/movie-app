
const httpGet = (path) => {
       return fetch("https://api.themoviedb.org/3/" + path, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWEwNGFkYzQ4MDkwMjgwMDRlMmE1OTBhODg2OTZjMSIsInN1YiI6IjYzZGMzOGRjMjVhNTM2MDBjZTIzYjVjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uwa2bPHdREUXv4jMAVLvRasBkyVpocnjwnFmKWjAvjY",
                accept: 'application/json'
            }
        }).then(result => result.json())
}

export default httpGet
