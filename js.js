let albums = document.getElementsByClassName('albums') 
function OpenMod(a){
    if(albums[a].style.maxHeight == '0px'){
        for(let i = 0; i < albums.length; i++){
            if(i==a){
                albums[a].style.maxHeight = '5000px'
            }
            else{
                albums[i].style.maxHeight = '0px'
           }
        }
    }
    else{
        for(let i = 0; i < albums.length; i++){
            if(i==a){
                albums[a].style.maxHeight = '0px'
            }
            
        }

    }
}   
let ispol = document.getElementById('spisok')
let vseispol = document.getElementsByClassName('vse_ispol')
function OpenIspol() {
    if(ispol.style.display=='flex'){
        ispol.style.display='none'
        vseispol[0].style.height = '70px'
    }
    else{
        ispol.style.display='flex'
        vseispol[0].style.height = '218px'
    }
}
let menu = document.getElementsByClassName('menu1')
function nav() {
    if(menu[0].style.height=='0px'){
        menu[0].style.height='200px'
    }
    else{
        menu[0].style.height='0px'
    }
}