function calcularMedia() {
    var nomeAluno = document.getElementById('nomeAluno').value;
    var nota1 = Number(document.getElementById('nota1').value); 
    var nota2 = Number(document.getElementById('nota2').value);
    var nota3 = Number(document.getElementById('nota3').value);
    var nota4 = Number(document.getElementById('nota4').value);

    var media = (nota1 + nota2 + nota3 + nota4) / 4

  
    resultadonome.innerHTML = `Calculando a média do  ${nomeAluno}`;
    resultadoCalc.innerHTML = `A média das notas do aluno <strong>${nomeAluno}</strong> é: <mark>${media}</mark>`;
   

    if (media >= 7) {
        resultadoCalc.innerHTML += "<br><br> Aluno Aprovado! &#9989";
      } else if (media >= 5) {
        resultadoCalc.innerHTML += "<br><br> Aluno em recuperação! &#127384";
      } else {
        resultadoCalc.innerHTML += "<br><br> Aluno Reprovado! &#10060";
       }
    }
