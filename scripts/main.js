var homeContent = document.getElementById('content')

function Home() {
    homeContent.innerHTML =
        `<div class="w-full h-72 rounded-2xl overflow-hidden mt-4 shadow-2xl font-sans ">
          <div id="image" class="w-full  rounded-2xl h-full relative">
           <div class="absolute z-10 w-full text-center p-4 h-full top-16">
            <p class="text-white text-base mb-1 font-bold writer"></p>
            <p class="text-sm italic text-white mb-3">"Daksa Math adalah aplikasi pembelajaran berbasis web yang didesain untuk membantu siswa memahami materi aritmatika sosial secara lebih mudah dan menyenangkan. "</p>
            <a href="#materi" class="bg-yellow-300 font-bold  py-1 px-4 rounded-xl shadow-md ">
           Baca sekarang 
           <i class="text-xs fas fa-arrow-right"></i>
            </a>
           </div>
         </div>
        </div>

  <div class="m-4 bold font-sans">
    <div class="flex w-full">
      <a href="#materi" class="block w-1/2 rounded-xl shadow-xl mr-2 p-4 menu border">
      <div class="flex justify-center w-full">
      <img src="../images/materi.png" width="50" class="rounded-full">
      </div>
        <p class="mt-2 text-xl font-bold text-center">Materi</p>
        <p class="text-xs text-center">Materi disajikan kontekstual dan di lengkapi dengan gambar animasi</p>
      </a>
      <a href="../quiz.html" class="block w-1/2 rounded-xl shadow-xl p-4 menu border">
        <div class="flex justify-center w-full">
          <img src="../images/evaluasi.png" width="50" class="rounded-full">
        </div>
        <p class="mt-2 text-xl font-bold text-center">Evaluasi</p>
        <p class="text-xs text-center">Soal evaluasi yang disajikan secara interaktif</p>
      </a>
    </div>
    <div class="flex w-full mt-2">
      <a href="#daftar-pustaka" class="block w-1/2 rounded-xl shadow-xl mr-2 p-4 menu border">
      <div class="flex justify-center w-full">
      <img src="../images/PUSTAKA.png" width="50" class="rounded-full">
    </div>
    <p class="mt-2 text-xl font-bold text-center">Daftar Pustaka</p>
    <p class="text-xs text-center">Referensi yang digunakan</p>
      </a>
      <a href="#petunjuk" class="block w-1/2 rounded-xl shadow-xl p-4 menu border">
      <div class="flex justify-center w-full">
        <img src="../images/petunjuk1.png" width="55" class="rounded-full">
      </div>
        <p class="mt-2 text-xl font-bold text-center">Petunjuk</p>
        <p class="text-xs text-center">Petunjuk Penggunaan Aplikasi Web</p>
      </a>
    </div>
  </div>`

    const writer = document.querySelector('.writer')
    let txt1 = "Kadang ketakutan hanya terjadi jika kamu selalu memikirkannya. Abaikan dan teruslah maju melangkah ke depan."
    let txt2 = "Janganlah gunakan energi kamu untuk khawatir. Gunakan energi kamu untuk percaya, menciptakan, belajar, dan berfikir."
    let txt3 = "Gak penting kelihatan kaya, yang penting kelihatan cukup, cukup itu gak perlu kaya, cukup itu ketika kita perlu mau membeli sesuatu ada uangnya, yang penting tidak konsumtif. ~ Buya Hamka ~"
    let txt4 = "Jangan pernah takut gagal karena kegagalan adalah batu loncatan menuju kesuksesan. ~ Ir. Soekarno ~"

    const typewriter = new Typewriter(writer, {
        loop: true,
        delay: 75,
    })

    typewriter
        .typeString(txt1)
        .pauseFor(1000)
        .deleteAll()
        .typeString(txt2)
        .pauseFor(1000)
        .deleteAll()
        .typeString(txt3)
        .pauseFor(1000)
        .deleteAll()
        .typeString(txt4)
        .pauseFor(1000)
        .start();
    document.title = 'Daksa Math - Aritmatika Sosial'
}


function tentangPage() {
    homeContent.innerHTML =
        `<div style="margin-bottom:5rem;" class="mt-4 surah font-sans d-block text-white">
       <p class="text-base p-4"> Aplikasi web <b>Daksa Math</b> didesain untuk membantu siswa memahami materi aritmatika sosial secara lebih mudah dan menyenangkan. Dengan menggunakan konteks nyata yang sesuai dengan kehidupan sehari-hari siswa, aplikasi ini akan membantu siswa memahami konsep matematika dengan lebih baik. Aplikasi ini akan menawarkan berbagai jenis soal aritmatika sosial, seperti soal tentang jual-beli, untung-rugi, dan persentase. Setiap soal akan dikemas dengan sebuah cerita pendek yang relevan dengan kehidupan sehari-hari. Misalnya, soal tentang persentase bisa dikemas dengan cerita tentang diskon saat berbelanja, atau soal tentang jual-beli bisa dikemas dengan cerita tentang membandingkan harga barang di dua toko yang berbeda. Selain itu, aplikasi ini juga akan menyediakan feedback yang jelas dan terperinci untuk setiap jawaban yang diberikan, sehingga siswa dapat memahami di mana kesalahan mereka dan belajar dari kesalahan tersebut.</p>
  </div>`
    document.title = 'Tentang Daksa Math'
}

