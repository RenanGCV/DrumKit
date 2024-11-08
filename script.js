

var listaAudios = [];

        $(document).ready(function () {
            //já que você quer fazer o carregamento antecipado de tudo, pode fazer isso quando 
            //a página for carregada. Pode ser ruim fazer isso se forem muitos
            //arquivos e muito grandes.

            $('.gas.kr').each(function (e) {
                var url = $(this).attr('data-audiourl');
                var audioPlay = new Audio(url);
                audioPlay.preload = "auto";

                var audioData = {
                    'url': $(this).attr('data-audiourl'),
                    'audioPlayObj': audioPlay
                };

                listaAudios.push(audioData);
            });
        });
        $('.gas.kr').click(function () {
            var url = $(this).attr('data-audiourl');
            for (var i = 0; i < listaAudios.length; i++) {
                if (listaAudios[i].url == url) {
                    var audio = listaAudios[i].audioPlayObj;                        
                    audio.currentTime = 0;
                    audio.volume = 1;
                    audio.play();
                    break;
            }
        }

        function stopAll() {
            for (var i = 0; i < listaAudios.length; i++) {
                listaAudios[i].audioPlayObj.pause();
            }
        }    
    });
