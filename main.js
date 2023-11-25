function CifrarAlfabeto(AlfabetoOrigen) {
  var Rotacion = parseInt(document.getElementById('Rotacion').value);

  // ---- 1o ejecutamos la rotaci�n del alfabeto
  var AlfabetoCifrado = AlfabetoOrigen.substr(Rotacion, AlfabetoOrigen.length - Rotacion) + AlfabetoOrigen.substr(0, Rotacion);

  var IndiceClave = 0;
  var IndiceCifrado = 0;
  var Limite = AlfabetoOrigen.length;
  var Letra = '';
  var Clave = '';
  var DesplazamientoClave = 0;
  var ClaveTempo = '';
  var AlfabetoClave = '';

  // ---- 2o se verifica Requerimiento y se inserta la CLAVE en el Alfabeto Cifrado

  var UsarClave = document.FormularioCiframiento.Usar_Clave;


  if (UsarClave.checked == true) {


    //  si el check box seleccionado, entonces se realiza la inserci�n de la clave
    FraseClave = document.getElementById('Clave').value;

    DesplazamientoClave = parseInt(document.getElementById('Desplazamiento_Clave').value);

    //--- 3o Eliminamos caracteres repetidos de la clave
    for (IndiceClave = 0; IndiceClave < FraseClave.length; IndiceClave++) {
      Letra = FraseClave.substr(IndiceClave, 1);

      if (ClaveTempo.indexOf(Letra) == -1) {
        // --- no existe esta letra, por lo tanto se toma para la CLAVE VERIFICADA
        ClaveTempo = ClaveTempo + Letra;
      }
    }

    FraseClave = ClaveTempo;

    // --- 4o incorporamos la clave dentro de la cadena de alfabeto cifrado
    IndiceCifrado = 0; //--- para llevar del alfabeto cifrado con clave
    IndiceClave = 0; //--- para llevar el control de sitio donde se insertar� la clave

    while (IndiceClave < DesplazamientoClave) {
      Letra = AlfabetoCifrado.substr(IndiceCifrado, 1);

      //--- Validamos la existencia de cada letra de la frase clave
      //    dentro del alfabeto cifrado
      if (FraseClave.indexOf(Letra) == -1) {
        // --- la Clave no contiene la letra del alfabeto cifrado
        //     entonce dicha letra se inserta en la posici�n actual
        AlfabetoClave = AlfabetoClave + Letra;

        // --- incrementamos los dos �ndices
        IndiceClave++;
        IndiceCifrado++;
      } else {
        // --- La letra cifrada si existe en la clave, entoces, no se transfiere
        //     �nicamente se incrementa el �ndice del alfabeto Cifrado
        IndiceCifrado++;
      }
    }

    // --- Hasta aqu� est� listo el alfabeto cifrado antes de la clave
    //     Ahora insertamos la CLAVE VERIFICADA (sin letras repetidas)
    AlfabetoClave = AlfabetoClave + FraseClave;

    // --- Ahora insertamos la parte del alfabeto que va despu�s de la clave insertada

    for (IndiceClave = IndiceCifrado; IndiceClave < Limite; IndiceClave++) {
      Letra = AlfabetoCifrado.substr(IndiceClave, 1);
      if (FraseClave.indexOf(Letra) == -1) {
        // -- la Clave no contiene la letra del alfabeto cifrado
        //    entonce dicha letra se inserta en la posici�n actual
        AlfabetoClave = AlfabetoClave + Letra;
        IndiceCifrado++;
      } else {
        // -- En caso que la letra est� contenida en la clave,
        //    simplemente se pasa por alto unicamente infrementamos el �ndice
        IndiceCifrado++;
      }
    }

    AlfabetoCifrado = AlfabetoClave;
    // ----  finaliza el proceso de inserci�n de la clave en el alfabeto cifrado
  }

  return AlfabetoCifrado;
}

