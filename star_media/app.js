// Start ratings
const ratings = {
  sony: 4.7,
  philco: 3.4,
  samsung: 2.3,
  panasonic: 1.4
};

// Total Stas
const starsTotal = 5;

// Run getRatings where DOM loads
document.addEventListener("DOMContentLoaded", getRatings);

// Get ratings
function getRatings() {
  for (let rating in ratings) {
    // Get percentage
    const starPercentage = (ratings[rating] / starsTotal) * 100;

    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    // Set width of stars.inner to percentage
    // document.querySelector(
    //   `.${rating}.stars-inner`
    // ).style.width = starPercentageRounded;


    $('').style.width = starPercentageRounded;
  }
}