const GITHUBAPI = {

    url: "https://api.github.com/",

    call: function(path) {
        return fetch(path)
            .then(res => {
                return res.json();
            })
            .then(data => {
                return data;
            })
            .catch(err => err);
    },

    getUser: function(query) {
        let path = `${this.url}users/${query}`;
        return this.call(path);
    },

    getRepos: function(query) {
        let path = `${this.url}users/${query}/repos`;
        return this.call(path);
    }
};