/**
 * Print info from requested user
 * @param {JSON} data received from API call 
 */

printUser = (data) => {
    let userProfile = document.querySelector(".user-profile");
    let repoHeading = document.querySelector(".repos-heading");

    // Prevent showing error in previous search
    let noResults = document.querySelector(".no-results");
    noResults.innerHTML = "";

    repoHeading.style.display = "block";

    let bio = data.bio? data.bio : "The user has no bio";

    userProfile.innerHTML = `
                             <img src="${data.avatar_url} alt="user profile picture">
                             <div class="user-info">
                                <p>@${data.login}</p>
                                <p class="user-name">${data.name}</p>
                                <p>${bio}</p>
                             </div>
                            `;
}



/**
 * Print repos from requested user
 * @param {JSON} data received from API call
 */

printRepos = (data) => {
    let reposInfo = document.querySelector(".repos-info");

    reposInfo.innerHTML = data.map(e => {
        return `<div class="repos">
                    <p>${e.name}</p>
                    <div class="icons">
                        <div class="stargazers">
                          <img src="./images/star.svg" alt="stargazers">
                          <p>${e.stargazers_count}</p>
                        </div>
                        <div class="forks">
                          <img src="./images/forked.svg" alt="forks">
                          <p>${e.forks_count}</p>
                        </div>
                    </div>
                </div>
                <hr>`;
    }).join("");
}


// Print no results message

printError = () => {
    let noResults = document.querySelector(".no-results");

    // Prevent showing user info from previous search
    let userProfile = document.querySelector(".user-profile");
    let repoHeading = document.querySelector(".repos-heading");
    let reposInfo = document.querySelector(".repos-info");

    userProfile.innerHTML = "";
    repoHeading.style.display = "none";
    reposInfo.innerHTML = "";

    noResults.innerHTML = `<p>Does not exist</p>`;
}