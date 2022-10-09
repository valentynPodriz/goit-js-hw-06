
console.log(`Number of categories: ${itemRef.length}`);

const resultArr = itemRef.forEach((element) => {
    const titleRef = element.querySelector("h2");
  const subItemsRef = element.querySelectorAll("li");
  console.log(`Category: ${titleRef.textContent}`);
  console.log(`Elements: ${subItemsRef.length}`);
});
  