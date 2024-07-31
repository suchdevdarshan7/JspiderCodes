
const section = document.querySelector('.section');
const inputBtn = document.querySelector('.header__navigation--search');

document.addEventListener("DOMContentLoaded",()=>{
    inputBtn.addEventListener('keydown',(e)=>{
        // console.log(e)
        if(e.key==='Enter'){
            let value = inputBtn.value;
            console.log(value)
            if(value===''){
                alert("Enter a movie")
            }
            else{
                fetchApi(value);
            }
        }


    })

})


function renderContent(movie){

    const html =`
    <div class="main_container">
            <div class="container">
                <img src="${movie.Poster}" alt="">
            </div>
            <div class="box">
                <h2><span>Movie Name :</span> ${movie.Title}</h2>
                <p><span>Genere :</span> ${movie.Genre}</p>
                <p><span>Released :</span> ${movie.year}</p>
                <p><span>Box Office:</span> ${movie.BoxOffice}</p>
                <p><span>Actors :</span> ${movie.Actors}</p>
                <p><span>Director:</span> ${movie.Director}</p>
                <p><span>Film Synopsis:</span> ${movie.Plot}</p>
            </div>

        </div>
    `
    section.innerHTML = html;   
}


async function fetchApi(movie){
    
    try{
    let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ad9394d1&t=${movie}`);
    let data = await response.json();
    console.log(data);
    renderContent(data);
    }
    catch(error){
        console.log(error);
    }
}

