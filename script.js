// FormData object
//DOMContentLoaded: content loaded when the web page is open

document.addEventListener('DOMContentLoaded', () =>{
    let fd = new FormData();
    let current = new Date();
    fd.append('name', 'BeCode');
    fd.append('name', 'Xavier');
    fd.append('ID', 3333);
    fd.append('date_now', current.toLocaleString());
    fd.append('name',)

    console.log(Array.from(fd));

    document.querySelector('#form pre').textContent = JSON.stringify(Array.from(fd), '/t', 2);

// boucle for

    for (let obj of fd) {
        console.log(obj);
    }

// entries iteration

    for (let pair of fd.entries()) {
        console.log(pair[0]+ ', '+ pair[1]);
     }

// delete an obj

fd.delete('ID');

console.log(Array.from(fd));

// get 

    console.log(fd.get('name'));

// set

    fd.set('taille', 46);
    console.log(fd.get('taille'));

})

