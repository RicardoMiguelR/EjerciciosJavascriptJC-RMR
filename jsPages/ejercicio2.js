const content = document.getElementById("content");
const resultado = document.getElementById("resultado");

// Arreglo de numeros para la funcion ->
// Agrega aqui los numeros que quieras para hacer las pruebas:
let nums2 = [4, 33, 21, 8, 9, 1, 67, 35];

// Iteracion para mostrar cada numero en el arreglo ->
nums2.forEach((num) => {
  const li = document.createElement("li");
  li.textContent = num;
  content.appendChild(li);
});

// Funcion para obtener el numero menor de la lista ->
const minorNum = () => {
  let minor = nums2[0];
  const resultView = document.createElement("p");

  if (nums2.length === 0) {
    resultView.innerHTML = `<p style="background: rgba(128, 128, 128, 0.39); border-radius: 5px; padding: 1rem;">No hay numeros en la lista</p>`;
  } else {
    for (let i = 1; i < nums2.length; i++) {
      if (nums2[i] < minor) {
        minor = nums2[i];
      }
    }
    resultView.innerHTML = `<p style="background: rgba(128, 128, 128, 0.39); border-radius: 5px; padding: 1rem;">El número menor es: <strong>${minor}</strong></p>`;
  }
  resultado.appendChild(resultView);
};
minorNum();
