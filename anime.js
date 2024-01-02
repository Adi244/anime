const btnE1 = document.getElementById("btn");
const animeContainerE1=document.querySelector(".anime-container");
const animeImgE1 = document.querySelector(".anime-img");
const animeNameE1 = document.querySelector(".anime-name");

btnE1.addEventListener("click", async function(){
    try {
        btnE1.disabled = true;
        btnE1.innerText="Loading...";
        animeNameE1.innerText="Updating..";
        animeImgE1.src = "spinner.svg";
        const response =await fetch("https://kitsu.io/api/edge");
        const data = await response.json();
        btnE1.disabled = false;
        btnE1.innerText="Get Anime";
        animeContainerE1.style.display="block";
        animeImgE1.src = data.url;
        animeNameE1.innerText = data.artist;
    } catch (error) {
        console.log(error);
        btnE1.disabled = false;
        btnE1.innerText = "Get Anime";
        animeNameE1.innerText = "An error occured";
    }
});