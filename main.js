// Main Variables
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.addEventListener("click", () => {
  getRepos();
});

// Function 1:
function getRepos() {
  if (theInput.value == "") {
    reposData.innerHTML = "<span>Please Write Github User Name</span>";
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => response.json())
      .then((repositries) => {
        // [1] Empty Repos Data Container
        reposData.innerHTML = "";
        // [2] Loop On Repositries
        repositries.forEach((repo) => {
          let containerDiv = document.createElement("div");
          containerDiv.className = "containerDiv";
          // [2.1] Create Main Div
          let mainDiv = document.createElement("div");
          mainDiv.className = "repo-box";
          // [2.2] Create And Append Repo Name
          let repoName = document.createTextNode(repo.name);
          mainDiv.appendChild(repoName);
          // [2.3] Create Repo URL Anchor
          let repoURL = document.createElement("a");
          let repoUrlText = document.createTextNode("Visit");
          repoURL.appendChild(repoUrlText);
          // [2.4] Add href And Target To Anchor, Finally Append it
          repoURL.href = `https://github.com/${theInput.value}/${repo.name}`;
          repoURL.setAttribute("target", "_blank");
          mainDiv.appendChild(repoURL);
          // [2.5] Create Starts Count
          let startsSpan = document.createElement("span");
          let spanText = document.createTextNode(`⭐ ${repo.stargazers_count}`);
          startsSpan.appendChild(spanText);
          mainDiv.appendChild(startsSpan);
          // [2.6] Create div Contain ---> url, stars-count
          let containDiv = document.createElement("div");
          containDiv.appendChild(startsSpan);
          containDiv.appendChild(repoURL);
          mainDiv.appendChild(containDiv);
          // [2.7] Create Description Div
          let descDiv = document.createElement("div");
          descDiv.className = "desc-div";
          let descText = document.createTextNode(`Repo Description: ${repo.description}`);
          descDiv.appendChild(descText);
          // [2.8]
          // [2.9]

          containerDiv.appendChild(mainDiv);
          containerDiv.appendChild(descDiv);
          reposData.appendChild(containerDiv);
        });
      });
  }
}

// My github repo link: https://api.github.com/users/TahaKhaledSaad/repos
