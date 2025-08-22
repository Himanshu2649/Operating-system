function openFileExplorer() {
  const explorer = document.querySelector(".explorer");

  const exploreWindow = document.createElement("div");
  exploreWindow.id = "explorerWindow";
  exploreWindow.innerHTML = `<header>
                <h3><span><img src="https://win11.notaperson535.is-a.dev/img/explorer.png" alt=""></span>File Explorer
                </h3>
                <div class="icons">
                    <i id="mini" class="ri-subtract-fill" title="Minimize"></i>
                    <i id="maxi" class="ri-square-line" title="Maximize"></i>
                    <i id="cancle" class="ri-close-line" title="Close"></i>
                </div>
            </header>

            <div class="ribbon-toolbar">
                <button class="new"><i class="ri-add-line"></i> New</button>
                <button><img src="https://win11.notaperson535.is-a.dev/img/explorer/cut.png" alt=""></button>
                <button><img src="https://win11.notaperson535.is-a.dev/img/explorer/copy.png" alt=""></button>
                <button><img src="https://win11.notaperson535.is-a.dev/img/explorer/paste.png" alt=""></button>
                <button><img src="https://win11.notaperson535.is-a.dev/img/explorer/rename.png" alt=""></button>
                <button><img src="https://win11.notaperson535.is-a.dev/img/explorer/sort.png" alt=""> Sort</button>
                <button><img src="https://win11.notaperson535.is-a.dev/img/explorer/view.png" alt="">View</button>
            </div>

            <div class="breadcrumb-bar">
                <div class="part1">
                    <i class="back-arrow ri-arrow-left-line"></i>
                    <i class="ri-arrow-right-line"></i>
                    <i class="ri-arrow-up-line"></i>
                </div>
                <div class="part2">
                    <img src="https://win11.notaperson535.is-a.dev/img/thispc.png" alt="">
                    <i class="ri-arrow-right-s-line"></i>
                    <p>This PC</p>
                    <i class="ri-arrow-right-s-line"></i>
                </div>
                <div class="part3">
                    <i class="ri-search-line"></i>
                    <form><input type="text" id="search" placeholder="Search This PC"></form>
                </div>
            </div>

            <div class="explorer-body">
                <aside class="sidebar">
                    <p><span><i class="ri-arrow-down-s-line"></i><img
                                src="https://win11.notaperson535.is-a.dev/img/explorer/quickaccess.png"
                                alt=""></span>Quick Access</p>
                    <ul>
                        <li><img src="https://win11.notaperson535.is-a.dev/img/explorer/desktop-sm.png"> Desktop</li>
                        <li><img src="https://win11.notaperson535.is-a.dev/img/explorer/downloads-sm.png"> Downloads
                        </li>
                        <li><img src="https://win11.notaperson535.is-a.dev/img/explorer/documents-sm.png"> Documents
                        </li>
                        <li><img src="https://win11.notaperson535.is-a.dev/img/explorer/recyclebinempty.png"> Recycle
                            Bin</li>
                    </ul>
                    <p><i class="right ri-arrow-right-s-line"></i><img class="img"
                            src="https://win11.notaperson535.is-a.dev/img/explorer/onedrive-sm.png" alt="">OneDrive</p>
                    <p><i class="right ri-arrow-right-s-line"></i><img class="img"
                            src="https://win11.notaperson535.is-a.dev/img/thispc.png" alt="">This PC</p>
                </aside>

                <main class="content-area">
                    <h4>Folders (6)</h4>
                    <div class="folders">
                        <div class="folder"><img
                                src="https://win11.notaperson535.is-a.dev/img/explorer/desktop.png"><span>Desktop</span>
                        </div>
                        <div id="documents" class="folder"><img
                                src="https://win11.notaperson535.is-a.dev/img/explorer/documents.png"><span>Documents</span>
                        </div>
                        <div class="folder"><img
                                src="https://win11.notaperson535.is-a.dev/img/explorer/downloads.png"><span>Downloads</span>
                        </div>
                        <div class="folder"><img
                                src="https://win11.notaperson535.is-a.dev/img/explorer/music.png"><span>Music</span>
                        </div>
                        <div id="picutres" class="folder"><img
                                src="https://win11.notaperson535.is-a.dev/img/explorer/pictures.png"><span>Pictures</span>
                        </div>
                        <div class="folder"><img
                                src="https://win11.notaperson535.is-a.dev/img/explorer/videos.png"><span>Videos</span>
                        </div>
                    </div>

                    <h4>Devices and Drives (1)</h4>
                    <div class="drive">
                        <img src="https://win11.notaperson535.is-a.dev/img/explorer/disk-sm.png">
                        <span>Local Disk (C:)</span>
                    </div>
                </main>
            </div>`;

  explorer.addEventListener("click", () => {
    document.querySelector("#desktop").appendChild(exploreWindow);

    const contentArea = document.querySelector(".content-area");
    const backArrow = document.querySelector(".ri-arrow-left-line");

    let originalContentHTML = contentArea.innerHTML;

    // ! Function to show pictures folder content
    function showPicturesFolder() {
      contentArea.innerHTML = "";

      backArrow.addEventListener("click", () => {
        contentArea.innerHTML = originalContentHTML;
        setupListeners();
      });

      const heading = document.createElement("h4");
      heading.textContent = "Pictures";
      contentArea.appendChild(heading);

      const photoGrid = document.createElement("div");
      photoGrid.classList.add("picture-gallery");

      const photos = JSON.parse(localStorage.getItem("photos")) || [];

      if (photos.length === 0) {
        const emptyMsg = document.createElement("p");
        emptyMsg.textContent = "No captured photos available.";
        emptyMsg.style.margin = "20px";
        contentArea.appendChild(emptyMsg);
      } else {
        photos.forEach((src) => {
          const img = document.createElement("img");
          img.src = src;
          img.classList.add("gallery-photo");
          photoGrid.appendChild(img);
        });
        contentArea.appendChild(photoGrid);
      }
    }

    function setupListeners() {
      const picturesFolder = document.querySelector("#picutres");
      if (picturesFolder) {
        picturesFolder.addEventListener("click", showPicturesFolder);
      }
    }

    setupListeners();

    const mini = document.querySelector(".icons #mini");
    const maxi = document.querySelector(".icons #maxi");
    const cancle = document.querySelector(".icons #cancle");

    mini.addEventListener("click", () => {
      exploreWindow.style.height = "70vh";
      exploreWindow.style.width = "55vw";
    });

    maxi.addEventListener("click", () => {
      exploreWindow.style.height = "100%";
      exploreWindow.style.width = "100vw";
      exploreWindow.style.top = "50";
      exploreWindow.style.left = "50";
    });

    cancle.addEventListener("click", () => {
      exploreWindow.remove();
    });
  });

  const headerDiv = exploreWindow.querySelector("header");

  function makeDraggable(windowDiv, headerDiv) {
    let isDragging = false;
    let offsetX, offsetY;

    headerDiv.addEventListener("mousedown", (e) => {
      isDragging = true;
      offsetX = e.clientX - exploreWindow.offsetLeft;
      offsetY = e.clientY - exploreWindow.offsetTop;
      exploreWindow.style.zIndex = Date.now(); // bring to front
    });

    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        exploreWindow.style.left = `${e.clientX - offsetX}px`;
        exploreWindow.style.top = `${e.clientY - offsetY}px`;
      }
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
    });
  }

  makeDraggable(exploreWindow, headerDiv);

  // ! Resizable Winodw
  const resizers = [
    "top",
    "right",
    "bottom",
    "left",
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
  ];

  resizers.forEach((dir) => {
    const handle = document.createElement("div");
    handle.classList.add("resizer", dir);
    exploreWindow.appendChild(handle);
  });

  const allHandles = exploreWindow.querySelectorAll(".resizer");

  allHandles.forEach((handle) => {
    handle.addEventListener("mousedown", (e) => {
      e.preventDefault();
      const dir = handle.classList[1];

      const startX = e.clientX;
      const startY = e.clientY;
      const startWidth = parseInt(window.getComputedStyle(exploreWindow).width);
      const startHeight = parseInt(
        window.getComputedStyle(exploreWindow).height
      );
      const startLeft = exploreWindow.offsetLeft;
      const startTop = exploreWindow.offsetTop;

      function resize(e) {
        if (dir.includes("right")) {
          exploreWindow.style.width = startWidth + (e.clientX - startX) + "px";
        }
        if (dir.includes("left")) {
          const newWidth = startWidth - (e.clientX - startX);
          if (newWidth > 100) {
            exploreWindow.style.width = newWidth + "px";
            exploreWindow.style.left = startLeft + (e.clientX - startX) + "px";
          }
        }
        if (dir.includes("bottom")) {
          exploreWindow.style.height =
            startHeight + (e.clientY - startY) + "px";
        }
        if (dir.includes("top")) {
          const newHeight = startHeight - (e.clientY - startY);
          if (newHeight > 100) {
            exploreWindow.style.height = newHeight + "px";
            exploreWindow.style.top = startTop + (e.clientY - startY) + "px";
          }
        }
      }

      function stopResize() {
        document.removeEventListener("mousemove", resize);
        document.removeEventListener("mouseup", stopResize);
      }

      document.addEventListener("mousemove", resize);
      document.addEventListener("mouseup", stopResize);
    });
  });
}

openFileExplorer();

function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;

  const dayName = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  // Format: Tue, 23 Jun | 14:08
  clock.innerText = `${dayName},\n ${day} ${month} ${year} \n ${hours}:${minutes}`;
}

updateClock();
setInterval(updateClock, 1000);

