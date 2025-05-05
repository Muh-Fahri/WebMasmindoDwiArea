document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // Reset efek saat elemen keluar dari viewport
            }
        });
    }, { threshold: 0.3 }); // 30% elemen terlihat, mulai animasi

    fadeElements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
    var gagalModal = new bootstrap.Modal(document.getElementById('gagalModal'));
    gagalModal.show();
});

document.addEventListener("DOMContentLoaded", function () {
    var myModalEl = document.getElementById('welcomeAminModal');
    var myModal = new bootstrap.Modal(myModalEl);
    myModal.show();

    setTimeout(function () {
        myModal.hide();
        document.querySelector('.modal-backdrop')?.remove(); // Hapus backdrop jika masih ada
    }, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
    var welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    welcomeModal.show();


});

document.addEventListener("DOMContentLoaded", function () {
    var modalElement = document.getElementById('welcomeModal');
    var modal = new bootstrap.Modal(modalElement);
    modal.show();

    setTimeout(function () {
        modal.hide();

        // Hapus backdrop secara manual setelah modal tertutup
        document.querySelector('.modal-backdrop')?.remove();
        document.body.classList.remove('modal-open');
        document.body.style.overflow = ''; // Pastikan scroll kembali normal
    }, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
    const modalElement = document.getElementById('welcomeModal-Succes-galeri');
    if (modalElement) {
        const successModal = new bootstrap.Modal(modalElement);
        successModal.show();

        const audio = document.getElementById("successSound");
        audio?.play().catch(error => console.log("Autoplay error:", error));

        // Pastikan backdrop di belakang
        setTimeout(function () {
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.style.zIndex = "1040";
                modalElement.style.zIndex = "1050";
            }

            // Auto close
            setTimeout(function () {
                successModal.hide();
                backdrop?.remove();
            }, 2000);
        }, 100); // Delay kecil buat nunggu backdrop muncul
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var hapusModal = new bootstrap.Modal(document.getElementById('hapusModal'));
    hapusModal.show();

    // Auto-close modal setelah 3 detik
    setTimeout(function () {
        hapusModal.hide();
        document.querySelector('.modal-backdrop')?.remove(); // Hapus backdrop agar tidak menghalangi
    }, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
    var videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
    videoModal.show();

    var audio = document.getElementById("successSound");
    audio.play().catch(error => console.log("Autoplay error:", error));

    // Auto-close modal setelah 3 detik
    setTimeout(function () {
        videoModal.hide();
        document.querySelector('.modal-backdrop')?.remove(); // Hapus backdrop agar tidak menghalangi
    }, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
    var videoTerhapusModal = new bootstrap.Modal(document.getElementById('videoTerhapusModal'));
    videoTerhapusModal.show();



    // Auto-close modal setelah 3 detik
    setTimeout(function () {
        videoTerhapusModal.hide();
        document.querySelector('.modal-backdrop')?.remove(); // Hapus backdrop agar tidak menghalangi
    }, 2000);
});

function updatePesanBadge() {
    fetch("/admin/jumlah-pesan")
        .then(response => response.json())
        .then(data => {
            const badge = document.getElementById("badge-pesan");
            if (data.jumlah > 0) {
                badge.textContent = data.jumlah;
                badge.classList.remove("d-none");
            } else {
                badge.classList.add("d-none");
            }
        });
}

updatePesanBadge();

setInterval(updatePesanBadge, 5000);


function scrollVideo(direction) {
    const scrollContainer = document.getElementById('videoScroll');
    const scrollAmount = 850;

    if (direction === 'left') {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

function scrollBerita(direction) {
    const scrollContainer = document.getElementById('beritaScroll');
    const scrollAmount = 400;

    if (direction === 'left') {
        scrollContainer.scrollLeft -= scrollAmount;
    } else {
        scrollContainer.scrollLeft += scrollAmount;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const modal = new bootstrap.Modal(document.getElementById('modalBerita'));
    modal.show();

    // Sembunyikan setelah 3 detik
    // setTimeout(() => {
    //     modal.hide();
    // }, 3000);
});
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll ke bawah → sembunyikan navbar
        navbar.classList.add("navbar-hidden");
    } else {
        // Scroll ke atas → tampilkan navbar
        navbar.classList.remove("navbar-hidden");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // cegah scrollTop negatif
});



const carousel = document.querySelector('#carouselHero');
const bsCarousel = new bootstrap.Carousel(carousel, {
    interval: 4000,
    ride: 'carousel'
});



document.addEventListener("DOMContentLoaded", function () {
    const map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.XYZ({
                    url: 'https://{a-d}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
                })
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([120.1101611, -3.3383611]),
            zoom: 15
        })
    });

    // Lokasi titik Desa Ranteballa
    const lokasi = ol.proj.fromLonLat([120.1101611, -3.3383611]);

    // Menambahkan marker ke peta dengan bentuk bundar
    const marker = new ol.Overlay({
        position: lokasi,
        positioning: 'center-center',
        element: document.createElement('div')
    });

    // Mengubah marker menjadi bentuk bundar
    marker.getElement().style.width = '20px';
    marker.getElement().style.height = '20px';
    marker.getElement().style.backgroundColor = '#F16022';  // Warna biru
    marker.getElement().style.borderRadius = '50%';      // Membuat bentuk bundar
    marker.getElement().style.border = '2px solid white'; // Memberi border putih
    marker.getElement().style.cursor = 'pointer';       // Menambahkan cursor pointer saat hover
    map.addOverlay(marker);

    // Membuat pop-up untuk menampilkan informasi
    const popup = new ol.Overlay({
        element: document.createElement('div'),
        autoPan: true,
        autoPanAnimation: { duration: 250 },
        positioning: 'bottom-center'
    });

    popup.getElement().innerHTML = `<div style="background:rgba(17, 82, 88, 0);border-radius: 5px;">
        <h1 class="fw-bold fs-3" style="color:#F16022">Proyek Awak Mas</h1>
        <h5 class="p-0 m-0 fw-bold">14.390 Ha</h5>
        <p class="p-0 m-0">Kecamatan Latimojong,</p>
        <p class="p-0 m-0"> Kab. Luwu,</p>
        <p class="p-0 m-0">Sulawesi Selatan</p>
    </div>`;

    // Menambahkan pop-up
    map.addOverlay(popup);

    // Menambahkan event listener untuk klik pada marker bundar
    marker.getElement().addEventListener('click', function () {
        popup.setPosition(lokasi);
    });
});


function scrollBeritaTerkiniLeft() {
    const container = document.getElementById('scrollRow');
    container.scrollBy({ left: -320, behavior: 'smooth' });
}

function scrollBeritaTerkiniRight() {
    const container = document.getElementById('scrollRow');
    container.scrollBy({ left: 320, behavior: 'smooth' });
}
