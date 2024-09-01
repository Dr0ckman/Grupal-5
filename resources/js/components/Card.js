import { Modal } from "./Modal.js";

class Card {
    #wrapper;


    /**
     * Representa una tarjeta de Boostrap
     */
    constructor() {
        this.#wrapper = document.getElementById("cardContainer");
    }

    /**
     * Agrega una tarjeta a this.#wrapper.
     */
    appendCard(recipeName, recipePicture) {
        const cardHTML = `
        <div class="card mx-auto my-5">
            <img src="${recipePicture}" class="card-img-top" loading="lazy">
            <div class="card-body bg-info py-0">
                <h5 class="card-title text-center my-3 text-capitalize">${recipeName}</h5>
            </div>
        </div>
        `
        const cardElement = document.createElement("div");
        cardElement.className = "col-sm-6 col-lg-3 mb-3";
        cardElement.innerHTML = cardHTML;
        const modal = new Modal(recipeName);
        cardElement.addEventListener("click", () => {
            modal.show();
        })
        this.#wrapper.appendChild(cardElement);
    }

    /**
     * Agrega una tarjeta vacia
     */
    appendCardSkeleton() {
        const cardHTML = `
        <div class="col-sm-6 col-lg-3 my-5">
            <div class="card">
            <div class="placeholder-glow">
            <img class="card-img-top placeholder" height="286" loading="lazy">
                <div class="card-body bg-secondary-subtle py-0">
                    <h5 class="card-title text-center my-3 placeholder"></h5>
                </div>
            </div>
                
            </div>
        </div>
        `
        this.#wrapper.innerHTML += cardHTML;
    }
}

export { Card };