// ! Vscode Window
const vscodeWindow = document.createElement("div");
vscodeWindow.classList.add("vsCode");
vscodeWindow.innerHTML = `<div class="top-bar">
                <div class="menu">
                    <span><img src="./assets/taskbar/vscodeLogo-removebg-preview.png" alt=""></span>
                    <span>File</span>
                    <span>Edit</span>
                    <span>Selection</span>
                    <span>View</span>
                    <span>Go</span>
                    <span>Run</span>
                    <span>...</span>
                </div>
                <div class="searching-bar">
                    <input id="searching" type="text" placeholder="Search">
                </div>
                <div class="top-icons">
                    <i class="ri-layout-grid-line"></i>
                    <i class="ri-layout-row-line"></i>
                    <i class="ri-layout-line"></i>
                    <i class="ri-user-line"></i>
                    <i class="ri-settings-3-line"></i>
                    <i id="mini" class="ri-subtract-fill" title="Minimize"></i>
                    <i id="maxi" class="ri-square-line" title="Maximize"></i>
                    <i id="cancle" class="ri-close-line" title="Close"></i>
                </div>
            </div>

            <div class="center-content">
                <div class="vscode-logo"><img src="./assets/visual-studio-code.svg" alt=""></div>
                <div class="shortcuts">
                    <p>Show All Commands <span>Ctrl + Shift + P</span></p>
                    <p>Open File <span>Ctrl + O</span></p>
                    <p>Open Folder <span>Ctrl + K Ctrl + O</span></p>
                    <p>Open Chat <span>Ctrl + Alt + I</span></p>
                </div>
            </div>

            <div class="bottom-bar">
                <span>🔗 Launchpad</span>
                <span>❌ 0 ⚠️ 0</span>
                <span>⚡ BLACKBOX Chat</span>
                <span>📒 Add Logs</span>
                <span>🟣 CyberCoder</span>
                <span>📎 Improve Code</span>
                <span>🔗 Share Code Link</span>
                <span>🌐 Open Website</span>
                <span style="margin-left:auto;">👥 Go Live</span>
                <span>⚡ AI Code Chat</span>
                <span>🔔</span>
            </div>`;

// ! Window Explorer
const exploreWindow = document.createElement("div");
exploreWindow.id = "explorerWindow";
exploreWindow.innerHTML = `<header>
                <h3><span><img src="https://win11.notaperson535.is-a.dev/img/explorer.png" alt=""></span>File Explorer
                </h3>
                <div class="icons">
                    <i id="mini" class="ri-subtract-fill" title="Minimize"></i>
                    <i id="maxi" class="ri-square-line" title="Maximize"></i>
                    <i id="cancle" class="ri-close-line" title="Close"></i>
                </div>
            </header>

            <div class="ribbon-toolbar">
                <button class="new"><i class="ri-add-line"></i> New</button>
                <button><img src="https://win11.notaperson535.is-a.dev/img/explorer/cut.png" alt=""></button>
                <button><img src="https://win11.notaperson535.is-a.dev/img/explorer/copy.png" alt=""></button>
                <button><img src="https://win11.notaperson535.is-a.dev/img/explorer/paste.png" alt=""></button>
                <button><img src="https://win11.notaperson535.is-a.dev/img/explorer/rename.png" alt=""></button>
                <button><img src="https://win11.notaperson535.is-a.dev/img/explorer/sort.png" alt=""> Sort</button>
                <button><img src="https://win11.notaperson535.is-a.dev/img/explorer/view.png" alt="">View</button>
            </div>

            <div class="breadcrumb-bar">
                <div class="part1">
                    <i class="back-arrow ri-arrow-left-line"></i>
                    <i class="ri-arrow-right-line"></i>
                    <i class="ri-arrow-up-line"></i>
                </div>
                <div class="part2">
                    <img src="https://win11.notaperson535.is-a.dev/img/thispc.png" alt="">
                    <i class="ri-arrow-right-s-line"></i>
                    <p>This PC</p>
                    <i class="ri-arrow-right-s-line"></i>
                </div>
                <div class="part3">
                    <i class="ri-search-line"></i>
                    <form><input type="text" id="search" placeholder="Search This PC"></form>
                </div>
            </div>

            <div class="explorer-body">
                <aside class="sidebar">
                    <p><span><i class="ri-arrow-down-s-line"></i><img
                                src="https://win11.notaperson535.is-a.dev/img/explorer/quickaccess.png"
                                alt=""></span>Quick Access</p>
                    <ul>
                        <li><img src="https://win11.notaperson535.is-a.dev/img/explorer/desktop-sm.png"> Desktop</li>
                        <li><img src="https://win11.notaperson535.is-a.dev/img/explorer/downloads-sm.png"> Downloads
                        </li>
                        <li><img src="https://win11.notaperson535.is-a.dev/img/explorer/documents-sm.png"> Documents
                        </li>
                        <li><img src="https://win11.notaperson535.is-a.dev/img/explorer/recyclebinempty.png"> Recycle
                            Bin</li>
                    </ul>
                    <p><i class="right ri-arrow-right-s-line"></i><img class="img"
                            src="https://win11.notaperson535.is-a.dev/img/explorer/onedrive-sm.png" alt="">OneDrive</p>
                    <p><i class="right ri-arrow-right-s-line"></i><img class="img"
                            src="https://win11.notaperson535.is-a.dev/img/thispc.png" alt="">This PC</p>
                </aside>

                <main class="content-area">
                    <h4>Folders (6)</h4>
                    <div class="folders">
                        <div class="folder"><img
                                src="https://win11.notaperson535.is-a.dev/img/explorer/desktop.png"><span>Desktop</span>
                        </div>
                        <div class="folder"><img
                                src="https://win11.notaperson535.is-a.dev/img/explorer/documents.png"><span>Documents</span>
                        </div>
                        <div class="folder"><img
                                src="https://win11.notaperson535.is-a.dev/img/explorer/downloads.png"><span>Downloads</span>
                        </div>
                        <div class="folder"><img
                                src="https://win11.notaperson535.is-a.dev/img/explorer/music.png"><span>Music</span>
                        </div>
                        <div id="picutres" class="folder"><img
                                src="https://win11.notaperson535.is-a.dev/img/explorer/pictures.png"><span>Pictures</span>
                        </div>
                        <div class="folder"><img
                                src="https://win11.notaperson535.is-a.dev/img/explorer/videos.png"><span>Videos</span>
                        </div>
                    </div>

                    <h4>Devices and Drives (1)</h4>
                    <div class="drive">
                        <img src="https://win11.notaperson535.is-a.dev/img/explorer/disk-sm.png">
                        <span>Local Disk (C:)</span>
                    </div>
                </main>
            </div>`;

exploreWindow.style.zIndex = "2000";

// ! MicroSoft Store Window
const microsoftStoreWindow = document.createElement("div");
microsoftStoreWindow.classList.add("store-container");

microsoftStoreWindow.innerHTML = ` <aside class="sidebar">
                <div class="logo"></div>
                <nav>
                    <ul>
                        <li class="active"><i class="ri-home-5-line"></i> Home</li>
                        <li><i class="ri-apps-line"></i> Apps</li>
                        <li><i class="ri-gamepad-line"></i> Gaming</li>
                        <li><i class="ri-star-line"></i> What's New</li>
                        <li><i class="ri-download-2-line"></i> Downloads</li>
                        <li><i class="ri-folder-line"></i> Library</li>
                    </ul>
                </nav>
            </aside>

            <!-- Main Content -->
            <main class="main-content">
                <header class="topbar">
                    <input type="text" placeholder="Search apps, games, movies, and more" />
                    <div class="profile">SC</div>
                    <div class="icons">
                        <i id="mini" class="ri-subtract-fill" title="Minimize"></i>
                        <i id="maxi" class="ri-square-line" title="Maximize"></i>
                        <i id="cancle" class="ri-close-line" title="Close"></i>
                    </div>
                </header>

                <section class="hero-section">
                    <div class="left-hero">
                        <h2>Microsoft 365</h2>
                        <p>Apps to manage the everyday</p>
                        <span class="price">₹6,899.00</span>
                        <button>See details</button>
                        <div class="icons-bg"></div>
                    </div>
                    <div class="right-hero">
                        <div class="ad big-ad">Tides of Terraria update is now live</div>
                        <div class="ad-row">
                            <div class="ad small">Gameloft Publisher Sale</div>
                            <div class="ad small">Deals Unlocked Add-on Sale</div>
                        </div>
                    </div>
                </section>

                <section class="game-list">
                    <h3>Best selling games</h3>
                    <div class="games">
                        <div class="game">
                            <img src="./assets/gta.webp" alt="GTA V" />
                            <p>Grand Theft Auto V</p>
                        </div>
                        <div class="game">
                            <img src="./assets/taskbar/minecraft-windows.jpg" alt="Minecraft" />
                            <p>Minecraft: Java & Bedrock</p>
                        </div>
                        <div class="game">
                            <img src="./assets//taskbar/asphalt.jfif" alt="Asphalt Legends" />
                            <p>Asphalt Legends</p>
                        </div>
                        <div class="game">
                            <img src="./assets/taskbar/cricket.jfif" alt="Cricket 24" />
                            <p>Cricket 24</p>
                        </div>
                        <div class="game">
                            <img src="./assets/taskbar/forza.jfif" alt="Forza Horizon 5" />
                            <p>Forza Horizon 5</p>
                        </div>
                        <div class="game">
                            <img src="./assets//taskbar/roblox.jfif" alt="Roblox" />
                            <p>Roblox</p>
                        </div>
                        <div class="game">
                            <img src="./assets/taskbar/skyline.jfif" alt="Cities Skylines II" />
                            <p>Cities: Skylines II</p>
                        </div>
                    </div>
                </section>

            </main>`;

// ! Games Window ----------->>>>>>>>>>>>>>>>
const gamesWindow = document.createElement("div");

gamesWindow.classList.add("solitair");

