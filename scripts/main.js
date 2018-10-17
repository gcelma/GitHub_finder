const FORM = document.querySelector("form");
const INPUT = document.querySelector("input");

FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    let query = INPUT.value;

    // First call to API to get user profile info
    GITHUBAPI.getUser(query).then(user => {
        user.message === "Not Found" ? printError() : printUser(user);
    });

    // Second call to API to get users repos info
    GITHUBAPI.getRepos(query).then(user => {
        user.message !== "Not Found" ? printRepos(user) : "";
    });
});
