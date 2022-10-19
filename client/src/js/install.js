const butInstall = document.getElementById("buttonInstall");

window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.style.visibility = 'visible';
});

butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  window.deferredPrompt = null;

  butInstall.setAttribute('disbaled', true);
  butInstall.textContent = 'Installed';
});

window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});