gamesWindow.innerHTML = ` <div class="upperheader">
                <p>Solitair & Casual Games</p>
                <div class="icons">
                    <i class="ri-subtract-line" id="min"></i>
                    <i class="ri-stop-line" id="max"></i>
                    <i class="ri-close-line" id="close"></i>
                </div>
            </div>
            <header>
                <div class="menu-title"><i class="ri-menu-line"></i> Microsoft Solitaire & Casual Games</div>
                <div class="account">Signing in <i class="ri-user-line"></i></div>
            </header>

            <div class="content">
                <div class="welcome">
                    Welcome! <span class="subtitle">Select a game to start playing.</span>
                </div>

                <div class="main-area">
                    <div class="solitaire-collection">
                        <h3>Microsoft<br>Solitaire Collection</h3>
                    </div>

                    <div class="game-grid">
                        <div class="game-card">
                            <img src="./assets/games/klondike.jfif" alt="Klondike">
                            <div class="label">Klondike</div>
                        </div>
                        <div class="game-card">
                            <img src="./assets/games/spider.jfif">
                            <div class="label">Spider</div>
                        </div>
                        <div class="game-card">
                            <img src="./assets/games/freecell.png" alt="FreeCell">
                            <div class="label">FreeCell</div>
                        </div>
                        <div class="game-card">
                            <img src="./assets/games/pyramid.png" alt="Pyramid">
                            <div class="label">Pyramid</div>
                        </div>
                        <div class="game-card">
                            <img src="./assets/games/tripeaks.jfif" alt="TriPeaks">
                            <div class="label">TriPeaks</div>
                        </div>
                    </div>
                </div>

                <div class="casual-title">Casual Games</div>
                <div class="casual-grid">
                    <div class="game-card">
                        <img src="./assets/games/mahjong.jfif" alt="Mahjong">
                        <div class="label">Mahjong</div>
                    </div>
                    <div class="game-card">
                        <img src="./assets/games/bubble.jpg" alt="Bubble">
                        <div class="label">Bubble</div>
                    </div>
                    <div class="game-card">
                        <img src="./assets/games/jewwl.webp" alt="Jewel 2">
                        <div class="label">Jewel 2</div>
                    </div>
                    <div class="game-card">
                        <img src="./assets/games/puzzle.jpg" alt="Jigsaw">
                        <div class="label">Jigsaw</div>
                    </div>
                    <div class="game-card">
                        <img src="./assets/games/gravity.jfif" alt="Gravity Blocks">
                        <div class="label">Gravity Blocks</div>
                    </div>
                    <div class="game-card">
                        <img src="./assets/games/suduko.jpg" alt="Sudoku">
                        <div class="label">Sudoku</div>
                    </div>
                </div>
            </div>`;

// ! Settings Window --------------->>>>>>>>>>>>>>>
const settingsWindow = document.createElement("div");
settingsWindow.classList.add("windowSettings");
settingsWindow.innerHTML = `
            <header>
                <p>Settings</p>
                <div class="icons">
                    <i class="ri-subtract-line" id="min"></i>
                    <i class="ri-stop-line" id="max"></i>
                    <i class="ri-close-line" id="close"></i>
                </div>
            </header>

            <div class="settings-header">
                <div class="user-info">
                    <h2>Sakshi Chaturvedi</h2>
                    <p>sakshi3012002@gmail.com</p>
                    <a href="#">My Microsoft account</a>
                </div>

                <div class="top-right">
                    <div>
                        <i class="ri-cloud-line"></i>
                        <p>OneDrive<br><small>Back up files</small></p>
                    </div>
                    <div>
                        <i class="ri-refresh-line"></i>
                        <p>Windows Update<br><small>Last checked: 12 hrs ago</small></p>
                    </div>
                    <div>
                        <i class="ri-earth-line"></i>
                        <p>Web browsing<br><small>Restore recommended</small></p>
                    </div>
                </div>
            </div>

            <div class="window-search-bar">
                <input type="text" placeholder="Find a setting" />
            </div>

            <div class="window-settings-grid">
                <div class="window-setting-tile">
                    <i class="ri-computer-line window-setting-icon"></i>
                    <div class="window-setting-info">
                        <h4>System</h4>
                        <p>Display, sound, notifications, power</p>
                    </div>
                </div>

                <div class="window-setting-tile">
                    <i class="ri-bluetooth-line setting-icon"></i>
                    <div class="window-setting-info">
                        <h4>Devices</h4>
                        <p>Bluetooth, printers, mouse</p>
                    </div>
                </div>

                <div class="window-setting-tile">
                    <i class="ri-smartphone-line setting-icon"></i>
                    <div class="window-setting-info">
                        <h4>Mobile devices</h4>
                        <p>Link your Android, iPhone</p>
                    </div>
                </div>

                <div class="window-setting-tile">
                    <i class="ri-wifi-line setting-icon"></i>
                    <div class="window-setting-info">
                        <h4>Network & Internet</h4>
                        <p>Wi-Fi, airplane mode, VPN</p>
                    </div>
                </div>

                <div class="window-setting-tile">
                    <i class="ri-brush-line setting-icon"></i>
                    <div class="window-setting-info">
                        <h4>Personalization</h4>
                        <p>Background, lock screen, colors</p>
                    </div>
                </div>

                <div class="window-setting-tile">
                    <i class="ri-apps-2-line setting-icon"></i>
                    <div class="window-setting-info">
                        <h4>Apps</h4>
                        <p>Uninstall, defaults</p>
                    </div>
                </div>

                <div class="window-setting-tile">
                    <i class="ri-user-line setting-icon"></i>
                    <div class="window-setting-info">
                        <h4>Accounts</h4>
                        <p>Your accounts, email, sync</p>
                    </div>
                </div>

                <div class="window-setting-tile">
                    <i class="ri-global-line setting-icon"></i>
                    <div class="window-setting-info">
                        <h4>Time & Language</h4>
                        <p>Speech, region, date</p>
                    </div>
                </div>

                <div class="window-setting-tile">
                    <i class="ri-gamepad-line setting-icon"></i>
                    <div class="window-setting-info">
                        <h4>Gaming</h4>
                        <p>Game Bar, captures, Game Mode</p>
                    </div>
                </div>

                <div class="window-setting-tile">
                    <i class="ri-eye-line setting-icon"></i>
                    <div class="window-setting-info">
                        <h4>Ease of Access</h4>
                        <p>Narrator, magnifier, high contrast</p>
                    </div>
                </div>

                <div class="window-setting-tile">
                    <i class="ri-lock-line setting-icon"></i>
                    <div class="window-setting-info">
                        <h4>Privacy</h4>
                        <p>Location, camera, microphone</p>
                    </div>
                </div>

                <div class="window-setting-tile">
                    <i class="ri-restart-line setting-icon"></i>
                    <div class="window-setting-info">
                        <h4>Update & Security</h4>
                        <p>Windows Update, recovery, backup</p>
                    </div>
                </div>
            </div>`;

// ! Draggable Function
function makeDraggable(element) {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  element.addEventListener("mousedown", (e) => {
    isDragging = true;

    // Bring to front if needed
    element.style.zIndex = 1000;

    // Calculate offset between mouse and element corner
    offsetX = e.clientX - element.offsetLeft;
    offsetY = e.clientY - element.offsetTop;

    // Change cursor
    element.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    // Move element to follow mouse
    element.style.left = `${e.clientX - offsetX}px`;
    element.style.top = `${e.clientY - offsetY}px`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    element.style.cursor = "grab";
  });
}