// --- Esta funci�n se encarga de realizar el proceso de ciframiento del texto origen
function Cifrado() {
  var AlfabetoOrigen = " abcdefghijklmn�opqrstuvwxyz0123456789ABCDEFGHIJKLMN�OPQRSTUVWXYZ������������@#$%&/\\=+-*.,;:�?�!<>(){}[]_'";

  AlfabetoOrigen = AlfabetoOrigen + String.fromCharCode(34); //--- Agregamos la comilla doble
  var AlfabetoCifrado = '';
  var TextoOrigen = '';
  var TextoCifrado = '';
  var Letra = '';
  var IndiceTexto = 0;
  var IndiceCifrado = 0;
  var LongitudTexto = 0;

  TextoOrigen = document.getElementById('Texto_Origen').value;
  LongitudTexto = TextoOrigen.length;

  AlfabetoCifrado = CifrarAlfabeto(AlfabetoOrigen);

  for (IndiceTexto = 0; IndiceTexto < LongitudTexto; IndiceTexto++) {
    Letra = TextoOrigen.substr(IndiceTexto, 1);
    IndiceCifrado = AlfabetoOrigen.indexOf(Letra);
    TextoCifrado = TextoCifrado + AlfabetoCifrado.substr(IndiceCifrado, 1);
  }

  // ----- Escribimos el Texto Cifrado Resultante

  var resultado_Alfabeto_Origen = document.getElementById('Alfabeto_Origen');
  var resultado_Alfabeto_Cifrado = document.getElementById('Alfabeto_Cifrado');
  var resultado_Texto_Cifrado = document.getElementById('Texto_Cifrado');

  resultado_Alfabeto_Origen.innerHTML = 'Alfabeto Origen : ' + AlfabetoOrigen;
  resultado_Alfabeto_Cifrado.innerHTML = 'Alfabeto Cifrado: ' + AlfabetoCifrado;
  resultado_Texto_Cifrado.innerHTML = TextoCifrado;
}

// --- Esta funci�n se encarga de realizar el proceso de DESCIFRADO del texto previamente cifrado, volvi�ndolo a su estado original
function Descifrado() {
  var AlfabetoOrigen = " abcdefghijklmn�opqrstuvwxyz0123456789ABCDEFGHIJKLMN�OPQRSTUVWXYZ������������@#$%&/\\=+-*.,;:�?�!<>(){}[]_'";

  AlfabetoOrigen = AlfabetoOrigen + String.fromCharCode(34); //--- Agregamos la comilla doble
  var AlfabetoCifrado = '';
  var TextoOrigen = '';
  var TextoDescifrado = '';
  var Letra = '';
  var IndiceTexto = 0;
  var IndiceCifrado = 0;
  var LongitudTexto = 0;

  TextoOrigen = document.getElementById('Texto_Origen').value;
  LongitudTexto = TextoOrigen.length;

  AlfabetoCifrado = CifrarAlfabeto(AlfabetoOrigen);

  for (IndiceTexto = 0; IndiceTexto < LongitudTexto; IndiceTexto++) {
    Letra = TextoOrigen.substr(IndiceTexto, 1);
    IndiceCifrado = AlfabetoCifrado.indexOf(Letra);
    TextoDescifrado = TextoDescifrado + AlfabetoOrigen.substr(IndiceCifrado, 1);
  }

  // ----- Escribimos el Texto Cifrado Resultante

  var resultado_Alfabeto_Origen = document.getElementById('Alfabeto_Origen');
  var resultado_Alfabeto_Cifrado = document.getElementById('Alfabeto_Cifrado');
  var resultado_Texto_Cifrado = document.getElementById('Texto_Cifrado');

  resultado_Alfabeto_Origen.innerHTML = 'Alfabeto Origen: ' + AlfabetoOrigen;
  resultado_Alfabeto_Cifrado.innerHTML = 'Alfabeto Cifrado: ' + AlfabetoCifrado;
  resultado_Texto_Cifrado.innerHTML = TextoDescifrado;
}
