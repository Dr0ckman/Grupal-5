class Modal {
    #recipeName;

    constructor(recipeName) {
        this.#recipeName = recipeName
    }

    async fetchRecipeData() {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.#recipeName}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const recipeData = await response.json();
            console.log(recipeData.meals[0]);
            return recipeData.meals[0];
        } catch (error) {
            console.error(error.message);
        }
    }
    /**
     * Inserta el modal en el DOM y reemplaza los campos según sea necesario.
     * 
     * Luego lo muestra.
     */
    async show() {
        const wrapper = document.getElementById("modalWrapper");
        const recipeData = await this.fetchRecipeData();
        let recipeArea = `<p>Area: ${recipeData.strArea}</p>`;
        let recipeCategory = `<p>Categoria: ${recipeData.strCategory}</p>`;
        let recipeLink = `<p>Link: <a href="${recipeData.strSource}">${recipeData.strSource}</a></p>`;
        let recipeTags = `<p>Tags: ${recipeData.strTags}</p>`;
        
        if (recipeData.area === null) {
            recipeArea = "";
        }
        if (recipeData.strCategory === null) {
            recipeCategory = "";
        }
        if (recipeData.strLink === null) {
            recipeLink = "";
        }
        if (recipeData.strTags === null) {
            recipeTags = "";
        }
        const modalHTML = `
            <div class="modal" tabindex="-1" id="modalReceta">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-capitalize">${this.#recipeName}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ${recipeArea}
                            ${recipeCategory}
                            ${recipeLink}
                            ${recipeTags}
                            <canvas id="chartCanvas"></canvas>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `
        wrapper.innerHTML = modalHTML;

        // Abrir modal
        const bsModal = new bootstrap.Modal('#modalReceta', {
            focus: true
        });

        bsModal.show();
    }
}

export { Modal };