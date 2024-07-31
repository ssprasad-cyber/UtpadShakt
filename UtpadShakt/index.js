const body = document.querySelector("body");
const middle = document.querySelector(".middle");
const middle0 = document.querySelector(".middle0");
const power = document.querySelector("#power");
const light = document.querySelector(".light");
const night = document.querySelector(".night");
const nitime = document.querySelector(".nti");
const preview = document.querySelector(".preview");
const dino0 = document.querySelector(".dino0");
const dino1 = document.querySelector(".dino1");
const quote1 = document.querySelector(".quote1");
const quote2 = document.querySelector(".quote2");
const dino = document.querySelector("#dino");
const dino_btn = document.querySelector("#dino-btn");
const quote = document.querySelector("#quote");
const quote_btn = document.querySelector(".quotes");
const switch_d = document.querySelector(".switch");
// const search = document.querySelector("#search");
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search');
const dropdown = document.getElementById('dropdown');
const checkbox = document.getElementById('checkbox');
const greet = document.querySelector(".greet");

// json data
const jsondata = {
   "BookMarks": [
     {"title": "Whatsapp", "url": "https://web.whatsapp.com/"},
     {"title": "Github", "url": "https://www.edx.org/"},
     {"title": "Dev.to", "url": "https://dev.to/"},
     {"title": "Notion", "url": "https://www.notion.so/"}
   ],
   "CodingPractice": [
     {"title": "LeetCode", "url": "https://leetcode.com/"},
     {"title": "HackerRank", "url": "https://www.hackerrank.com/"},
     {"title": "Codewars", "url": "https://www.codewars.com/"},
     {"title": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/"}
   ],
   "DevelopmentTools": [
     {"title": "GitHub", "url": "https://github.com/"},
     {"title": "Stack Overflow", "url": "https://stackoverflow.com/"},
     {"title": "CodePen", "url": "https://codepen.io/"},
     {"title": "JSFiddle", "url": "https://jsfiddle.net/"}
   ],
   "Documentation": [
     {"title": "MDN Web Docs", "url": "https://developer.mozilla.org/"},
     {"title": "W3Schools", "url": "https://www.w3schools.com/"},
     {"title": "DevDocs", "url": "https://devdocs.io/"}
   ],
   "ProjectManagement": [
     {"title": "Trello", "url": "https://trello.com/"},
     {"title": "Asana", "url": "https://asana.com/"},
     {"title": "Slack", "url": "https://slack.com/"},
     {"title": "Notion", "url": "https://www.notion.so/"}
   ],
   "Design": [
     {"title": "Figma", "url": "https://www.figma.com/"},
     {"title": "Adobe XD", "url": "https://www.adobe.com/products/xd.html"},
     {"title": "Dribbble", "url": "https://dribbble.com/"},
     {"title": "Behance", "url": "https://www.behance.net/"}
   ],
   "Productivity": [
     {"title": "Todoist", "url": "https://todoist.com/"},
     {"title": "Pomodone", "url": "https://pomodoneapp.com/"},
     {"title": "RescueTime", "url": "https://www.rescuetime.com/"},
     {"title": "Toggl", "url": "https://toggl.com/"}
   ],
   "AITools": [
     {"title": "TensorFlow", "url": "https://www.tensorflow.org/"},
     {"title": "PyTorch", "url": "https://pytorch.org/"},
     {"title": "Google Colab", "url": "https://colab.research.google.com/"},
     {"title": "Kaggle", "url": "https://www.kaggle.com/"},
     {"title": "IBM Watson", "url": "https://www.ibm.com/watson"},
     {"title": "OpenAI", "url": "https://www.openai.com/"},
     {"title": "Hugging Face", "url": "https://huggingface.co/"},
     {"title": "Microsoft Azure AI", "url": "https://azure.microsoft.com/en-us/services/cognitive-services/"}
   ],
   "Chill": [
     {"title": "Headspace", "url": "https://www.headspace.com/"},
     {"title": "Calm", "url": "https://www.calm.com/"},
     {"title": "Spotify", "url": "https://www.spotify.com/"},
     {"title": "YouTube", "url": "https://www.youtube.com/"}
   ]
}

// Function to toggle light mode and dark mode
const toggleLightNightIcons = () => {
   light.classList.toggle("light_active");
   night.classList.toggle("night_active");
};

const enableDarkMode = () => {
   nitime.classList.add("nti_active");
   preview.classList.add("night_preview");
   dino0.classList.add("dino0_nyt");
   dino1.classList.add("dino1_nyt");
   quote1.classList.add("quote1_nyt");
   quote2.classList.add("quote2_nyt");
   switch_d.classList.remove("switch_d");
   body.classList.add("body-dark");
};

const disableDarkMode = () => {
   nitime.classList.remove("nti_active");
   preview.classList.remove("night_preview");
   dino0.classList.remove("dino0_nyt");
   dino1.classList.remove("dino1_nyt");
   quote1.classList.remove("quote1_nyt");
   quote2.classList.remove("quote2_nyt");
   switch_d.classList.add("switch_d");
   body.classList.remove("body-dark");
};

const applyMode = (mode) => {
   if (mode === 'dark') {
      if (!night.classList.contains("night_active")) {
         toggleLightNightIcons();
      }
      enableDarkMode();
   } else {
      if (night.classList.contains("night_active")) {
         toggleLightNightIcons();
      }
      disableDarkMode();
   }
};

const saveMode = (mode) => {
   localStorage.setItem('mode', mode);
};

const toggleMode = () => {
   let mode = localStorage.getItem('mode');
   if (mode === 'dark') {
      applyMode('light');
      saveMode('light');
   } else {
      applyMode('dark');
      saveMode('dark');
   }
};

// Load mode on page load
document.addEventListener("DOMContentLoaded", () => {
   const mode = localStorage.getItem('mode') || 'light';
   applyMode(mode);
});

// Event listeners for toggling modes
light.addEventListener("click", () => {
   toggleMode();
});

night.addEventListener("click", () => {
   toggleMode();
});

// Power on function
const powerOn = () => {
   document.querySelector('.middle').classList.toggle('middle-active');
   document.querySelector('.middle0').classList.toggle('middle0-active');
};

power.addEventListener('click', () => {
   powerOn();
});


document.addEventListener('DOMContentLoaded', () => {
   const encodedMessage = 'Q29weXJpZ2h0IC5kZXYgYnkg';
   const decodedMessage = atob(encodedMessage);
   const year = new Date().getFullYear();
   
   const copyrightElement = document.getElementById('cR');
   copyrightElement.innerHTML = `${decodedMessage} <a href="https://github.com/ssprasad-cyber" target="_blank">@ssprasad-cyber</a> ${year}`;
});

// Functional home page
const disp = (element) =>{
   element.style.display = (element.style.display === "none") ? "block" : "none";
}
dino_btn.addEventListener("click", () => {
      disp(dino);
});
quote_btn.addEventListener("click", () => {
   disp(quote);
});
// listners
window.addEventListener('keyup', (e) => {
   console.log(e)
   if (e.key === 'Escape') {
      checkbox.checked = !checkbox.checked;
      powerOn();
   }
   if ((e.key === "D" ||e.key === "d") && e.shiftKey) {
      disp(dino);
   } 
   if ((e.key === "Q" ||e.key === "q") && e.shiftKey) {
      disp(quote);
   }
   else {
      console.log(e);
   }
});
// search scprit

document.addEventListener('DOMContentLoaded', function() {
   const searchEngine = document.getElementById('search-engine');
   const searchForm = document.querySelector('#g-search form');

   // Change form action based on selected search engine
   searchEngine.addEventListener('click', function(event) {
      if (event.target.tagName === 'BUTTON') {
         searchForm.action = event.target.dataset.action;

         // Remove 'searchon' class from all buttons
         const buttons = searchEngine.querySelectorAll('button');
         buttons.forEach(button => button.classList.remove('searchon'));

         // Add 'searchon' class to the clicked button
         event.target.classList.add('searchon');
   }});

   // quick redirect
   searchEngine.addEventListener("dblclick",link = (event) =>{
      
      if (event.target.tagName === 'BUTTON') {
            const link = event.target.dataset.action;
            const truncatedLink = link.substring(0, link.lastIndexOf('/'));
            window.open(truncatedLink, '_Parent');
            
      }
   })
});
// Fetch links from jsondata and display them
const linksContainer = document.querySelector('#links-container');

for (const category in jsondata) {
   const categoryDiv = document.createElement('div');
   categoryDiv.innerHTML = `<h3>${category}</h3>`;

   jsondata[category].forEach(link => {
      const a = document.createElement('a');
      a.href = link.url;
      a.textContent = link.title;
      a.target = '_parent';
      categoryDiv.appendChild(a);
      categoryDiv.appendChild(document.createElement('br'));
   });

   linksContainer.appendChild(categoryDiv);
}
document.addEventListener('DOMContentLoaded', () => {
   const copyrightElement = document.getElementById('copyright');
   const year = new Date().getFullYear();
   copyrightElement.textContent = `Copyright .dev by @ssprasad-cyber ${year}`;
});
