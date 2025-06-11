const elemento = document.querySelector(".texto");
    const cores = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FFD700"];
    let indexCor = 0;

    function trocarCor() {
      elemento.style.color = cores[indexCor];
      indexCor = (indexCor + 1) % cores.length;
      setTimeout(trocarCor, 1000); // troca a cada 1 segundo
    }
    trocarCor();