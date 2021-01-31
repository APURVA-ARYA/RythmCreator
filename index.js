function sequencer(){
    const kick= new Tone.Player('sounds/kick-newwave.wav').toMaster();
    const snare= new Tone.Player('sounds/hihat-808.wav').toMaster();
    const perc= new Tone.Player('sounds/perc-hollow.wav').toMaster();
    const tom= new Tone.Player('sounds/tom-chiptune.wav').toMaster();
    const clap= new Tone.Player('sounds/clap-slapper.wav').toMaster();
    const hit= new Tone.Player('sounds/snare-brute.wav').toMaster();
    let index=0;
    
    Tone.Transport.scheduleRepeat(repeat,"4n");
    Tone.Transport.start();
    function repeat(){
        let step = index % 4;

         let kickinputs=document.querySelector(`.kick input:nth-child(${step+1})`);
         let snareinputs=document.querySelector(`.snare input:nth-child(${step+1})`);
         let percinputs=document.querySelector(`.perc input:nth-child(${step+1})`);
         let tominputs=document.querySelector(`.tom input:nth-child(${step+1})`);
         let clapinputs=document.querySelector(`.clap input:nth-child(${step+1})`);
         let hitinputs=document.querySelector(`.hit input:nth-child(${step+1})`);


         if(kickinputs.checked){
             kick.start();
         }
         if(snareinputs.checked){
             snare.start();
         }
         if(percinputs.checked){
            perc.start();
        }
        if(tominputs.checked){
            tom.start();
        }
        if(clapinputs.checked){
            clap.start();
        }
        if(hitinputs.checked){
            hit.start();
        }
            index++;

    }
   
    
}
sequencer();