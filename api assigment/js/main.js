const key = '63facad1'; //api key 
const link = '&';
const link2 = 's=';


// getting ids and seving them inside a varible
const inputMovie = document.getElementById('input-movie');
const fetchBtn = document.getElementById('fetch-btn');
const movie = document.getElementById("display");
//button calling fetchData on click and keyup calling fetchData onkeyup
fetchBtn.addEventListener('click', fetchData);
inputMovie.addEventListener('keyup', fetchData);

// this function will clear the data inside the div with the id display
function clearcontent(elementID) {
    document.getElementById(elementID).innerHTML = "";
}


// in fetchData we make the apicall
function fetchData() {
    const url = 'http://www.omdbapi.com/?apikey=' + key + link + link2 + inputMovie.value;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Server response not OK :(');
            }

            return response.text();
        })
        .then(data => {
            // here i take the data console log it and its a json objsect

            console.log(data);
            //here i turn the JSON object and transform it into a JS object
            let jsontojs = JSON.parse(data);
            // here i console log it to se the new JS object
            console.log(jsontojs);
            //declaring the varible to be empty
            let string = ``;
            // this for loop will loop the the length of jsontojs.Search and take the poster titel and year for each movie
            // and att it too the varible string
            for (var i = 0; i < jsontojs.Search.length; i++){
                string += `
                <article id="remove" class="grid-item">
                    <h2 id="remove"> Title: ${jsontojs.Search[i].Title}</h2>
                    <h2 id="remove">  Year ${jsontojs.Search[i].Year}</h2>   
                    <img id="remove" src="${jsontojs.Search[i].Poster}" alt="Poster">
                </article>
                `;}
                // 
                //here it will print out everything added from the loop above inside the div with the id display
                movie.innerHTML += string;


        })
        .catch(error => {

            console.log(error);
        })
}

