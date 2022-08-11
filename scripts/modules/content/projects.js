const projects = document.getElementById('projects');

projects.innerHTML = /* html */`
<br>
<h2>Discord:</h2>
<ul>
  <li>
    <a href="https://github.com/not-ivy/compass">Compass</a>
    A library to work with discord webhooks, written in rust.
  </li>

  <br>
  <li>
    <a href="https://github.com/kami-blue/bot-js/">bot-js</a>
    It is a discord bot for Kami Blue, which is a minecraft utility mod for anarchy servers.<br>
    It has many features, such as <a href="/images/downloadCount.png">download counter</a>, <a href="/images/starboard.png">starboard</a>,
    auto responding, text filtering, and more.<br>
  </li>

  <br>
  <li>
    <a href="https://github.com/l1ving/bot-kt">bot-kt</a>
    It is the rewrite of <a href="https://github.com/kami-blue/bot-js/">bot-js</a>, in kotlin.
    It includes all the feature above, and added more features such as github issues lookup, a ticket system, and more.
  </li>

  <br>
  <li>
    <a href="https://github.com/not-ivy/OpenTicket">OpenTicket</a>
    A simple ticket system bot, written in TypeScript.
  </li>

  <br>
  <li>
    <a href="https://github.com/not-ivy/RankAssign">RankAssign</a>
    A bot that works with the game <a href="https://tetr.io">TETR.IO</a>, to assign ranks to players based on their TR.
  </li>
</ul>

<br>
<h2>Websites:</h2>
<ul>
  <li>
    <a href="https://github.com/not-ivy/website">This website!</a>
    Features a translating system, and a theme system.
    It is hosted on Cloudflare Pages, and built using <a href="https://vitejs.dev/">vite</a>.
  </li>

  <br>
  <li>
    <a href="https://github.com/not-ivy/launch">Launch</a>
    Simple and fast browser start/home page, with 100% of HTML.
  </li>

  <br>
  <li>
    <a href="https://github.com/not-ivy/lightdm-macOS">lightdm-macOS</a>
    A LightDM webkit2 greeter theme that aims to recreate the macOS login screen.
    There is not a lot of documentation the webkit2 greeter of LightDM, so this is just a design and it is not functional yet.
  </li>
</ul>

<br>
<h2>Other Programs:</h2>
<ul>
  <li>
    <a href="https://github.com/not-ivy/blog-rs">blog-rs</a>
    Tiny blog backend powered by Iron, and built with rust.
    This is my first rust program, so it might be buggy.
  </li>

  <br>
  <li>
    <a href="https://github.com/not-ivy/mod-updater">mod-updater</a>
    Easily upgrade/downgrade your minecraft mods with just one file.
  </li>

  <br>
  <li>
    <a href="https://github.com/not-ivy/RustMine">RustMine</a>
    A Minecraft launcher written in Rust, with an Electron frontend.
  </li>
</ul>
`;
