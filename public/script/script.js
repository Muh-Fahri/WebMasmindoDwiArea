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

function scrollGallery(direction) {
    const gallery = document.getElementById('galleryScroll');
    const scrollAmount = 300;

    if (direction === 'left') {
        gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

const backToTop = document.getElementById("backToTop");
let scrollTimer;

backToTop.style.opacity = 0;

window.addEventListener("scroll", () => {
    backToTop.style.opacity = 0;

    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(() => {
        backToTop.style.opacity = 1;
    }, 300);
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function scrollVideo(direction) {
    const scrollContainer = document.getElementById('videoScroll');
    const scrollAmount = 850;

    if (direction === 'left') {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// // Inisialisasi peta (fokus tengah di Sulawesi Selatan)
// var map = L.map('map').setView([-3.5, 120.2], 7);

// // Tambahkan layer peta
// L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { //ganti dark_all
//     attribution: '&copy; <a href="https://carto.com/">CartoDB</a>',
//     subdomains: 'abcd',
//     maxZoom: 19
// }).addTo(map);

// // Marker-marker lokasi
// var jakarta = L.circleMarker([-6.2000, 106.8167]).addTo(map)
//     .bindPopup('<b>Kantor Pusat Masmindo</b><br>Jakarta');

// var belopa = L.circleMarker([-3.3520, 120.2450]).addTo(map)
//     .bindPopup('<b>Kantor Regional</b><br>Belopa');

// var ranteballa = L.circleMarker([-3.3608, 120.1219]).addTo(map)
//     .bindPopup('<b>Site Office</b><br>Rante Balla');

// var awakmas = L.circleMarker([-3.3630, 120.1110], {
//     color: 'gold',
//     fillColor: '#FFD700',
//     fillOpacity: 0.8,
//     radius: 10
// }).addTo(map).bindPopup('<b>Awak Mas Project</b><br>Lokasi tambang utama');

// // Legenda
// var legend = L.control({ position: 'bottomright' });

// legend.onAdd = function (map) {
//     var div = L.DomUtil.create('div', 'legend');
//     div.innerHTML += "<h4>Awakmas Gold Project</h4>";
//     // div.innerHTML += '<i style="background: black"></i> Kantor Pusat (Jakarta)<br>';
//     // div.innerHTML += '<i style="background: blue"></i> Kantor Regional (Belopa)<br>';
//     // div.innerHTML += '<i style="background: green"></i> Site Office (Rante Balla)<br>';
//     // div.innerHTML += '<i style="background: gold"></i> Awak Mas Project (Tambang)<br>';
//     return div;
// };

// legend.addTo(map);