// ! Right click menu ----------->>>>>>>>>>>>
function rightClickMenu() {
  document.querySelector("#desktop").addEventListener("contextmenu", (e) => {
    e.preventDefault();

    const existingMenu = document.querySelector(".context-menu");
    if (existingMenu) existingMenu.remove();

    const rightClick = document.createElement("div");
    rightClick.classList.add("context-menu");

    rightClick.innerHTML = `
      <ul>
        <li><i class="ri-layout-grid-line"></i> View</li>
        <li><i class="ri-arrow-up-down-line"></i> Sort by</li>
        <li><i class="ri-refresh-line"></i> Refresh</li>
        <li class="new-folder"><i class="ri-add-box-line"></i> New</li>
        <li class="divider"></li>
        <li><i class="ri-computer-line"></i> Display settings</li>
        <li><i class="ri-brush-line"></i> Personalize</li>
        <li><i class="ri-terminal-box-line"></i> Open in Windows Terminal</li>
        <li><i class="ri-cloud-line"></i> OneDrive</li>
        <li class="divider"></li>
        <li><i class="ri-more-line"></i> Show more options <span>Shift + F10</span></li>
      </ul>`;

    rightClick.style.left = e.pageX + "px";
    rightClick.style.top = e.pageY + "px";

    // ! Epxlorer Window

    document.querySelector("#desktop").appendChild(rightClick);

    const newFolder = rightClick.querySelector(".new-folder");

    newFolder.addEventListener("click", (event) => {
      event.stopPropagation(); // prevent outer click

      const folder = document.createElement("div");
      folder.classList.add("folderStructure");
      folder.style.left = rightClick.style.left;
      folder.style.top = rightClick.style.top;

      folder.innerHTML = `
        <img src="./assets/taskbar/folder-removebg-preview.png" alt="folder" />
        <p contenteditable="true" class="folder-name">New Folder</p>
      `;

      document.querySelector("#desktop").appendChild(folder);

      const folderData = {
        name: "New Folder",
        top: folder.style.top,
        left: folder.style.left,
      };

      const existingFolders = JSON.parse(localStorage.getItem("folders")) || [];
      existingFolders.push(folderData);
      localStorage.setItem("folders", JSON.stringify(existingFolders));

      makeDraggable(folder);

      // ! Right click on folder
      folder.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        e.stopPropagation();

        // ! Remove old context menu if exists
        document.querySelector(".folder-menu")?.remove();

        const Foldermenu = document.createElement("div");
        Foldermenu.classList.add("folder-menu");
        Foldermenu.innerHTML = `
          <ul>
            <li class="open">🗂️ Open File</li>
            <hr>
            <li class="delete">🗑️ Delete File</li>
            <hr>
            <li class="rename">✏️ Rename</li>
            <hr>
            <li class="vs-code">🧠 Open with VS Code</li>
          </ul>`;

        Foldermenu.style.position = "absolute";
        Foldermenu.style.left = e.pageX + "px";
        Foldermenu.style.top = e.pageY + "px";
        Foldermenu.style.zIndex = 9999;

        document.querySelector("#desktop").appendChild(Foldermenu);

        // ! Actions
        Foldermenu.querySelector(".open").addEventListener("click", (ev) => {
          ev.stopPropagation();
          folder.dispatchEvent(new Event("dblclick"));
          Foldermenu.remove();
        });

        Foldermenu.querySelector(".delete").addEventListener("click", (ev) => {
          ev.stopPropagation();
          deleteFolder(folder);
          Foldermenu.remove();
        });

        Foldermenu.querySelector(".rename").addEventListener("click", (ev) => {
          ev.stopPropagation();
          folder.querySelector(".folder-name").focus();
          Foldermenu.remove();
        });

        Foldermenu.querySelector(".vs-code").addEventListener("click", (ev) => {
          ev.stopPropagation();

          document.querySelector("#desktop").appendChild(vscodeWindow);
          vscodeWindow.style.zIndex = 10000;

          const mini = document.querySelector(".vsCode #mini");
          const maxi = document.querySelector(".vsCode #maxi");
          const cancle = document.querySelector(".vsCode #cancle");

          mini.addEventListener("click", () => {
            vscodeWindow.style.height = "70vh";
            vscodeWindow.style.width = "65vw";
            vscodeWindow.style.top = "50%";
            vscodeWindow.style.left = "50%";
            vscodeWindow.style.transform = "translate(-50%,-50%)";
          });

          maxi.addEventListener("click", () => {
            vscodeWindow.style.height = "100%";
            vscodeWindow.style.width = "100%";
          });

          cancle.addEventListener("click", () => {
            vscodeWindow.remove();
          });
          Foldermenu.remove();
        });

        // ! Auto remove on outside click
        document.addEventListener("click", () => Foldermenu.remove(), {
          once: true,
        });
      });

      folder.querySelector(".folder-name").focus();

      // ! Double-click = open File Explorer
      folder.addEventListener("dblclick", () => {
        // ! Prevent duplicates
        if (document.querySelector("#explorerWindow")) return;

        document.querySelector("#desktop").appendChild(exploreWindow);

        makeDraggable(exploreWindow);

        const mini = exploreWindow.querySelector("#mini");
        const maxi = exploreWindow.querySelector("#maxi");
        const close = exploreWindow.querySelector("#cancle");

        mini.addEventListener("click", () => {
          exploreWindow.style.height = "70vh";
          exploreWindow.style.width = "55vw";
        });

        maxi.addEventListener("click", () => {
          exploreWindow.style.height = "100%";
          exploreWindow.style.width = "100vw";
        });

        close.addEventListener("click", () => {
          exploreWindow.remove();
        });
      });
    });

    // ! Close context menu on global click
    document.addEventListener(
      "click",
      () => {
        document.querySelector(".context-menu")?.remove();
      },
      { once: true }
    );
  });
}

rightClickMenu();

// ! More Apps wali functionlity
function moreAppsFunction() {
  const moreappsBtn = document.querySelector("#taskbar .moreapps");

  moreappsBtn.addEventListener("click", () => {
    const existingWindow = document.querySelector(".start-menu");
    if (existingWindow) {
      existingWindow.remove();
      return;
    }

    const moreAppsWindow = document.createElement("div");
    moreAppsWindow.classList.add("start-menu");

    moreAppsWindow.innerHTML = `
      <div class="menu-header">
        <h3>Pinned</h3>
        <button>All apps ▸</button>
      </div>

      <div class="grid">
        <div class="app edge"><img src="./assets/taskbar/edge.png" alt=""><p>Edge</p></div>
        <div class="app file"><img src="./assets/taskbar/explorer.png" alt=""><p>File Explorer</p></div>
        <div class="app word"><img src="./assets/taskbar/word.ico" alt=""><p>Word</p></div>
        <div class="app excel"><img src="./assets/taskbar/excel.ico" alt=""><p>Excel</p></div>
        <div class="app powerpoint"><img src="./assets/taskbar/powerpoint.ico" alt=""><p>PowerPoint</p></div>
        <div class="app notepad-app"><img src="./assets/taskbar/notepad.ico" alt=""><p>Notepad</p></div>
        <div class="app calculator"><img src="./assets/taskbar/calculator.ico" alt=""><p>Calculator</p></div>
        <div class="app store"><img src="./assets/taskbar/store.ico" alt=""><p>Store</p></div>
        <div class="app code"><img src="./assets/vscode.ico" alt=""><p>VS Code</p></div>
        <div class="app solitaire"><img src="./assets/taskbar/solitaire.ico" alt=""><p>Solitaire</p></div>
        <div class="app whiteboard"><img src="./assets/taskbar/whiteboard.png" alt=""><p>Whiteboard</p></div>
        <div class="app terminal"><img src="./assets/taskbar/terminal.ico" alt=""><p>Terminal</p></div>
      </div>

      <div class="settings">
        <p class="set"><span><i class="ri-settings-2-line"></i></span>Settings</p>
        <p class="shut"><span><i class="ri-shut-down-line"></i></span>ShutDown</p>
      </div>`;

    document.querySelector("#desktop").appendChild(moreAppsWindow);

    // 🔁 Define all launchers fresh
    const openApp = (selector, launcherFn) => {
      const btn = moreAppsWindow.querySelector(selector);
      if (btn) {
        btn.addEventListener("click", () => {
          launcherFn(); // Call app launcher
          moreAppsWindow.remove();
        });
      }
    };

    // ⬇️ Connect all app launchers
    openApp(".file", () => {
      fileExplorer();
    });

    openApp(".edge", () => {
      openEdge(); // Should create fresh edge window
    });

    openApp(".notepad-app", () => {
      notePad(); // Already defined
    });

    openApp(".calculator", () => {
      calculator();
    });

    openApp(".store", () => {
      openStore();
    });

    openApp(".code", () => {
      openVsCode();
    });

    openApp(".solitaire", () => {
      openGamesWindow();
    });

    openApp(".terminal", () => {
      cmdWindow(); // Your terminal
    });

    openApp(".set", () => {
      openSettings(); // Must return new settings window
    });

    openApp(".shut", () => {
      shutDownFunction(); // Your shutdown screen
    });

    // 🟡 Close menu when clicked outside
    document.addEventListener(
      "click",
      (e) => {
        if (
          !moreAppsWindow.contains(e.target) &&
          !moreappsBtn.contains(e.target)
        ) {
          moreAppsWindow.remove();
        }
      },
      { once: true }
    );
  });
}

moreAppsFunction();

// ! Restoring Folders from LocalStorage
window.addEventListener("DOMContentLoaded", () => {
  const savedFolders = JSON.parse(localStorage.getItem("folders")) || [];

  savedFolders.forEach((folderData) => {
    const folder = document.createElement("div");
    folder.classList.add("folderStructure");
    folder.style.left = folderData.left;
    folder.style.top = folderData.top;

    folder.innerHTML = `
      <img src="./assets/taskbar/folder-removebg-preview.png" alt="folder" />
      <p contenteditable="true" class="folder-name">${folderData.name}</p>
    `;

    document.querySelector("#desktop").appendChild(folder);
    makeDraggable(folder);

    // Reattach all the same context menu & dblclick listeners here (just like above)
    folder.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      e.stopPropagation();

      document.querySelector(".folder-menu")?.remove();

      const Foldermenu = document.createElement("div");
      Foldermenu.classList.add("folder-menu");
      Foldermenu.innerHTML = `
        <ul>
          <li class="open">🗂️ Open File</li>
          <hr>
          <li class="delete">🗑️ Delete File</li>
          <hr>
          <li class="rename">✏️ Rename</li>
          <hr>
          <li class="vs-code">🧠 Open with VS Code</li>
        </ul>`;

      Foldermenu.style.position = "absolute";
      Foldermenu.style.left = e.pageX + "px";
      Foldermenu.style.top = e.pageY + "px";
      Foldermenu.style.zIndex = 9999;

      document.querySelector("#desktop").appendChild(Foldermenu);

      Foldermenu.querySelector(".open").addEventListener("click", () => {
        folder.dispatchEvent(new Event("dblclick"));
        Foldermenu.remove();
      });

      Foldermenu.querySelector(".delete").addEventListener("click", () => {
        folder.remove();
        // 🧹 Remove from localStorage too
        const updated = savedFolders.filter(
          (f) => f.top !== folder.style.top || f.left !== folder.style.left
        );
        localStorage.setItem("folders", JSON.stringify(updated));
        Foldermenu.remove();
      });

      Foldermenu.querySelector(".rename").addEventListener("click", () => {
        folder.querySelector(".folder-name").focus();
        Foldermenu.remove();
      });

      Foldermenu.querySelector(".vs-code").addEventListener("click", () => {
        document.querySelector("#desktop").appendChild(vscodeWindow);
        vscodeWindow.style.zIndex = 10000;

        const mini = document.querySelector(".vsCode #mini");
        const maxi = document.querySelector(".vsCode #maxi");
        const cancle = document.querySelector(".vsCode #cancle");

        mini.addEventListener("click", () => {
          vscodeWindow.style.height = "70vh";
          vscodeWindow.style.width = "65vw";
          vscodeWindow.style.top = "50%";
          vscodeWindow.style.left = "50%";
          vscodeWindow.style.transform = "translate(-50%,-50%)";
        });

        maxi.addEventListener("click", () => {
          vscodeWindow.style.height = "100%";
          vscodeWindow.style.width = "100%";
        });

        cancle.addEventListener("click", () => {
          vscodeWindow.remove();
        });
        Foldermenu.remove();
      });

      document.addEventListener("click", () => Foldermenu.remove(), {
        once: true,
      });
    });

    folder.addEventListener("dblclick", () => {
      if (document.querySelector("#explorerWindow")) return;

      document.querySelector("#desktop").appendChild(exploreWindow);
      makeDraggable(exploreWindow);

      const mini = exploreWindow.querySelector("#mini");
      const maxi = exploreWindow.querySelector("#maxi");
      const close = exploreWindow.querySelector("#cancle");

      mini.addEventListener("click", () => {
        exploreWindow.style.height = "70vh";
        exploreWindow.style.width = "55vw";
      });

      maxi.addEventListener("click", () => {
        exploreWindow.style.height = "100%";
        exploreWindow.style.width = "100vw";
      });

      close.addEventListener("click", () => {
        exploreWindow.remove();
      });
    });
  });
});

