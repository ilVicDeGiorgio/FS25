async function myFunction() {
  const response = await fetch("https://ringsdb.com/api/public/cards/");
  const data = await response.json();
  console.log(data);
}

myFunction();
