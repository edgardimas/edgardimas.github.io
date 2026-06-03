const logDetails = {
  1: "Detail about the first log",
  2: "Detailed information about the second log entry. More context here.",
  3: "Third log entry details. Something important happened here.",
};

export function showDetail(id) {
  const terminal = document.getElementById("terminal");
  if (!terminal || !logDetails[id]) {
    console.error("Terminal div or log detail not found!");
    return;
  }

  terminal.innerHTML = `
    <div class="section-header">
      <img src="/views/assets/color.png" alt="color" class="color" />
      <h2 class="section-head">Terminal</h2>
    </div>
    <div class="terminal-screen" id="terminal">
      <p class="log-detail">${logDetails[id]}</p>
      <button class="back-button" onclick="goBack()">← Back</button>
    </div>
  `;
}

export function goBack() {
  const terminal = document.getElementById("terminal");
  if (!terminal) {
    console.error("Terminal div not found!");
    return;
  }

  terminal.innerHTML = `
    <div class="section-header">
      <img src="/views/assets/color.png" alt="color" class="color" />
      <h2 class="about-me-head">Terminal</h2>
    </div>
    <div class="terminal-screen" id="terminal">
      <p onclick="showDetail(1)">First log entry...</p>
      <p onclick="showDetail(2)">Second log entry...</p>
      <p onclick="showDetail(3)">Third log entry...</p>
    </div>
  `;
}

export function initTerminal() {
  window.showDetail = showDetail;
  window.goBack = goBack;

  const checkBtn = document.getElementById("check-code-btn");
  const codeInput = document.getElementById("code-input");
  const feedback = document.getElementById("code-feedback");
  const codeOutput = document.getElementById("code-output");

  if (!checkBtn || !codeInput || !feedback || !codeOutput) {
    return;
  }

  const correctCode = `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`;

  checkBtn.addEventListener("click", () => {
    const userCode = codeInput.value.trim();
    const normalizedUserCode = userCode.replace(/\s+/g, "");
    const normalizedCorrectCode = correctCode.replace(/\s+/g, "");

    if (normalizedUserCode === normalizedCorrectCode) {
      feedback.textContent = "Great job, cadet! You're ready for the console.";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Oops! Double-check your syntax and try again.";
      feedback.style.color = "red";
    }

    const match = userCode.match(/printf\s*\(\s*"([^"\\]*)/);
    if (match && match[1]) {
      codeOutput.value = match[1];
    } else {
      codeOutput.value = "// No valid printf statement found.";
    }
  });
}
