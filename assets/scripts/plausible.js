var script = document.createElement('script');
script.defer = true;
script.src = "https://analytics.projectsegfau.lt/js/script.js";
script.dataset.domain = "gradienceteam.github.io";
script.dataset.api = 'https://analytics.projectsegfau.lt/api/event';

document.getElementsByTagName('head')[0].appendChild(script);