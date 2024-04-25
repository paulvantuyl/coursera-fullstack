// Create new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Var to define URL of JSON file
var url = './health_article.json';

// GET: Specifies the HTTP method
// url: Represents the URL from where data will fetch
// true: Indicates if the request is async (true) or synchronous (false)
xhr.open('GET', url, true);

// Inform XMLHttpRequest object expected response from server is JSON
xhr.responseType = 'json';

// Define what should happen when the data is successfully loaded
xhr.onload = function() {
    // Retrieve the articles array from JSON response
    var articles = xhr.response.articles;

    // Retrieve HTML element with the ID 'articles' where fetched content will be displayed
    var articlesDiv = document.getElementById('articles');

    // Iterate health data to fetch on the front page using loops
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);      
    });
};

// Send request
xhr.send();