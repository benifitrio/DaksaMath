function kunciPage() {

    homeContent.innerHTML =
        `<div style="margin-bottom:5rem;" class="mt-4 surah font-sans d-block text-white">
        <dl class=" divide-y divide-gray-200 p-4 mt-4 " id="paginated-list" data-current-page="1" aria-live="polite">
            <div class="flex flex-col pb-3 math">
                <dt class="mb-1 text-base font-semibold">Pembahasan Soal No.1</dt>
                <dd class="text-sm">
                Harga jual 30 buah kemeja adalah = 30 x Rp96.500,00 = Rp2.895.000,00 = Rp45.000,00. </br>
    Harga jual > harga beli -> pedagang mengalami untung sebesar = Rp2.895.000,00 - Rp2.850.000,00 = Rp45.000,00. </br>
    Jadi, pedagang mendapatkan untung sebesar Rp45.000,00.
                </dd>
            </div>
            <div class="flex flex-col py-3 math">
            <dt class="mb-1 text-base font-semibold">Pembahasan Soal No.2</dt>
            <dd class="text-sm">
           Ingatlah bila 1 lusin = 12 buah.</br>
    Harga jual 1 lusin buku tulis adalah = 12 x Rp2.750,00 = Rp33.000,00. </br>
    Jadi, keuntungan yang diperoleh seluruhnya adalah Rp33.000,00 - Rp28.200,00 = Rp4.800,00
            </dd>
            </div>
            <div class="flex flex-col pt-3 math">
            <dt class="mb-1 text-base font-semibold">Pembahasan Soal No.3</dt>
            <dd class="text-sm">
            <b>Cara 1</b>
            Diketahui persentase adalah 20%. </br>
            Besar keuntungan adalah = 20% x Rp112.500,00 = Rp22.500,00. </br>
            Harga jualnya adalah Rp112.500,00 + Rp22.500,00 = Rp135.000,00.

            <b>Cara 2</b>
            Diketahui persentase adalah 20%. </br>
    Harga jual = 100% + 20% = 120%.</br>
    Harga tas adalah 120% x Rp112.500,00 = Rp135.000,00.
            </dd>
            </div>
            <div class="flex flex-col pt-3 math">
            <dt class="mb-1 text-base font-semibold">Pembahasan Soal No.4</dt>
            <dd class="text-sm">
            Untung =  Harga jual - Harga beli.
            </dd>
            </div>
            <div class="flex flex-col pt-3 math">
            <dt class="mb-1 text-base font-semibold">Pembahasan Soal No.5</dt>
            <dd class="text-sm">
            Rabat yang diberikan kepada pembeli adalah = 15% x Rp640.000,00 = Rp96.000,00. </br>
    Uang yang harus dibayarkan  kepada penjual adalah = Rp640.000,00 - Rp96.000,00 = Rp544.000,00. </br>
    Jadi, uang yang harus dibayarkan adalah Rp544.000,00.
            </dd>
            </div>
            <div class="flex flex-col pt-3 math">
            <dt class="mb-1 text-base font-semibold">Pembahasan Soal No.6</dt>
            <dd class="text-sm">
            Tara = Bruto - Neto.
            </dd>
            </div>
            <div class="flex flex-col pt-3 math">
            <dt class="mb-1 text-base font-semibold">Pembahasan Soal No.7</dt>
            <dd class="text-sm">
            Harga sepatu adalah Rp329.000,00.</br>
    Kerugian 2% dari pembelian adalah = 2/100 x Rp329.000,00 = 2 x Rp3.290,00 = Rp6.580,00. </br>
    Jadi, harga penjualan adalah Rp329.000,00 - Rp6.580,00 = Rp322.420,00.
            </dd>
            </div>
            <div class="flex flex-col pt-3 math">
            <dt class="mb-1 text-base font-semibold">Pembahasan Soal No.8</dt>
            <dd class="text-sm">
            Harga beli = 30 x Rp312.000,00.</br>
            Rugi = Rp18.000,00.</br>
  8 lusin = 8 x 12 = 96 buah. </br>
  Harga jual = Harga beli - Rugi</br>
  = Rp330.000,00 - Rp18.000,00 = Rp312.000,00.</br>
    Harga jual tiap buah = Rp312.000,00/96 = Rp3.250,00.
            </dd>
            </div>
            <div class="flex flex-col pt-3 math">
            <dt class="mb-1 text-base font-semibold">Pembahasan Soal No.9</dt>
            <dd class="text-sm">
           Persentase % diskon adalah = 15%</br>
           Harga awal = Rp380.000,00.</br>
    Diskon = 15/100 x  Rp380.000,00 = Rp57.000,00. </br>
    Harga setelah diskon =  Rp380.000,00 - Rp57.000,00 = Rp323.000,00</br>
    Jadi, uang yang harus dibayarkan oleh Doni adalah sebesar Rp323.000,00.
            </dd>
            </div>
            <div class="flex flex-col pt-3 math">
            <dt class="mb-1 text-base font-semibold">Pembahasan Soal No.10</dt>
            <dd class="text-sm">
            Kita hitung dalam satuan perbuah.</br>
            catatan:
            HB= Harga Beli</br>
            PU = Persentase Untung</br>
            U = Untung</br>
            HJ =  Harga Jual</br>

    PU = 25% </br>
    U = PU x HB</br>
      = 25% x Rp8.000,00 = Rp2.000,00</br>
      Untung = HJ - HB </br>
       Rp2.000,00 = HJ - Rp8.000,00</br>
       HJ =  Rp2.000,00  +  Rp8.000,00 =  Rp10.000,00
    Jadi, Harga penjualan sebuah pensil adalah sebesar Rp10.000,00.
            </dd>
            </div>
        </dl>
           
      <nav class="pagination-container">
        <button class="pagination-button" id="prev-button" aria-label="Previous page" title="Previous page">
          &lt;
        </button>
    
        <div id="pagination-numbers">
    
        </div>
    
        <button class="pagination-button" id="next-button" aria-label="Next page" title="Next page">
          &gt;
        </button>
      </nav>
        </div>`;

    const paginationNumbers = document.getElementById("pagination-numbers");
    const paginatedList = document.getElementById("paginated-list");
    const listItems = paginatedList.querySelectorAll(".math");
    const nextButton = document.getElementById("next-button");
    const prevButton = document.getElementById("prev-button");

    const paginationLimit = 4;
    const pageCount = Math.ceil(listItems.length / paginationLimit);
    let currentPage = 1;

    const disableButton = (button) => {
        button.classList.add("disabled");
        button.setAttribute("disabled", true);
    };

    const enableButton = (button) => {
        button.classList.remove("disabled");
        button.removeAttribute("disabled");
    };

    const handlePageButtonsStatus = () => {
        if (currentPage === 1) {
            disableButton(prevButton);
        } else {
            enableButton(prevButton);
        }

        if (pageCount === currentPage) {
            disableButton(nextButton);
        } else {
            enableButton(nextButton);
        }
    };

    const handleActivePageNumber = () => {
        document.querySelectorAll(".pagination-number").forEach((button) => {
            button.classList.remove("active");
            const pageIndex = Number(button.getAttribute("page-index"));
            if (pageIndex == currentPage) {
                button.classList.add("active");
            }
        });
    };

    const appendPageNumber = (index) => {
        const pageNumber = document.createElement("button");
        pageNumber.className = "pagination-number";
        pageNumber.innerHTML = index;
        pageNumber.setAttribute("page-index", index);
        pageNumber.setAttribute("aria-label", "Page " + index);

        paginationNumbers.appendChild(pageNumber);
    };

    const getPaginationNumbers = () => {
        for (let i = 1; i <= pageCount; i++) {
            appendPageNumber(i);
        }
    };

    const setCurrentPage = (pageNum) => {
        currentPage = pageNum;

        handleActivePageNumber();
        handlePageButtonsStatus();

        const prevRange = (pageNum - 1) * paginationLimit;
        const currRange = pageNum * paginationLimit;

        listItems.forEach((item, index) => {
            item.classList.add("hidden");
            if (index >= prevRange && index < currRange) {
                item.classList.remove("hidden");
            }
        });
    };

    window.addEventListener("load", () => {
        getPaginationNumbers();
        setCurrentPage(1);

        prevButton.addEventListener("click", () => {
            setCurrentPage(currentPage - 1);
        });

        nextButton.addEventListener("click", () => {
            setCurrentPage(currentPage + 1);
        });

        document.querySelectorAll(".pagination-number").forEach((button) => {
            const pageIndex = Number(button.getAttribute("page-index"));

            if (pageIndex) {
                button.addEventListener("click", () => {
                    setCurrentPage(pageIndex);
                });
            }
        });
    });

}