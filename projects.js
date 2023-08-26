const project_library = document.getElementById("project_library");
const project_type = document.getElementById("project_type");
const previous_button = document.getElementById("previous_type");
const next_button = document.getElementById("next_type");
let counter = 0;
let project_types = 0;

// Create Elements for dom
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
function addCards(object){
    let card_id = "index_" + counter; 

    let divElem = document.createElement("div");
    divElem.setAttribute("class", "project_item");
    divElem.setAttribute("id", card_id);
    divElem.style.transition = "margin-left 5s"
    divElem.style.animation = "cardAnimRight 0.1s ease-in reverse";

    let anchorElem = document.createElement("a");
    anchorElem.setAttribute("target", "_blank");
    anchorElem.setAttribute("href", object["url"]);
    anchorElem.setAttribute("class", "anchor_prop");
    divElem.appendChild(anchorElem);

    let spanElem = document.createElement("span");
    spanElem.setAttribute("class", "project_title");
    spanElem.innerText = object["title"]; 
    anchorElem.appendChild(spanElem);

    let imageElem = document.createElement("img");
    imageElem.setAttribute("class", "project_picture");
    imageElem.setAttribute("src", object["picture"]);
    anchorElem.appendChild(imageElem);

    if (counter > 0){
        divElem.style.display = "none";
    }

    project_library.appendChild(divElem);
    counter++;
}

window.addEventListener("load", () =>
{
        projectnames.forEach(item => {project_types++});
        console.log(project_types);

        project_type.innerText = projectnames[cur_index]; 

        // For each item in fcc_responsive_design
        // Source: 
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        projects_list[cur_index].forEach(item => {
            addCards(item);
            console.log(item);
        })
});

// When the next button is pressed, change the list of projects
// and name
next_button.addEventListener("click", () => {
    if (cur_index < project_types - 1){
        cur_index++;
        project_type.innerText = projectnames[cur_index];
    }
});

// When the previous button is pressed, change the list of projects
// and name
previous_button.addEventListener("click", () => {
    if (cur_index > 0)
    {   
        cur_index--;
        project_type.innerText = projectnames[cur_index];
    }
});

