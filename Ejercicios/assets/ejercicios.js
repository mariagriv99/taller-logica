/* 1 */

document.addEventListener("DOMContentLoaded", function() {
  // Referencias DOM
const numberInput = document.getElementById("numberInput"); 
const sumButton = document.getElementById("sumButton");     
const result = document.getElementById("result");           

  // Evento de click al botón de suma
    sumButton.addEventListener("click", function() {
      // Convertir el valor ingresado en el input a un número entero
    const n = parseInt(numberInput.value);

      // Verificamos si el valor ingresado es un número válido mayor que 0
    if (!isNaN(n) && n > 0) {

        // Calculamos la suma de los números del 1 al n
        const sum = calculateSum(n);

          // Mostramos el resultado en el elemento result
        result.textContent = `La suma de los números del 1 al ${n} es: ${sum}`;
    } else {
          // Mostramos un mensaje de error si el número ingresado no es válido
        result.textContent = "Por favor, ingrese un número válido mayor que 0.";
    }
});

  // Función para calcular la suma de los números del 1 al n
    function calculateSum(n) {
    let sum = 0;

      // Recorremos los números del 1 al n y los sumamos
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

      return sum; // Retornamos el resultado de la suma
}
});


/* 2 */

document.addEventListener("DOMContentLoaded", function() {
const numeroInput = document.getElementById("numeroInput");
const checkButton = document.getElementById("checkButton");
const resultado = document.getElementById("resultado");

checkButton.addEventListener("click", function() {

  // Convertimos el valor del input a un número entero
    const number = parseInt(numeroInput.value);

// Verificamos si el valor que colocó el usuario es un número válido
    if (!isNaN(number)) {

        // Verificamos si el número es par
        if (number % 2 === 0) {

          // Mostramos el resultado si es par
            resultado.textContent = `${number} es un número PAR.`;
        } 
        
        else {
          // Mostramos el resultado si es impar
        resultado.textContent = `${number} es un número IMPAR.`;
        }

    } else {
        // Mostramos un mensaje de error si el número ingresado no es válido
        resultado.textContent = "Por favor, ingrese un número válido.";
    }
});
});


/* 3 */

document.addEventListener("DOMContentLoaded", function() {
const ageInput = document.getElementById("ageInput");
const genderSelect = document.getElementById("genderSelect");
const claimButton = document.getElementById("claimButton");
const prizeResult = document.getElementById("prizeResult");

  // Obtener la edad y el género del usuario 
claimButton.addEventListener("click", function() {
    const age = parseInt(ageInput.value);
    const gender = genderSelect.value;

      // Validaciones y premios
    if (!isNaN(age) && gender !== "none") {
    let prize = "";

        if (age < 10) {
        prize = "un jugo.";
        } else if (age >= 18) {
        prize = "una cerveza.";
        }

        if (gender === "female") {
        prize += " Adicionalmente, una porción de pizza Hawaiana.";
        } else if (gender === "male") {
        prize += " Adicionalmente, una porción de pizza tres carnes.";
        }

        if (prize !== "") {
        prizeResult.textContent = `¡Felicitaciones! Has ganado ${prize}`;
        } else {
        prizeResult.textContent = "Desafortunadamente, no recibes ningún premio.";
        }
    } else {
        prizeResult.textContent = "Por favor, completa la edad y el género.";
    }
});
});

/* 4 */

document.addEventListener("DOMContentLoaded", function() {
const orderInput = document.getElementById("orderInput");
const addButton = document.getElementById("addButton");
const payButton = document.getElementById("payButton");
const totalAmount = document.getElementById("totalAmount");

    let totalPrice = 0; // Variable para almacenar el valor total
    const menu = {      
    "hamburguesa": 15000,
    "pizza": 13000,
    "pasta": 12000,
    "ensalada": 11000
};

addButton.addEventListener("click", function() {
    const order = orderInput.value.toLowerCase(); // minúsculas

      // Verificamos si el pedido está en el menú
    if (menu.hasOwnProperty(order)) { //devuelve un booleano indicando si el objeto tiene la propiedad especificada.
        totalPrice += menu[order]; // Sumamos el precio del pedido al total
        orderInput.value = ""; // Limpiamos el campo
    } else {
        alert("Lo sentimos, ese ítem no está en el menú.");
    }
});

payButton.addEventListener("click", function() {
    totalAmount.textContent = `Total a pagar: $${totalPrice}`;
});
});

/* 5 */

document.addEventListener("DOMContentLoaded", function() {
const numberInput = document.getElementById("numero1Input");
const showButton = document.getElementById("showButton");
const multiplicationTable = document.getElementById("multiplicationTable");
const totalResult = document.getElementById("totalResult");

showButton.addEventListener("click", function() {
      multiplicationTable.innerHTML = ""; // Limpiamos la tabla existente
      totalResult.textContent = "";      // Limpiamos el resultado existente

    const number = parseInt(numberInput.value);

    if (!isNaN(number)) {
        let total = 0;

        for (let i = 1; i <= 10; i++) {
              const result = number * i;
            total += result;

            const listItem = document.createElement("li");
            listItem.textContent = `${number} x ${i} = ${result}`;
            multiplicationTable.appendChild(listItem);
        }

        totalResult.textContent = `El total de las multiplicaciones es: ${total}`;
    } else {
        totalResult.textContent = "Por favor, ingrese un número válido.";
    }
});
});

/* 6 */

document.addEventListener("DOMContentLoaded", function() {
const averageInput = document.getElementById("averageInput");
const calculateButton = document.getElementById("calculateButton");
const tuitionResult = document.getElementById("tuitionResult");

calculateButton.addEventListener("click", function() {
      tuitionResult.textContent = ""; // Limpiamos el resultado existente

      const average = parseFloat(averageInput.value); //parseFloat es una función que facilita la conversión de cadenas a números decimales

    if (!isNaN(average)) {
          let tuition = 1000000; // Valor matrícula

        if (average < 3) {
              // No hay descuento
        } else if (average >= 3 && average <= 4) {
              tuition *= 0.95; // Descuento 5%
        } else {
              tuition *= 0.5;  // Descuento 50%
        }

        tuitionResult.textContent = `El valor de la matrícula a pagar es: $${tuition.toFixed(2)}`;
    } else {
        tuitionResult.textContent = "Por favor, ingrese un promedio válido.";
    }
});
});