const content = document.getElementById("content");
const resultado = document.getElementById("resultado");

// Arreglo de numeros para la funcion ->
// Agrega aqui los numeros que quieras:
let nums = [];

// Iteracion para mostrar cada numero en el arreglo ->
nums.forEach((num) => {
  const li = document.createElement("li");
  li.textContent = num;
  content.appendChild(li);
});

// Funcion para obtener el numero mayor de la lista ->
const largestNum = () => {
  let bigger = nums[0];
  const resultView = document.createElement("p");

  if (nums.length === 0) {
    resultView.innerHTML = `<p style="background: rgba(128, 128, 128, 0.39); border-radius: 5px; padding: 1rem;">No hay numeros en la lista</p>`;
  } else {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > bigger) {
        bigger = nums[i];
      }
    }
    resultView.innerHTML = `<p style="background: rgba(128, 128, 128, 0.39); border-radius: 5px; padding: 1rem;">El número mayor es: <strong>${bigger}</strong></p>`;
  }
  resultado.appendChild(resultView);
};
largestNum();
