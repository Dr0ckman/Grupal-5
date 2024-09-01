import { Card } from "./components/Card.js";

const getCategorias = async () => {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json.categories;
    } catch (error) {
        console.error(error.message);
    }
}

const addCategoriasToSelect = categorias => {
    const select = document.getElementById("selectCategorias");
    // console.log(categorias);
    for (let categoria of categorias) {
        const option = document.createElement("option");
        option.value = categoria.strCategory;
        option.innerText = categoria.strCategory;
        select.appendChild(option);
    }
}

const getMeals = async (categoria) => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const meals = await response.json();
        return meals.meals;
    } catch (error) {
        console.error(error.message);
    }
}

const printCards = async () => {
    const selectedCategoria = document.getElementById("selectCategorias").value;
    const meals = await getMeals(selectedCategoria);

    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";

    for (let i=0; i<20; i++) {
        const card = new Card()
        card.appendCardSkeleton();
    }

    cardContainer.innerHTML = "";
    for (let meal of meals) {
        const card = new Card();
        card.appendCard(meal.strMeal, meal.strMealThumb)
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const categorias = await getCategorias();
    addCategoriasToSelect(categorias);
})

document.getElementById("selectCategorias").addEventListener("change", async () => {
    await printCards();
})