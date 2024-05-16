// Ambil elemen div dan h1
var divElement = document.querySelector('.box');
var headingElement = document.querySelector('.text');

// Atur variabel status awal
var jmlclick = 1;

// Tambahkan event listener untuk klik pada elemen div
divElement.addEventListener('click', function () {
    // Jika belum diklik sebelumnya, ubah teks menjadi "Teks Setelah Klik"
    if (jmlclick == 1) {
        headingElement.textContent = 'Makasiiee';
        jmlclick++;
    } else if (jmlclick == 2) {
        divElement.style.paddingTop = "15px";
        headingElement.textContent = 'Klik Sekali lagi dong';
        jmlclick++;
    } else if (jmlclick == 3) {
        divElement.style.paddingTop = "20px";
        headingElement.textContent = 'Makasi nandut:)';
        jmlclick++;
    } else if (jmlclick == 4) {
        divElement.style.paddingTop = "20px";
        headingElement.textContent = 'EHHH Maksudnya';
        jmlclick++;
    } else if (jmlclick == 5) {
        divElement.style.paddingTop = "30px";
        headingElement.textContent = 'Nantik';
        jmlclick++;
        jmlclick++;
    }
    else if (jmlclick == 7) {
        headingElement.style.fontSize = '30px'
        headingElement.textContent = `Nanda can ?`;
        jmlclick++;
    }
    else if (jmlclick == 8) {
        headingElement.style.fontSize = '45px'
        headingElement.textContent = `Can`;
        jmlclick++;
    } else if (jmlclick == 9) {
        divElement.style.textAlign = 'left';
        divElement.style.padding = '0';
        headingElement.style.fontSize = '45px'
        headingElement.textContent = `Can`;
        jmlclick++;
    }
    else if (jmlclick == 10) {
        divElement.style.textAlign = 'right';
        divElement.style.paddingTop = '50px';
        headingElement.style.fontSize = '45px'
        headingElement.textContent = `Can`;
        jmlclick++;
    } else if (jmlclick == 11) {
        divElement.style.textAlign = 'center';
        divElement.style.paddingTop = '20px';
        headingElement.style.fontSize = '20px'
        headingElement.textContent = `Can`;
        jmlclick++;
    }
    else if (jmlclick == 12) {
        headingElement.style.fontSize = '30px'
        headingElement.textContent = `Can`;
        jmlclick++;
    } else if (jmlclick == 13) {
        headingElement.style.fontSize = '45px'
        headingElement.textContent = `Can`;
        jmlclick++;
    } else if (jmlclick == 14) {
        const myicon = document.createElement("img");
        myicon.setAttribute("src", "laugh.png");
        //Emoji icons created by NajmunNahar - Flaticon
        // <a href="https://www.flaticon.com/free-icons/emoji" title="emoji icons"></a>
        divElement.appendChild(myicon);
        headingElement.style.fontSize = '45px'
        headingElement.textContent = `Cuaantiiiiiiiiiiiiiiiiiqqqo`;
        jmlclick++;
    }
    else {
    }
});
