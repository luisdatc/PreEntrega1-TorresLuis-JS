//Declaro Variables
let salirDelMenu = false;
let cursos;
let todosLosCursos = "";
let nombreCurso = "";
let precioCursos = 0;
let consulta;
let numeroDeCursos;
let cursoTotal;

//Funcion para mostrar los cursos
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
      
  Escoge la opcion del 1 al 6 correspondiente al curso al cual 
  quieras inscribirte.`)
  );

  //Opciones
  switch (cursos) {
    case 1:
      precioCursos += 3000;
      nombreCurso = "Desarrollo Web,";
      alert(`Genial agregaste el curso ${nombreCurso} al carro de compras.
      Recorda que el inicio de cursada es el dia 15/01/2023`);
      todosLosCursos += nombreCurso;
      break;

    case 2:
      precioCursos += 3500;
      nombreCurso = "JavaScript,";
      alert(`Genial agregaste el curso ${nombreCurso} al carro de compras
      Recorda que el inicio de cursada es el dia 20/01/2023`);
      todosLosCursos += nombreCurso;
      break;

    case 3:
      precioCursos += 3900;
      nombreCurso = "ReactJS,";
      alert(`Genial agregaste el curso ${nombreCurso} al carro de compras
      Recorda que el inicio de cursada es el dia 05/02/2023`);
      todosLosCursos += nombreCurso;
      break;

    case 4:
      precioCursos += 6000;
      nombreCurso = "Programacion BackEnd,";
      alert(`Genial agregaste el curso ${nombreCurso} al carro de compras
      Recorda que el inicio de cursada es el dia 18/02/2023`);
      todosLosCursos += nombreCurso;
      break;

    case 5:
      precioCursos += 4500;
      nombreCurso = "Python,";
      alert(
        `Genial agregaste el curso ${nombreCurso} al carro de compras
      Recorda que el inicio de cursada es el dia 20/01/2023`
      );
      todosLosCursos += nombreCurso;
      break;

    case 6:
      precioCursos += 6000;
      nombreCurso = "UX/UI,";
      alert(`Genial agregaste el curso ${nombreCurso} al carro de compras
      Recorda que el inicio de cursada es el dia 01/03/2023`);
      todosLosCursos += nombreCurso;
      break;

    //Opcion Predeterminada
    default:
      alert("Ingrese una opcion del 1 al 6");
      break;
  }
}

//FUNCION PARA COMPRAR LOS CURSOS EN EL CARRO DE COMPRAS
function carroDeCompras() {
  consulta = prompt(
    `Desea comprar los cursos agregados al carro de compras? Indique si o no.`
  ).toLowerCase();

  if (consulta === "si" /*  || consulta === "SI" */) {
    alert(
      `¡¡FELICIDADES!! compraste ${todosLosCursos} preparate para empezar a aprender y disfrutar`
    );
    todosLosCursos = "";
    precioCursos = 0;
  } else if (consulta == "no") {
    alert(
      "Esperamos que vuelvas pronto y te decidas por algunos de nuestros cursos."
    );
    todosLosCursos = "";
    precioCursos = 0;
  } else {
    alert("Ingresa si o no");
  }
}

//Menu Principal
do {
  let consultar = parseInt(
    prompt(`Ingrese la opcion deseada: 
    
    1 - Consultar cursos disponibles.
    2 - Inicio de cursadas por curso.
    3 - Ver carro de compras.
    0 - Salir del menu.
    `)
  );

  //Opciones
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
      if (todosLosCursos == "") {
        alert("El carro esta vacio, agrega los cursos que mas te gusten!.");
      } else {
        alert(
          `En el carro de compras agregaste ${todosLosCursos} y el precio total es de: $${precioCursos}.`
        );
        carroDeCompras();
      }
      break;

    case 0:
      alert(
        "GRACIAS POR VISITARNOS, ESPERAMOS QUE PRONTO TENGAMOS ALGUN CURSO QUE TE ANIME A CAPACITARTE CON NOSOTROS. "
      );
      salirDelMenu = true;
      break;

    //Opcion Predeterminada
    default:
      alert("Ingrese una opcion correcta del 0 al 3.");
      break;
  }
} while (!salirDelMenu);
