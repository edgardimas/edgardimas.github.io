// Store log details

const logDetails = {
  1: `Detail about the first log entry. This is an explanation of what happened. 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum <br> <br>
  __>>> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru`,
  2: `Detailed information about the second log entry. More context here.`,
  3: `Third log entry details. Something important happened here.`,
};

// Function to update only the <p> inside terminal
function showDetail(id) {
  const terminal = document.getElementById("terminal");

  if (!terminal || !logDetails[id]) {
    console.error("Terminal div or log detail not found!");
    return;
  }

  // Keep terminal structure and styling intact
  terminal.innerHTML = `
     <div class="section-header">
            <img src="./views/assets/color.png" alt="color" class="color"/>
            <h2 class="about-me-head">Terminal</h2>
        </div>
        <div class="terminal-screen" id="terminal">
            <p class="log-detail">${logDetails[id]}</p>
              <button class="back-button" onclick="goBack()">← Back</button>
          </div>
    
    `;
}

// Function to restore the original log list
function goBack() {
  const terminal = document.getElementById("terminal");

  if (!terminal) {
    console.error("Terminal div not found!");
    return;
  }

  // Restore the original log entries while keeping styles
  terminal.innerHTML = `
     <div class="section-header">
            <img src="./views/assets/color.png" alt="color" class="color"/>
            <h2 class="about-me-head">Terminal</h2>
        </div>
        <div class="terminal-screen" id="terminal">
            <p onclick="showDetail(1)">First log entry...</p>
            <p onclick="showDetail(2)">Second log entry...</p>
            <p onclick="showDetail(3)">Third log entry...</p>
          </div>
    `;
}
