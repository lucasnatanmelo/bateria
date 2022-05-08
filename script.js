//Função que irá monitorar as ações executadas no site como um todo
//Função keyup - Função que irá receber a volta do botão pressionado

document.body.addEventListener('keyup', (e)=>{
    console.log(e.code); //'e'representa um evento a qual a função irá receber
                         //code é o código da tecla recebida
    playSound(e.code.toLowerCase() ); //Função playSound irá tocar o comando recebido
});                                //toLouwerCase irá sempre diminuir o caractere


//Essa função irá pegar os caracteres informados no input e colocar em uma lista denominada songArray
document.querySelector('.composer button').addEventListener('click', ()=> {
    let song = document.querySelector('#input').value;

    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`); //Essa função receberá um parametro 'sound"
                                                              //O parametro sound pode ser qualquer coisa, no caso será o caractere pressionado

    let keyElement = document.querySelector(`div[data-key="${sound}"]`) //Aqui será definido a partir do caractere digitado para manipular a div data-key
    
    
    if(audioElement){        //Se o audio Element for encontrado... Veja que não necessitou de condicional - Já filtra por padrão os caracteres
        audioElement.currentTime = 0; //Comando para sempre que ser pressionada a tecla, ser zerado contador do áudio para evitar bug
        audioElement.play(); //função play reproduzirá o elemento indicado no html
    }
    if(keyElement){ 
        keyElement.classList.add('active'); //Será atriubuido o atributo .active na tecla pressionada
        setTimeout(() => { //Função irá remover automaticamente o atributo após 3 ms
            keyElement.classList.remove('active'); 
        }, 300);
    }
};

//Função a qual irá executar a execução da música na array guardada
function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray){  //mesma coisa que a função for()
        setTimeout(()=>{ //Fará um intervalo entre a execução dos comandos da lista
            playSound(`key${songItem}`); 
        }, wait);

        wait += 250;
    }

}