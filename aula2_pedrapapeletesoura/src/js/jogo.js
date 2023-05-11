    
    let realTimeCpu = document.getElementById('placarCpu');
    let realTimeUser = document.getElementById('placarUser');
    let realTimeDraw = document.getElementById('placarDraw');

    let opcaoUsario = '' ;  
    let opcaoCpu = 0 ;
    
    let placarCpu = 0 ;
    let placarUser = 0 ;
    let placarDraw = 0 ;

function game(){
    event.preventDefault();
    
    opcaoUsario = document.getElementById('opcao').value;
    opcaoCpu = Math.floor(Math.random() * 3 );
    
    console.log(opcaoUsario);
    console.log(opcaoCpu);

    switch(opcaoUsario){
            case 'PEDRA':
                    if (opcaoCpu == 0) {
                        alert('Empatou, Escolha da CPU: PEDRA');
                        placarDraw = placarDraw + 1 ;
                    } else if (opcaoCpu == 1) {
                        alert('O CPU ganhou, Escolha da CPU: PAPEL');
                        placarCpu = placarCpu + 1 ; 
                    } else if (opcaoCpu == 2){
                        alert('Você ganhou, Escolha da CPU: TESOURA');
                        placarUser = placarUser + 1 ;
                    }
            break;
            case 'PAPEL':
                    if (opcaoCpu == 0) {
                        alert('Você Ganhou, Escolha da CPU: PEDRA');
                        placarUser = placarUser + 1 ;
                    } else if (opcaoCpu == 1) {
                        alert('Empatou, Escolha da CPU: PAPEL');
                        placarDraw = placarDraw + 1 ;
                    } else if (opcaoCpu == 2){
                        alert('Você Perdeu, Escolha da CPU: TESOURA');
                        placarCpu = placarCpu + 1 ;
                    }
            break;
            case 'TESOURA':
                    if (opcaoCpu == 0) {
                        alert('Perdeu, Escolha da CPU: PEDRA');
                        placarCpu = placarCpu + 1 ;
                    } else if (opcaoCpu == 1) {
                        alert('Você Ganhou, Escolha da CPU: PAPEL');
                        placarUser = placarUser + 1 ;
                    } else if (opcaoCpu == 2){
                        alert('Empatou, Escolha da CPU: TESOURA');
                        placarDraw = placarDraw + 1 ;
                    }
            break;
            default:
                alert('Opção inválida!');
        }
        realTimeCpu.innerHTML = placarCpu;
        realTimeUser.innerHTML = placarUser;
        realTimeDraw.innerHTML = placarDraw;

        //console.log('Placar User: ' + placarUser + ' Placar Cpu: ' + placarCpu + ' Placar Empate: ' + placarDraw);
        
       if ( placarCpu == 2 ){
            alert('GAME OVER: VOCÊ PERDEU 2 VEZES!' + ' Placar Cpu: ' + placarCpu);
            placarUser = 0 ;
            placarCpu = 0 ;
            placarDraw = 0 ;
            window.location.reload();
        } else if( placarUser == 2){
            alert('PARABÉNS: VOCÊ GANHOU 2 VEZES!' + ' Seu Placar: ' + placarUser);
            placarUser = 0 ;
            placarCpu = 0 ;
            placarDraw = 0 ;
            window.location.reload();
        }
    }