// ! Camera open functionality
let cameraStream = null;

function openCamera() {
  const cameraIcon = document.querySelector("#taskbar .cameraicon");
  cameraIcon.addEventListener("click", () => {
    const existingWidget = document.querySelector("#camera");
    if (existingWidget) {
      existingWidget.remove();
      return;
    }

    const cameraWindow = document.createElement("div");
    cameraWindow.id = "camera";

    cameraWindow.innerHTML = `
      <div class="camera-header">
        <div class="camera-logo">
          <img src="./assets/download.png" alt="">
          <p>Camera</p>
        </div>
        <div class="camera-controls">
          <i class="ri-subtract-line" id="camera-min"></i>
          <i class="ri-stop-line" id="camera-max"></i>
          <i class="ri-close-line" id="camera-close"></i>
        </div>
      </div>
      <div class="camera-body">
        <video id="camFeed" autoplay></video>
        <div class="camera-bottom-bar">
          <button class="capture-btn">
            <img src="./assets/taskbar/camera-capture.webp" alt="Capture">
          </button>
        </div>
      </div>`;

    document.querySelector("#desktop").appendChild(cameraWindow);

    const mini = cameraWindow.querySelector("#camera-min");
    const maxi = cameraWindow.querySelector("#camera-max");
    const close = cameraWindow.querySelector("#camera-close");

    mini.addEventListener("click", () => {
      cameraWindow.style.width = "50vw";
      cameraWindow.style.height = "70vh";
    });

    maxi.addEventListener("click", () => {
      cameraWindow.style.width = "100%";
      cameraWindow.style.height = "100%";
    });

    close.addEventListener("click", () => {
      cameraWindow.remove();

      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop());
        cameraStream = null;
      }
    });

    startCameraFunctionality();
  });
}

function startCameraFunctionality() {
  const video = document.querySelector("#camFeed");

  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      cameraStream = stream;
      video.srcObject = stream;
      video.play();
    })
    .catch((err) => {
      console.error("Camera error:", err);
      alert("Camera access not granted");
    });

  setTimeout(() => {
    const captureBtn = document.querySelector(".capture-btn");
    if (!captureBtn.hasAttribute("data-bound")) {
      captureBtn.setAttribute("data-bound", "true");

      captureBtn.addEventListener("click", () => {
        let canvas = document.querySelector("#photoCanvas");
        if (!canvas) {
          canvas = document.createElement("canvas");
          canvas.id = "photoCanvas";
          canvas.style.display = "none";
          document.body.appendChild(canvas);
        }

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = canvas.toDataURL("image/png");

        const photo = document.createElement("img");
        photo.src = imageData;
        photo.classList.add("captured-photo");
        photo.style.position = "absolute";
        photo.style.top = "80px";
        photo.style.left = "80px";
        photo.style.width = "120px";
        photo.style.borderRadius = "6px";

        let photos = JSON.parse(localStorage.getItem("photos")) || [];
        photos.push(imageData);
        localStorage.setItem("photos", JSON.stringify(photos));

        alert("📸 Photo captured successfully!");
      });
    }
  }, 60);
}

openCamera();

// ! Recycle Bin ------------->>>>>>>>>>>>>>
function openRecycleBin() {
  const recycleBinIcon = document.querySelector(".recycle-bin");

  recycleBinIcon.addEventListener("click", () => {
    if (document.querySelector(".recycle-bin-page")) return;

    const bin = document.createElement("div");
    bin.classList.add("recycle-bin-page");

    bin.innerHTML = `
      <header>
        <div class="part1">
          <img src="./assets/taskbar/recycle2-removebg-preview.png" />
          <h2>Recycle Bin</h2>
        </div>
        <div class="part2">
          <i id="mini" class="ri-subtract-fill"></i>
          <i id="maxi" class="ri-square-line"></i>
          <i id="cancle" class="ri-close-line"></i>
        </div>
      </header>
      <div class="mainWindow"></div>
    `;

    document.querySelector("#desktop").appendChild(bin);

    const mainWindow = bin.querySelector(".mainWindow");
    renderRecycleBinItems(mainWindow);

    bin.querySelector("#cancle").addEventListener("click", () => bin.remove());
    bin.querySelector("#mini").addEventListener("click", () => {
      bin.style.height = "60vh";
      bin.style.width = "45vw";
    });
    bin.querySelector("#maxi").addEventListener("click", () => {
      bin.style.height = "100%";
      bin.style.width = "100%";
    });
  });
}

openRecycleBin();

function deleteFolder(folderElement) {
  const id = folderElement.dataset.id;
  const name = folderElement.querySelector(".folder-name").innerText;
  const top = folderElement.style.top;
  const left = folderElement.style.left;

  folderElement.remove();

  const folders = JSON.parse(localStorage.getItem("folders")) || [];
  const updated = folders.filter((f) => f.id !== id);
  localStorage.setItem("folders", JSON.stringify(updated));

  const bin = JSON.parse(localStorage.getItem("recycleBin")) || [];
  bin.push({ id, name, top, left });
  localStorage.setItem("recycleBin", JSON.stringify(bin));
}

function renderRecycleBinItems(container) {
  const recycleData = JSON.parse(localStorage.getItem("recycleBin")) || [];
  container.innerHTML = "";

  recycleData.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("recycle-item");
    div.innerHTML = `
      <img src="./assets/taskbar/folder-removebg-preview.png" />
      <p class="deleted-folder-name">${item.name}</p>
      <button class="restore">Restore</button>
      <button class="delete">Delete Permanently</button>
    `;

    div.querySelector(".restore").addEventListener("click", () => {
      restoreFolder(item);
      recycleData.splice(index, 1);
      localStorage.setItem("recycleBin", JSON.stringify(recycleData));
      renderRecycleBinItems(container);
    });

    div.querySelector(".delete").addEventListener("click", () => {
      recycleData.splice(index, 1);
      localStorage.setItem("recycleBin", JSON.stringify(recycleData));
      renderRecycleBinItems(container);
    });

    container.appendChild(div);
  });
}

function restoreFolder(item) {
  const folder = document.createElement("div");
  folder.classList.add("folderStructure");
  folder.style.left = item.left;
  folder.style.top = item.top;
  folder.dataset.id = item.id;

  folder.innerHTML = `
    <img src="./assets/taskbar/folder-removebg-preview.png" />
    <p class="folder-name" contenteditable="true">${item.name}</p>
  `;

  document.querySelector("#desktop").appendChild(folder);
  attachFolderListeners(folder);

  const folders = JSON.parse(localStorage.getItem("folders")) || [];
  folders.push({
    id: item.id,
    name: item.name,
    top: item.top,
    left: item.left,
  });
  localStorage.setItem("folders", JSON.stringify(folders));
}

function attachFolderListeners(folder) {
  makeDraggable?.(folder);

  folder.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    showContextMenu(e, folder);
  });
}

function createFolderOnDesktop(name, top, left) {
  const id = Date.now().toString(); // unique ID based on timestamp
  const folder = document.createElement("div");
  folder.classList.add("folderStructure");
  folder.style.left = left;
  folder.style.top = top;
  folder.dataset.id = id;

  folder.innerHTML = `
    <img src="./assets/taskbar/folder-removebg-preview.png" />
    <p class="folder-name" contenteditable="true">${name}</p>
  `;

  document.querySelector("#desktop").appendChild(folder);
  attachFolderListeners(folder);

  const folders = JSON.parse(localStorage.getItem("folders")) || [];
  folders.push({ id, name, top, left });
  localStorage.setItem("folders", JSON.stringify(folders));
}

window.addEventListener("DOMContentLoaded", () => {
  const folders = JSON.parse(localStorage.getItem("folders")) || [];

  folders.forEach((folder) => {
    const el = document.createElement("div");
    el.classList.add("folderStructure");
    el.style.left = folder.left;
    el.style.top = folder.top;
    el.dataset.id = folder.id;
    el.innerHTML = `
      <img src="./assets/taskbar/folder-removebg-preview.png" />
      <p class="folder-name" contenteditable="true">${folder.name}</p>
    `;
    document.querySelector("#desktop").appendChild(el);
    attachFolderListeners(el);
  });
});

