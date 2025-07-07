function Meama(){

    let amorSim = document.getElementById('amaSim')

        document.body.style.backgroundImage ='url(2994821_411139-PE3D18-759.jpg)'
        amorSim.innerHTML = 'Então casa comigo !'
        amorSim.style.color = 'Black'
        amorSim.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
        amorSim.style.padding = '10px';
        amorSim.style.marginBottom = '50px'
        amorSim.style.position = 'relative';
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundPosition ='center'
        document.body.style.display = "flex"
        document.body.style.justifyContent = 'center'
        document.body.style.alignItems = 'center'
        document.body.style.flexDirection = "column"
        document.body.style.height = '100vh'
   
}

function fugir(){
    let amaNao = document.getElementById('amaNao')

    let newX = Math.random() * (window.innerWidth - amaNao.offsetWidth);
    let newY = Math.random() * (window.innerHeight- amaNao.offsetHeight);

   amaNao.style.position = 'absolute';
   amaNao.style.left = `${newX}px`
   amaNao.style.top = `${newY}px`

}