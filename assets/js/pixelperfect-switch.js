'use strict';

let hidden = true

document.onkeydown = function(e) {
    if(e.shiftKey) {
        switch (e.code) {
            case 'KeyH':
                let div = document.querySelector('.pixelperfect')
                hidden ? div.style.display = 'initial' : div.style.display = 'none'
                hidden = !hidden
        }
    }
}