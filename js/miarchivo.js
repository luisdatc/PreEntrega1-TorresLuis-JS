//DECLARO VARIABLES

let salirDelMenu = false;
let cursos = "";
let precioCursos = 0;
let consulta = "";
let numeroDeCursos = 0;
let cursoTotal = 0;

//FUNCION PARA MOSTRAR LOS CURSOS DISPONIBLES Y SELECCIONARLOS
function mostrarCursos() {
  cursos = parseInt(
    prompt(`
    Estos son los cursos que tenemos para que aprendas con nosotros: 

      1 - Desarrollo WEB - Precio del Curso: $3000
      2 - JavaScript - Precio del Curso: $3500
      3 - ReactJS - Precio del Curso: $3900
      4 - Programacion BackEnd - Precio del Curso: $6000
      5 - Python - Precio del Curso: $4500
      6 - UX/UI - Precio del Curso: $6000
      `)
  );

  switch (cursos) {
    case 1:
      precioCursos = 3000;
      cursos = "Desarrollo Web";
      alert(`Curso ${cursos} agregado al carro de compras`);
      break;
    case 2:
      precioCursos = 3500;
      cursos = "JavaScript";
      alert(`Curso de ${cursos} agregado al carro de compras`);
      break;
    case 3:
      precioCursos = 3000;
      cursos = "ReactJS";
      alert(`Curso de ${cursos} agregado al carro de compras`);
      break;
    case 4:
      precioCursos = 3000;
      cursos = "Programacion BackEnd";
      alert(`Curso de ${cursos} agregado al carro de compras`);
      break;
    case 5:
      precioCursos = 3000;
      cursos = "Python";
      alert(`Curso de ${cursos} agregado al carro de compras`);
      break;
    case 6:
      precioCursos = 3000;
      cursos = "UX/UI";
      alert(`Curso de ${cursos} agregado al carro de compras`);
      break;
    default:
      alert("Ingrese una opcion del 1 al 6");
      cursos = "";
      precioCursos = 0;
      break;
  }
}

//FUNCION PARA COMPRAR LOS CURSOS EN EL CARRO DE COMPRAS
function carroDeCompras() {
  consulta = prompt(
    `Desea comprar los cursos agregados al carro de compras? Indique si o no.`
  );
  if (consulta === "si" || consulta === "SI") {
    alert(
      `¡¡FELICIDADES!! compraste el curso de ${cursos}, preparate para empezar a aprender y disfrutar`
    );
  } else {
    alert(
      "Esperamos que vuelvas pronto y te decidas por algunos de nuestros cursos."
    );
  }
}

//DO WHILE PARA EL MENU
do {
  let consultar = parseInt(
    prompt(`Ingrese la opcion deseada: 
    
    1 - Consultar cursos disponibles.
    2 - Inicio de cursadas por curso.
    3 - Ver carro de compras.
    0 - Salir del menu.
    `)
  );
  switch (consultar) {
    case 1:
      mostrarCursos();
      break;
    case 2:
      alert(`A continuacion te detallamos el inicio por cada curso que tenemos disponible:

      1 - Desarrollo WEB: 15/01/2023
      2 - JavaScript: 20/01/2023
      3 - ReactJS: 05/02/2023
      4 - Programacion BackEnd: 18/02/2023
      5 - Python: 20/01/2023
      6 - UX/UI: 01/03/2023
      
      Escoge el que mas te convenga!.`);
      break;
    case 3:
      alert(
        `En el carro de compras agregaste ${cursos} y el precio es $${precioCursos}.`
      );
      carroDeCompras();
      break;
    case 0:
      alert("GRACIAS POR VISITARNOS, ESPERAMOS QUE PRONTO TENGAMOS ALGUN CURSO QUE TE ANIME A CAPACITARTE CON NOSOTROS. ");
      salirDelMenu = true;
      break;
    default:
      alert("Ingrese una opcion correcta del 0 al 3.");
      break;
  }
} while (!salirDelMenu);
