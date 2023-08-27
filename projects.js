const project_library = document.getElementById("project_library");
const project_type = document.getElementById("project_type");
const previous_button = document.getElementById("previous_type");
const next_button = document.getElementById("next_type");
const previous_project = document.getElementById('previous_card');
const next_project = document.getElementById('next_card');
let counter = 0;
let project_types = 0;
let projects_count = 0;
let project_index = 0;

// Create Elements for dom
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
function addCards(object){
    let card_id = "index_" + counter; 

    let divElem = document.createElement("div");
    divElem.setAttribute("class", "project_item");
    divElem.setAttribute("id", card_id);
    divElem.style.animation = "cardAnimRight 0.2s ease-in reverse";
    divElem.style.display = "block";

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

        // For each item in project_type 
        // Source: 
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        projects_list[cur_index].forEach(item => {
            addCards(item);
            projects_count++;
        })

        console.log(projects_count)
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

// Change project card to the next one
next_project.addEventListener("click", () => {
    if (project_index < projects_count - 1){
        console.log("Next");
        let get_card = document.getElementById("index_" + project_index);
        get_card.style.animation = "cardAnimLeft 0.3s ease-in reverse";
        get_card.style.display = "none";


        project_index++;
        get_card = document.getElementById("index_" + project_index);
        get_card.style.display = "block";
    };
})

// Change project card to the previous one
previous_project.addEventListener("click", () => {
   if (project_index > 0){
        console.log("previous");
        let get_card = document.getElementById("index_" + project_index);
        get_card.style.display = "none";
        get_card.style.animation = "cardAnimRight 0.2s ease-in reverse";

        project_index--;
        get_card = document.getElementById("index_" + project_index);
        get_card.style.display = "block";
        console.log(get_card)
    } 
})

