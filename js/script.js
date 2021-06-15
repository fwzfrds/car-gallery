const car = document.querySelector('.car');
const big = document.querySelector('.big');
const small = document.querySelectorAll('.small')

car.addEventListener('click', function(e) {

    if(e.target.className == 'small') {

        big.src = e.target.src;
        big.classList.add('fade');
        setTimeout(function () {
            big.classList.remove('fade');
        },500);

        small.forEach(function(small) {
            // if(small.classList.contains('active')) {
            //     small.classList.remove('active');
            // }

            small.className = 'small';
        });

        e.target.classList.add('active');
    }

});

// Caranya
// pertama : Tangkap dulu keseluruhan isi yaitu .car
// lalu buat eventnya
// buat if yang mentarget nama kelas si gambar yang kecilnya 
// lalu tangkap gambar bersarnya .big
// lalu ganti src yang .big dengan src target
// tambahkan class fade yg sudah dibuat kepada tiap gambar yg kecil