function verifica(){
   var nome = document.getElementById('nome').value;
   var prova = parseFloat(document.getElementById('prova').value);
   var trabalho = parseFloat(document.getElementById('trabalho').value);
   var atividades = parseFloat(document.getElementById('atividades').value);
  let nota_final = (prova + trabalho + atividades) / 3;
  let Dizer_nota = document.getElementById('Dizer_Nota');
  
  if(nota_final >= 9){
    Dizer_nota.innerHTML = `Parabéns ${nome}! , Sua nota foi ${nota_final.toFixed(2)}.Você Tirou A`;
    Dizer_nota.style.color = 'green'
    Dizer_nota.style.background = 'white'
  }else if(nota_final >= 7){
    Dizer_nota.innerHTML = `Parabéns ${nome}!Sua nota foi ${nota_final.toFixed(2)}. Você Tirou B`;
    Dizer_nota.style.color = 'green'
    Dizer_nota.style.background = 'white'
  }else if(nota_final >= 5){
    Dizer_nota.innerHTML = `Parabéns ${nome}!Sua nota foi ${nota_final.toFixed(2)}. Você Tirou C`;
    Dizer_nota.style.color = 'green'
    Dizer_nota.style.background = 'white'
  }else {
    Dizer_nota.innerHTML = `Que pena :[ ${nome}!Sua nota foi ${nota_final.toFixed(2)}. Você Tirou D`;
    Dizer_nota.style.color = 'red'
    Dizer_nota.style.background = 'white'
  }
}