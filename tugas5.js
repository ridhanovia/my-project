console.log('SOAL 1');
    function halo(){
        return "Halo Sanbers";
    }
    console.log(halo());

console.log('\n');
console.log('SOAL 2');
    function kalikan(num1,num2){
        return num1 * num2;
    }

    var num1 = 12;
    var num2 = 4;
    var hasilkali = kalikan(num1,num2);
    console.log(hasilkali);

console.log('\n');
console.log('SOAL 3');
    function introduce(name, age, address, hobby){
        console.log('Nama saya ' + name + ' , umur saya ' + age + ' tahun, alamat saya di ' + address + ' , dan saya punya hobby yaitu ' + hobby);
    }
    
    var name = "John";
    var age = 30;
    var address = "Jalan belum jadi";
    var hobby = "Gaming";

    var perkenalan = introduce(name, age, address, hobby);
    console.log(perkenalan);

console.log('\n');
console.log('SOAL 4');
    var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
    var DataPerserta = {
        nama : "Asep",
        Jenis_kelamin : "laki-laki",
        hobi : "baca buku",
        tahun_lahir : 1992
    }

    console.log(DataPerserta);

console.log('\n');
console.log('SOAL 5');
    var DataBuah = [{nama: "Strawberry", warna : "merah", ada_biji : "tidak", harga : 9000}, {nama: "Jeruk", warna : "oranye", ada_biji : "ada", harga : 8000}, {nama: "Semangka", warna : "hijau & merah", ada_biji : "ada", harga :10000}, {nama: "Pisang", warna : "kuning", ada_biji : "tidak", harga :5000}];
    console.log(DataBuah[0]);

console.log('\n');
console.log('SOAL 6');
    var Arrnama = [];
    var Arrgenre = [];
    var Arrdurasi = [];
    var Arrtahun = [];

    function dataFilm (nama, genre, durasi, tahun){
        Arrnama.push(nama);
        Arrgenre.push(genre);
        Arrdurasi.push(durasi);
        Arrtahun.push(tahun);
    }

    dataFilm("Dilan","romansa","30 menit", 2016);
    console.log(Arrnama,Arrgenre,Arrdurasi,Arrtahun);


    