// ! NotePad Functionality ---------->>>>>>>>>>>>>
function notePad() {
  // 🔒 Prevent multiple instances
  if (document.querySelector(".notepad")) return;

  const notepadWindow = document.createElement("div");
  notepadWindow.classList.add("notepad");

  notepadWindow.innerHTML = `
    <header>
      <div class="part1">
        <img src="./assets/taskbar/notepad.ico" alt="">
        <h2>Notepad</h2>
      </div>
      <div class="part2">
        <i id="mini" class="ri-subtract-fill" title="Minimize"></i>
        <i id="maxi" class="ri-square-line" title="Maximize"></i>
        <i id="cancle" class="ri-close-line" title="Close"></i>
      </div>
    </header>

    <div class="menu-bar">
      <button id="newFile">New</button>
      <button id="openFile">Open</button>
      <button id="saveFile">Save</button>
      <input type="file" id="fileInput" accept=".txt" style="display: none;" />
    </div>

    <div class="textarea">
      <textarea id="textarea"></textarea>
    </div>
  `;

  // ✅ Append to desktop
  document.querySelector("#desktop").appendChild(notepadWindow);

  makeDraggable(notepadWindow); // ✅ Your custom drag support

  // 🔘 Control buttons
  const mini = notepadWindow.querySelector("#mini");
  const maxi = notepadWindow.querySelector("#maxi");
  const cancle = notepadWindow.querySelector("#cancle");

  mini.addEventListener("click", () => {
    notepadWindow.style.height = "70vh";
    notepadWindow.style.width = "50vw";
  });

  maxi.addEventListener("click", () => {
    notepadWindow.style.height = "100%";
    notepadWindow.style.width = "100%";
  });

  cancle.addEventListener("click", () => {
    notepadWindow.remove();
  });

  // 📝 Textarea + File controls
  const textarea = notepadWindow.querySelector("#textarea");
  const newBtn = notepadWindow.querySelector("#newFile");
  const openBtn = notepadWindow.querySelector("#openFile");
  const saveBtn = notepadWindow.querySelector("#saveFile");
  const fileInput = notepadWindow.querySelector("#fileInput");

  // 🆕 New File
  newBtn.addEventListener("click", () => {
    const confirmClear = confirm(
      "Do you want to create a new file? Unsaved changes will be lost."
    );
    if (confirmClear) textarea.value = "";
  });

  // 📂 Open File
  openBtn.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      textarea.value = e.target.result;
    };
    reader.readAsText(file);
  });

  // 💾 Save File
  saveBtn.addEventListener("click", () => {
    const textToSave = textarea.value;
    const blob = new Blob([textToSave], { type: "text/plain" });

    const fileName = prompt("Enter file name", "untitled.txt");
    if (!fileName) return;

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName.endsWith(".txt") ? fileName : fileName + ".txt";
    link.click();
  });
}

// ! Taskbar Search Icon Functionality
function TaskbarSearchIcon() {
  const searchIcon = document.querySelector(".taskbar-search");

  const SearchWindow = document.createElement("div");
  SearchWindow.classList.add("search-menu");

  SearchWindow.innerHTML = `<div class="search"><span><i class="ri-search-line"></i></span><input type="text"
                    placeholder="Type here to search" class="searchbar" /></div>

            <div class="filters">
                <span class="active">All</span>
                <span>Apps</span>
                <span>Documents</span>
                <span>Web</span>
                <span>More</span>
            </div>

            <div class="section">
                <p class="section-title">Top Apps</p>
                <div class="top-apps">
                    <div class="app edge">
                        <img src="./assets/taskbar/edge.png" alt="">
                        <p>Microsoft Edge</p>
                    </div>
                    <div class="app notepadApp">
                        <img src="./assets/taskbar/notepad.ico" alt="">
                        <p>Notepad</p>
                    </div>
                    <div class="app VsCodeApp">
                        <img src="./assets/taskbar/vscodeLogo-removebg-preview.png" alt="">
                        <p>VS Code</p>
                    </div>
                    <div class="app games">
                        <img src="./assets/taskbar/solitaire.ico" alt="">
                        <p>Solitaire</p>
                    </div>
                    <div class="app storeWindow">
                        <img src="./assets/taskbar/store.ico" alt="">
                        <p>Microsoft Store</p>
                    </div>
                </div>
            </div>

            <div class="section">
                <p class="section-title">Quick Searches</p>
                <div class="quick-search">
                    <i class="ri-time-line"></i>
                    <span>This Day In History</span>
                </div>
                <div class="quick-search">
                    <i class="ri-bar-chart-box-line"></i>
                    <span>Markets Today</span>
                </div>
                <div class="quick-search">
                    <i class="ri-movie-2-line"></i>
                    <span>New Movies</span>
                </div>
                <div class="quick-search">
                    <i class="ri-newspaper-line"></i>
                    <span>Top News</span>
                </div>
            </div>`;

  searchIcon.addEventListener("click", (e) => {
    e.stopPropagation();

    const existingWidget = document.querySelector(".search-menu");
    if (existingWidget) {
      existingWidget.remove();
      return;
    }

    if (!document.body.contains(SearchWindow)) {
      document.querySelector("#desktop").appendChild(SearchWindow);

      const quickSearchItems = document.querySelectorAll(".quick-search");
      quickSearchItems.forEach((item) => {
        item.addEventListener("click", () => {
          const query = item.querySelector("span").innerText;
          openEdgeWithSearch(query); // 🔍 custom search function
          SearchWindow.remove();
        });
      });

      // ? NotePad Application
      const notepad = document.querySelector(".notepadApp");

      if (notepad) {
        notepad.addEventListener("click", () => {
          if (!document.querySelector(".notepad-window")) {
            notePad();
          }
          if (SearchWindow) SearchWindow.remove();
        });
      }

      // ? Microsoft Edge Application
      // ✅ Only run if SearchWindow and edge app button exist
      const edgeApp = SearchWindow.querySelector(".edge");

      if (edgeApp) {
        edgeApp.addEventListener("click", () => {
          // ✅ Check if Edge window is already open
          if (document.querySelector(".edge-browser-window")) return;

          // ✅ Create new Edge window
          const edgeWindow = document.createElement("div");
          edgeWindow.classList.add("window", "edge-browser-window"); // 'window' for layout, 'edge-browser-window' to detect existence

          // ✅ HTML content
          edgeWindow.innerHTML = `
      <div class="edge-titlebar">
        <div class="edge-tabs">
          <div class="edgetab active">
            <span>New Tab</span>
            <i class="ri-close-line close-tab"></i>
          </div>
          <div class="edgetab add-tab">+</div>
        </div>
        <div class="edge-controls">
          <i class="ri-subtract-line edge-min"></i>
          <i class="ri-stop-line edge-max"></i>
          <i class="ri-close-line edge-close"></i>
        </div>
      </div>
      <iframe src="browser.html" class="edge-frame"></iframe>
    `;

          // ✅ Add to desktop
          document.querySelector("#desktop").appendChild(edgeWindow);

          // ✅ Scoped controls
          const minBtn = edgeWindow.querySelector(".edge-min");
          const maxBtn = edgeWindow.querySelector(".edge-max");
          const closeBtn = edgeWindow.querySelector(".edge-close");

          minBtn.addEventListener("click", () => {
            edgeWindow.style.height = "70vh";
            edgeWindow.style.width = "50vw";
          });

          maxBtn.addEventListener("click", () => {
            edgeWindow.style.height = "100%";
            edgeWindow.style.width = "100%";
          });

          closeBtn.addEventListener("click", () => {
            edgeWindow.remove();
          });

          // ✅ Make draggable if function exists
          if (typeof makeDraggable === "function") {
            makeDraggable(edgeWindow);
          }

          // ✅ Finally remove the SearchWindow
          SearchWindow.remove();
        });
      }

      // ? VsCode Application
      const vsCodeWinodw = document.querySelector(".VsCodeApp");
      if (vsCodeWinodw) {
        vsCodeWinodw.addEventListener("click", () => {
          document.querySelector("#desktop").appendChild(vscodeWindow);
          vscodeWindow.style.zIndex = 2000;
          mini.addEventListener("click", () => {
            vscodeWindow.style.height = "70vh";
            vscodeWindow.style.width = "65vw";
            vscodeWindow.style.top = "50%";
            vscodeWindow.style.left = "50%";
            vscodeWindow.style.transform = "translate(-50%,-50%)";
          });

          maxi.addEventListener("click", () => {
            vscodeWindow.style.height = "100%";
            vscodeWindow.style.width = "100%";
          });

          cancle.addEventListener("click", () => {
            vscodeWindow.remove();
          });
          SearchWindow.remove();
        });
      }

      // ? Microsoft Store Window
      const store = document.querySelector(".storeWindow");

      if (store) {
        store.addEventListener("click", () => {
          document.querySelector("#desktop").appendChild(microsoftStoreWindow);
          mini.addEventListener("click", () => {
            microsoftStoreWindow.style.height = "70vh";
            microsoftStoreWindow.style.width = "65vw";
          });

          maxi.addEventListener("click", () => {
            microsoftStoreWindow.style.height = "100%";
            microsoftStoreWindow.style.width = "100%";
          });

          cancle.addEventListener("click", () => {
            microsoftStoreWindow.remove();
          });
          SearchWindow.remove();
        });
      }

      // ? Games
      const games = document.querySelector(".games");
      if (games) {
        games.addEventListener("click", () => {
          document.querySelector("#desktop").appendChild(gamesWindow);

          const mini = document.querySelector("#min");
          const maxi = document.querySelector("#max");
          const cancle = document.querySelector("#close");

          mini.addEventListener("click", () => {
            gamesWindow.style.height = "70vh";
            gamesWindow.style.width = "65vw";
            gamesWindow.style.overflow = "hidden";
          });

          maxi.addEventListener("click", () => {
            gamesWindow.style.height = "100%";
            gamesWindow.style.width = "100%";
          });

          cancle.addEventListener("click", () => {
            gamesWindow.remove();
          });
          SearchWindow.remove();
        });
      }
    }
  });

  document.addEventListener("click", (e) => {
    if (
      SearchWindow &&
      !SearchWindow.contains(e.target) &&
      !searchIcon.contains(e.target)
    ) {
      SearchWindow.remove();
    }
  });
}

TaskbarSearchIcon();

