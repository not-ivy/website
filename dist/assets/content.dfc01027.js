import{t,a as l,b as o}from"./translation.536eb4b1.js";document.getElementById("home-button").innerText=t.home;document.getElementById("projects-button").innerText=t.projects;document.getElementById("other-button").innerText=t.other;document.getElementById("settings-button").innerText=t.settings;document.getElementById("projects");const n=document.getElementById("settings");document.getElementById("settings-button").addEventListener("click",()=>{for(let e of document.getElementsByClassName("content"))e.style.display="none";n.style.display="block"});n.innerHTML=`
<fieldset>
  <legend>Themes</legend>
  <div>
    <label>Select a theme:</label>
    <select id="theme-selector"></select>
  </div>
  <div>
    <label>Preview:</label>
    <div id="theme-preview"></div>
  </div>
</fieldset>
`;document.getElementById("theme-selector").innerHTML+=l.map(e=>`<option value="${e}">${e}</option>`).join("");document.getElementById("theme-selector").addEventListener("change",()=>{fetch(`/themes/${document.getElementById("theme-selector").value}`).then(e=>e.text()).then(e=>{o.load(e),document.getElementById("theme-selector").value=document.getElementById("theme-selector").value,document.getElementById("theme-preview").innerHTML=e})});
