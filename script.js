function showMood(mood) {

    const result = document.getElementById("result");

    if (mood === "super") {
        result.innerHTML = `
            <h2>Ого 😎🔥</h2>
            <p>Схоже, сьогодні все йде як треба!</p>
            <img src="images/super.jpg">
        `;
    }

    if (mood === "good") {
        result.innerHTML = `
            <h2>Це вже добре 🙂</h2>
            <p>Але думаю, можна зробити цей день ще кращим ❤️</p>
            <img src="images/good.jpg">
        `;
    }

    if (mood === "normal") {
        result.innerHTML = `
            <h2>Ну таке 😐</h2>
            <p>Рекомендація: щось смачненьке + музика + відпочинок.</p>
            <img src="images/funny.jpg">
        `;
    }

    if (mood === "bad") {
        result.innerHTML = `
            <h2>Ех... 🥲</h2>
            <p>Не знаю, що сьогодні сталося, але завтра може бути набагато краще ❤️</p>
            <img src="images/funny.jpg">
        `;
    }
}