// ! Open Microsoft Edge Window Function
function openEdge() {
  const existingEdge = document.querySelector(".window.edge");
  if (existingEdge) {
    existingEdge.remove();
    return;
  }

  const edgeWindow = document.createElement("div");
  edgeWindow.classList.add("window", "edge");

  edgeWindow.innerHTML = `
    <div class="edge-titlebar">
      <div class="edge-tabs">
        <div class="edgetab active">
          <span>New Tab</span>
          <i class="ri-close-line close-tab"></i>
        </div>
        <div class="edgetab add-tab">+</div>
      </div>
      <div class="edge-controls">
        <i class="ri-subtract-line" id="edge-min"></i>
        <i class="ri-stop-line" id="edge-max"></i>
        <i class="ri-close-line" id="edge-close"></i>
      </div>
    </div>
    <iframe src="browser.html" class="edge-frame"></iframe>
  `;

  document.querySelector("#desktop").appendChild(edgeWindow);

  if (typeof makeDraggable === "function") {
    makeDraggable(edgeWindow);
  }

  edgeWindow.querySelector("#edge-min").addEventListener("click", () => {
    edgeWindow.style.height = "70vh";
    edgeWindow.style.width = "50vw";
  });

  edgeWindow.querySelector("#edge-max").addEventListener("click", () => {
    edgeWindow.style.height = "100%";
    edgeWindow.style.width = "100%";
  });

  // ❌ Close
  edgeWindow.querySelector("#edge-close").addEventListener("click", () => {
    edgeWindow.remove();
  });
}

// ! Open Microsoft Edge Window Function with query
function openEdgeWithSearch(query) {
  if (document.querySelector(".window.edge")) return;

  const searchURL = `https://www.bing.com/search?q=${encodeURIComponent(
    query
  )}`;

  const edgeWindow = document.createElement("div");
  edgeWindow.classList.add("window", "edge");
  edgeWindow.innerHTML = `
    <div class="edge-titlebar">
      <div class="edge-tabs">
          <div class="edgetab active">
              <span>${query}</span>
              <i class="ri-close-line close-tab"></i>
          </div>
          <div class="edgetab add-tab">+</div>
      </div>
      <div class="edge-controls">
          <i class="ri-subtract-line" id="edge-min"></i>
          <i class="ri-stop-line" id="edge-max"></i>
          <i class="ri-close-line" id="edge-close"></i>
      </div>
    </div>
    <iframe src="${searchURL}" class="edge-frame"></iframe>
  `;

  document.querySelector("#desktop").appendChild(edgeWindow);

  if (typeof makeDraggable === "function") {
    makeDraggable(edgeWindow);
  }

  edgeWindow.querySelector("#edge-min").addEventListener("click", () => {
    edgeWindow.style.height = "70vh";
    edgeWindow.style.width = "50vw";
  });

  edgeWindow.querySelector("#edge-max").addEventListener("click", () => {
    edgeWindow.style.height = "100%";
    edgeWindow.style.width = "100%";
  });

  edgeWindow.querySelector("#edge-close").addEventListener("click", () => {
    edgeWindow.remove();
  });
}

const microsoftEdgeTaksbar = document.querySelector(".microsoft-edge");
microsoftEdgeTaksbar.addEventListener("click", () => {
  openEdge();
});

// ! CMD Window Function
function cmdWindow() {
  const cmdWindowPage = document.createElement("div");
  cmdWindowPage.classList.add("window-cmd");
  cmdWindowPage.innerHTML = `
    <div class="cmd-header">
      C:\\WINDOWS\\system32\\cmd.exe
      <div class="icons">
        <i class="ri-subtract-line" id="min"></i>
        <i class="ri-stop-line" id="max"></i>
        <i class="ri-close-line" id="close"></i>
      </div>
    </div>

    <div class="cmd-body" id="cmdBody">
      <pre>
Microsoft Windows [Version 11.0.22621.3447]
(c) Microsoft Corporation. All rights reserved.
      </pre>

      <div class="cmd-input-line">
        <span>C:\\Users\\Sakshi&gt;</span>
        <input type="text" id="cmdInput" autofocus />
      </div>
    </div>
  `;

  document.querySelector("#desktop").appendChild(cmdWindowPage);

  const input = cmdWindowPage.querySelector("#cmdInput");
  const cmdBody = cmdWindowPage.querySelector("#cmdBody");

  const minimize = cmdWindowPage.querySelector("#min");
  const maximize = cmdWindowPage.querySelector("#max");
  const close = cmdWindowPage.querySelector("#close");

  close.addEventListener("click", () => {
    cmdWindowPage.remove();
  });

  minimize.addEventListener("click", () => {
    cmdWindowPage.style.width = "50vw";
    cmdWindowPage.style.height = "70vh";
  });

  maximize.addEventListener("click", () => {
    cmdWindowPage.style.width = "100%";
    cmdWindowPage.style.height = "100%";
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const command = input.value.trim();
      const output = document.createElement("div");
      output.innerHTML = `<span>C:\\Users\\Sakshi&gt; ${command}</span><br>`;

      switch (command.toLowerCase()) {
        case "help":
          output.innerHTML += `Available commands:<br>- help<br>- cls<br>- echo [text]<br>- whoami<br>- date`;
          break;
        case "cls":
          cmdBody.querySelector("pre").innerHTML = "";
          const lines = cmdBody.querySelectorAll("div:not(.cmd-input-line)");
          lines.forEach((el) => el.remove());
          input.value = "";
          return;
        case "whoami":
          output.innerHTML += `sakshi`;
          break;
        case "date":
          output.innerHTML += new Date().toLocaleString();
          break;
        default:
          if (command.startsWith("echo ")) {
            output.innerHTML += command.slice(5);
          } else if (command !== "") {
            output.innerHTML += `'${command}' is not recognized as an internal or external command.`;
          }
      }

      cmdBody.insertBefore(output, input.parentElement);
      input.value = "";
      cmdBody.scrollTop = cmdBody.scrollHeight;
    }
  });
}

// ! Widget Window function

const widgetBtn = document.querySelector(".widgets");
let widgetCreated = false;

widgetBtn.addEventListener("click", () => {
  openWidget();
});

function openWidget() {
  const existingWidget = document.querySelector(".os-widget");
  if (existingWidget) {
    existingWidget.remove();
    return;
  }

  const widget = document.createElement("div");
  widget.classList.add("os-widget");

  widget.innerHTML = `
    <div class="widget-section calendar">
      <h3 id="date">Loading date...</h3>
    </div>

    <div class="widget-section weather">
      <div class="weather-icon">
        <img id="weather-icon-img" src="" alt="Weather icon" />
      </div>
      <div class="weather-details">
        <h4 id="weather-temp">--°C</h4>
        <p id="weather-condition">Loading...</p>
        <p id="weather-location">--</p>
      </div>
    </div>
  `;

  document.body.appendChild(widget);

  updateDate();
  updateWeather();

  document.querySelector("#desktop").addEventListener(
    "click",
    () => {
      widget.remove();
    },
    { once: true }
  );
}

// ! Calender Window ---------------->>>>>>>>>>>>>>>
function updateDate() {
  const dateElem = document.getElementById("date");
  const now = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayName = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  dateElem.innerText = `${dayName}, ${day} ${month} ${year}`;
}

