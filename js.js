let albums = document.getElementsByClassName('albums') 
let box = document.getElementsByClassName('box')
function open(a){  
    for(let i = 0; i < albums.length; i++){
        if(i==1){
            albums[i].style.display = 'flex'
        }
        else{
            albums[i].style.display = 'none'
        }
    }
}   
