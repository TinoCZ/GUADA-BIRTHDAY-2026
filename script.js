const singleplayer = document.getElementById("singleplayer");

const multiplayer = document.getElementById("multiplayer");

const achievement = document.getElementById("achievement");

const modal = document.getElementById("modal");

const closeModal = document.getElementById("closeModal");


// =========================================
// SINGLEPLAYER → ACHIEVEMENT
// =========================================

singleplayer.addEventListener("click", () => {

    // Mostrar logro
    achievement.classList.add("show");


    // Ocultarlo después de 4 segundos
    setTimeout(() => {

        achievement.classList.remove("show");

    }, 4000);

});


// =========================================
// MULTIPLAYER → MODAL
// =========================================

multiplayer.addEventListener("click", () => {

    modal.classList.add("show");

});


// =========================================
// CERRAR MODAL
// =========================================

closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

});


// =========================================
// CERRAR MODAL HACIENDO CLICK AFUERA
// =========================================

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});