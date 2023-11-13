function typeWrite(elemento) {
  const textoArray = elemento.textContent.split(''); // Use textContent em vez de innerHTML
  elemento.textContent = ''; // Use textContent em vez de innerHTML
  textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.textContent += letra, 120 * i); // Use textContent em vez de innerHTML
  });
}

const titulo = document.querySelector('.typed-out');
console.log(titulo);

typeWrite(titulo);
