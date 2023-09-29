document.getElementById('registroForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar envío del formulario

  // Obtener los valores de los campos del formulario
  var nombre = document.getElementById('nombre').value;
  var rut = document.getElementById('rut').value;
  var cargo = document.getElementById('cargo').value;
  var telefono = document.getElementById('telefono').value;
  var email = document.getElementById('email').value;
  var area = document.getElementById('area').value;
  var contrato = document.getElementById('contrato').value;
  var salario = document.getElementById('salario').value;
  var fechaIngreso = document.getElementById('fechaIngreso').value;

  // Crear objeto con los datos del registro
  var registro = {
    nombre: nombre,
    rut: rut,
    cargo: cargo,
    telefono: telefono,
    email: email,
    area: area,
    contrato: contrato,
    salario: salario,
    fechaIngreso: fechaIngreso
  };

  // Aquí puedes realizar las operaciones CRUD con el objeto 'registro'
  // Puedes almacenarlo en un arreglo, enviarlo a un servidor, etc.

  // Ejemplo de visualización en consola
  console.log(registro);

  // Reiniciar el formulario
  document.getElementById('registroForm').reset();
});