function daftarpustaka() {
    homeContent.innerHTML = `
<div class="mt-4 dapus font-sans p-3 d-block ">
<h2 class="text-xl text-center font-bold mb-3">DAFTAR PUSTAKA</h2>
<ul class="divide-y-2 w-100 ">
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 ">Kementerian Pendidikan dan kebudayaan Republik Indonesia. 2017. <i>Matematika Kelas VII SMP/MTs Semester 2.</i>
</li>
<li class="p-3 hover:bg-blue-600 hover:text-blue-200 ">Kementerian Pendidikan dan Kebudayaan Direktorat Jenderal Pendidikan Anak Usia Dini Pendidikan Dasar dan Pendidikan Menengah Direktorat Sekolah Menengah Pertama. 2020. <i>Modul 6 Aritmatika Sosial Kelas VII.</i>
</li>
</ul>
</div>`

    document.title = 'Daftar Pustaka'
}

function petunjuk() {
    homeContent.innerHTML =
        `<div style="margin-bottom:5rem;" class="mt-4 surah font-sans d-block text-white">
  <img src="../images/petunjuk.png" alt="petunjuk" class=" shadow-2xl rounded-2xl" />
</div>`

    document.title = 'Petunjuk Penggunaan'
}

function motivasi() {
    homeContent.innerHTML =
        `<div style="margin-bottom:5rem;" class=" surah font-sans d-block text-white">
        <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true" space-between="30"
        centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
        <swiper-slide>
        <div class="testimonial-box">
        <!--top------------------------->
        <div class="box-top">
            <!--profile----->
            <div class="profile">
                <!--img---->
                <div class="profile-img">
                    <img src="../images/Ir Soekarno.png" />
                </div>
                <!--name-and-username-->
                <div class="name-user">
                    <strong>Ir Soekarno</strong>
                    <span> Pahlawan Nasional Proklamator RI </br> 6 Juni 1901 – 21 Juni 1970</span>
                </div>
            </div>
          
        </div>
        <!--Comments---------------------------------------->
        <div class="client-comment">
            <p class="italic">"Lakukan kebaikan untuk orang lain, bahkan ketika mereka tidak melakukan kebaikan bagi kamu; orang lain tentu akan berbuat baik kepada kamu. Jika masih ada rasa malu dan takut di hati seseorang untuk berbuat baik, pasti tidak akan ada kemajuan sama sekali".</p>
        </div>
    </div>
        </swiper-slide>
        <swiper-slide>
        <div class="testimonial-box">
        <!--top------------------------->
        <div class="box-top">
            <!--profile----->
            <div class="profile">
                <!--img---->
                <div class="profile-img">
                    <img src="../images/ki-hajar-dewantara.png" />
                </div>
                <!--name-and-username-->
                <div class="name-user">
                    <strong>Ki Hajar Dewantara</strong>
                    <span>Pahlawan Pendidikan </br> 2 Mei 1889 – 26 April 1959</span>
                </div>
            </div>
           
        </div>
        <!--Comments---------------------------------------->
        <div class="client-comment">
            <p class="italic">“Guru jangan hanya memberi pengetahuan yang perlu dan baik saja tetapi harus juga mendidik si murid akan dapat mencari sendiri pengetahuan itu dan memakainya guna amal keperluan umum. Pengetahuan yang baik dan perlu itu yang manfaat untuk keperluan lahir batin dalam hidup bersama.”</p>
        </div>
    </div>
        </swiper-slide>
        <swiper-slide>
        <div class="testimonial-box">
        <!--top------------------------->
        <div class="box-top">
            <!--profile----->
            <div class="profile">
                <!--img---->
                <div class="profile-img">
                    <img src="../images/einstein.png" />
                </div>
                <!--name-and-username-->
                <div class="name-user">
                    <strong>Albert Einstein</strong>
                    <span>Fisikawan </br>
                     14 March 1879 – 18 April 1955</span>
                </div>
            </div>
           
        </div>
        <!--Comments---------------------------------------->
        <div class="client-comment">
            <p class="italic">“Saya percaya bahwa jujur dan sikap sederhana adalah terbaik untuk semua orang, paling baik untuk tubuh dan pikiran.”</p>
        </div>
    </div>
        </swiper-slide>
        <swiper-slide>
        <div class="testimonial-box">
        <!--top------------------------->
        <div class="box-top">
            <!--profile----->
            <div class="profile">
                <!--img---->
                <div class="profile-img">
                    <img src="../images/bj-habibie.png" />
                </div>
                <!--name-and-username-->
                <div class="name-user">
                    <strong>BJ Habibie</strong>
                    <span> Presiden Republik Indonesia ke-3 </br> 25 Juni 1936 – 11 September 2019</span>
                </div>
            </div>
            
        </div>
        <!--Comments---------------------------------------->
        <div class="client-comment">
        <p class="italic">“Ketika muda kita habisi dengan bermalas-malasan, maka tua juga akan malas-malasan lalu tak terasa besok mati. Namun kalau kita banyak belajar dan banyak analisis maka saat dia tua dia menang.”</p>
        </div>
    </div>
        </swiper-slide>
        <div class="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span></span>
        </div>
      </swiper-container></div>`

    document.title = 'Motivasi'
}