// ! Weather App ----------->>>>>>>>>>>>>>>>>>>>>
function updateWeather() {
  const temp = document.getElementById("weather-temp");
  const condition = document.getElementById("weather-condition");
  const locationText = document.getElementById("weather-location");
  const iconImg = document.getElementById("weather-icon-img");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode&timezone=auto`;

        try {
          const res = await fetch(url);
          const data = await res.json();

          const temperature = data.current.temperature_2m;
          const weatherCode = data.current.weathercode;

          const weatherMap = {
            0: ["Clear", "☀️", "01d"],
            1: ["Mainly Clear", "🌤️", "02d"],
            2: ["Partly Cloudy", "⛅", "03d"],
            3: ["Overcast", "☁️", "04d"],
            45: ["Foggy", "🌫️", "50d"],
            48: ["Foggy", "🌫️", "50d"],
            51: ["Light Drizzle", "🌦️", "09d"],
            61: ["Light Rain", "🌧️", "10d"],
            63: ["Moderate Rain", "🌧️", "10d"],
            65: ["Heavy Rain", "🌧️", "10d"],
            71: ["Snow", "❄️", "13d"],
            80: ["Rain Showers", "🌧️", "09d"],
            95: ["Thunderstorm", "⛈️", "11d"],
          };

          const [conditionText, emoji, iconCode] = weatherMap[weatherCode] || [
            "Unknown",
            "❔",
            "01d",
          ];

          temp.textContent = `${temperature}°C`;
          condition.textContent = `${emoji} ${conditionText}`;
          locationText.textContent = `Lat: ${lat.toFixed(
            1
          )}, Lon: ${lon.toFixed(1)}`;
          iconImg.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        } catch (err) {
          condition.textContent = "Failed to load weather";
        }
      },
      (error) => {
        condition.textContent = "Location denied";
      }
    );
  } else {
    condition.textContent = "Geolocation not supported";
  }
}

function createWifiPanel() {
  if (document.querySelector("#wifiPanel")) return;

  const panel = document.createElement("div");
  panel.id = "wifiPanel";
  panel.classList.add("wifi-panel");

  panel.innerHTML = `
    <div class="wifi-header">
      Network & Internet settings
    </div>

    <div class="wifi-toggle">
      <span>Wi-Fi</span>
      <label class="switch">
        <input type="checkbox" id="wifiSwitch" checked />
        <span class="slider"><span class="circle"></span></span>
      </label>
    </div>

    <div id="networkList" class="network-list">
      <div class="network">
        <span>Home WiFi</span>
        <button class="connect-btn">Connect</button>
      </div>
      <div class="network">
        <span>Office Network</span>
        <button class="connect-btn">Connect</button>
      </div>
      <div class="network">
        <span>Mobile Hotspot</span>
        <button class="connect-btn">Connect</button>
      </div>
    </div>
  `;

  document.querySelector("#desktop").appendChild(panel);

  document.querySelector(".wifi-icon").addEventListener("click", (e) => {
    e.stopPropagation();
    const currentPanel = document.querySelector("#wifiPanel");
    currentPanel.style.display =
      currentPanel.style.display === "block" ? "none" : "block";
  });

  const wifiSwitch = panel.querySelector("#wifiSwitch");
  const networkList = panel.querySelector("#networkList");
  const slider = panel.querySelector(".slider");
  const circle = panel.querySelector(".circle");

  wifiSwitch.addEventListener("change", () => {
    if (wifiSwitch.checked) {
      networkList.style.display = "block";
      slider.style.backgroundColor = "#2196F3";
      circle.style.transform = "translateX(20px)";
    } else {
      networkList.style.display = "none";
      slider.style.backgroundColor = "#555";
      circle.style.transform = "translateX(0)";
    }
  });

  const allButtons = panel.querySelectorAll(".connect-btn");
  allButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      allButtons.forEach((b) => {
        b.textContent = "Connect";
        b.style.backgroundColor = "#3c3c3c";
      });
      btn.textContent = "Connected";
      btn.style.backgroundColor = "#2e8b57";
    });
  });

  document.addEventListener("click", (e) => {
    const isClickInside =
      panel.contains(e.target) || e.target.classList.contains("wifi-icon");
    if (!isClickInside) {
      panel.style.display = "none";
    }
  });
}

createWifiPanel();

// ! Volume Icons ------------>>>>>>>>>>>
function createSoundPanel() {
  // Prevent duplicate
  if (document.querySelector("#soundPanel")) return;

  const panel = document.createElement("div");
  panel.id = "soundPanel";
  panel.classList.add("sound-panel");

  panel.innerHTML = `
    <div class="sound-header">Sound</div>
    <div class="sound-body">
      <i class="ri-volume-up-line volume-icon" id="volumeIcon"></i>
      <input type="range" min="0" max="100" value="70" id="volumeSlider" />
    </div>
  `;

  document.querySelector("#desktop").appendChild(panel);

  // Toggle logic on icon click
  document.querySelector(".sound-icon").addEventListener("click", (e) => {
    e.stopPropagation();
    const sp = document.querySelector("#soundPanel");
    sp.style.display = sp.style.display === "block" ? "none" : "block";
  });

  // Volume icon change based on slider value
  const slider = panel.querySelector("#volumeSlider");
  const icon = panel.querySelector("#volumeIcon");

  slider.addEventListener("input", () => {
    const vol = slider.value;
    if (vol == 0) icon.className = "ri-volume-mute-line volume-icon";
    else if (vol <= 50) icon.className = "ri-volume-down-line volume-icon";
    else icon.className = "ri-volume-up-line volume-icon";
  });

  // Hide when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !panel.contains(e.target) &&
      !e.target.classList.contains("sound-icon")
    ) {
      panel.style.display = "none";
    }
  });
}

createSoundPanel();

// ! Upper Arrow ------------>>>>>>>>>>>>>>
function createSystemTray() {
  const trayToggle = document.querySelector(".tray-toggle");

  // Check if tray already exists
  const existingTray = document.querySelector("#systemTray");
  if (existingTray) {
    existingTray.remove();
    return;
  }

  const trayPanel = document.createElement("div");
  trayPanel.id = "systemTray";
  trayPanel.className = "system-tray";

  trayPanel.innerHTML = `
    <div class="tray-icon">
      <img src="./assets/taskbar/bluetooth.png" alt="Bluetooth">
    </div>
    <div class="tray-icon">
      <img src="./assets/taskbar/onedrive.png" alt="OneDrive">
    </div>
    <div class="tray-icon">
      <img src="./assets/taskbar/shield.png" alt="Antivirus">
    </div>
  `;

  document.querySelector("#desktop").appendChild(trayPanel);

  // Auto-close if clicked outside
  document.addEventListener("click", (e) => {
    if (!trayPanel.contains(e.target) && !trayToggle.contains(e.target)) {
      trayPanel.remove();
    }
  });
}

document.querySelector(".tray-toggle").addEventListener("click", (e) => {
  e.stopPropagation();
  createSystemTray();
});

// ! Calculator Function ------------->>>>>>>>>>>>>>>>
function calculator() {
  if (document.querySelector(".calculator-window")) return; // 🛑 Prevent multiple windows

  const calcWindow = document.createElement("div");
  calcWindow.classList.add("calculator-window");

  calcWindow.innerHTML = `
    <div class="calculator-header">
      <p>Calculator</p>
      <div class="calc-controls">
        <i class="ri-close-line" id="calc-close"></i>
      </div>
    </div>

    <div class="calculator-body">
      <div class="calc-display" id="calcDisplay">0</div>
      <div class="calc-buttons">
        <button>C</button>
        <button>←</button>
        <button>%</button>
        <button>/</button>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>

        <button>00</button>
        <button>0</button>
        <button>.</button>
        <button>=</button>
      </div>
    </div>
  `;

  document.querySelector("#desktop").appendChild(calcWindow);

  // 🧠 Calculator Logic
  const display = calcWindow.querySelector("#calcDisplay");
  const buttons = calcWindow.querySelectorAll(".calc-buttons button");

  let expression = "";

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.textContent;

      if (value === "C") {
        expression = "";
        display.textContent = "0";
      } else if (value === "←") {
        expression = expression.slice(0, -1);
        display.textContent = expression || "0";
      } else if (value === "=") {
        try {
          const result = eval(expression);
          display.textContent = result;
          expression = result.toString();
        } catch (err) {
          display.textContent = "Error";
          expression = "";
        }
      } else {
        expression += value;
        display.textContent = expression;
      }
    });
  });

  const closeBtn = calcWindow.querySelector("#calc-close");

  closeBtn.addEventListener("click", () => {
    calcWindow.remove();
  });

  // Optional: Make it draggable
  if (typeof makeDraggable === "function") {
    makeDraggable(calcWindow);
  }
}

function shutDownFunction() {
  const shutDownWindow = document.createElement("div");
  shutDownWindow.classList.add("shutdown");

  shutDownWindow.innerHTML = `
    <video autoplay muted src="./assets/Windows 11 Shutdown Screen.mp4" class="shutdown-video"></video>
  `;
  document.body.appendChild(shutDownWindow);
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    // Step 1: Remove video, show "Start PC" screen
    shutDownWindow.innerHTML = `
      <div class="boot-screen">
        <h1>🔌 System Powered Off</h1>
        <button class="start-pc-btn">Start PC</button>
      </div>
    `;

    const startBtn = shutDownWindow.querySelector(".start-pc-btn");
    startBtn.addEventListener("click", () => {
      startBtn.textContent = "Starting...";
      startBtn.disabled = true;

      // Step 2: Simulate booting
      setTimeout(() => {
        // Remove shutdown overlay
        shutDownWindow.remove();
        document.body.style.overflow = "auto";
      }, 2000); // Boot time
    });
  }, 10000); // 10 sec video duration
}

// ! Open Vs Code Window
function openVsCode() {
  document.querySelector("#desktop").appendChild(vscodeWindow);
  vscodeWindow.style.zIndex = 2000;
  mini.addEventListener("click", () => {
    vscodeWindow.style.height = "70vh";
    vscodeWindow.style.width = "65vw";
    vscodeWindow.style.top = "50%";
    vscodeWindow.style.left = "50%";
    vscodeWindow.style.transform = "translate(-50%,-50%)";
  });

  maxi.addEventListener("click", () => {
    vscodeWindow.style.height = "100%";
    vscodeWindow.style.width = "100%";
  });

  cancle.addEventListener("click", () => {
    vscodeWindow.remove();
  });
}

// ! Open Microsoft Store
function openStore() {
  document.querySelector("#desktop").appendChild(microsoftStoreWindow);
  mini.addEventListener("click", () => {
    microsoftStoreWindow.style.height = "70vh";
    microsoftStoreWindow.style.width = "65vw";
  });

  maxi.addEventListener("click", () => {
    microsoftStoreWindow.style.height = "100%";
    microsoftStoreWindow.style.width = "100%";
  });

  cancle.addEventListener("click", () => {
    microsoftStoreWindow.remove();
  });
}

// ! Open Games Window
function openGamesWindow() {
  document.querySelector("#desktop").appendChild(gamesWindow);

  const mini = document.querySelector("#min");
  const maxi = document.querySelector("#max");
  const cancle = document.querySelector("#close");

  mini.addEventListener("click", () => {
    gamesWindow.style.height = "70vh";
    gamesWindow.style.width = "65vw";
    gamesWindow.style.overflow = "hidden";
  });

  maxi.addEventListener("click", () => {
    gamesWindow.style.height = "100%";
    gamesWindow.style.width = "100%";
  });

  cancle.addEventListener("click", () => {
    gamesWindow.remove();
  });
}

// ! open file Explorer
function fileExplorer() {
  document.querySelector("#desktop").appendChild(exploreWindow);

  makeDraggable(exploreWindow);
  const mini = exploreWindow.querySelector("#mini");
  const maxi = exploreWindow.querySelector("#maxi");
  const close = exploreWindow.querySelector("#cancle");

  mini.addEventListener("click", () => {
    exploreWindow.style.height = "70vh";
    exploreWindow.style.width = "55vw";
  });

  maxi.addEventListener("click", () => {
    exploreWindow.style.height = "100%";
    exploreWindow.style.width = "100vw";
  });

  close.addEventListener("click", () => {
    exploreWindow.remove();
  });
}

// ! Open Settings
function openSettings() {
  document.querySelector("#desktop").appendChild(settingsWindow);

  const mini = document.querySelector("#min");
  const maxi = document.querySelector("#max");
  const cancle = document.querySelector("#close");

  mini.addEventListener("click", () => {
    settingsWindow.style.height = "70vh";
    settingsWindow.style.width = "65vw";
  });

  maxi.addEventListener("click", () => {
    settingsWindow.style.height = "100%";
    settingsWindow.style.width = "100%";
  });

  cancle.addEventListener("click", () => {
    settingsWindow.remove();
  });
}
