<div class="container-fluid">
    <div id="navbar" class="fixed-top top-0 w-full z-50 bg-transparent transition-all ease-in-out duration-700">
        <div class="bg-atas-nav" style="background-color: transparent;">
            <div class="container">
                <div class="row">
                    <div class="col-auto">
                        <a class="navbar-brand" href="{{ route('user.home') }}">
                            <img src="{{ asset('logo/LogoMasmindo.webp') }}" alt="Logo Masmindo" class="img-fluid"
                                style="max-height: 80px; max-width: 8rem;">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse bg-bawah" id="navbarNav" data-bs-theme="light">
                    <ul class="menu-navbar fw-bold navbar-nav mx-auto">
                        <li class="nav-item">
                            <a class="nav-link {{ Request::is('/') ? 'active' : '' }}"
                                href="{{ route('user.home') }}">Beranda</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link {{ Request::is('user/portofolio') ? 'active' : '' }}"
                                href="{{ route('user.portofolio') }}">Portofolio Kami</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link {{ Request::is('user/media') ? 'active' : '' }}"
                                href="{{ route('user.media') }}">Media</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link {{ Request::is('user/sekilas') ? 'active' : '' }}"
                                href="{{ route('user.sekilas') }}">Tentang
                                Kami</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle
                            {{ Request::is('user/kebijakanPerusahaan', 'user/lingkungan', 'user/sosial') ? 'active' : '' }}"
                                href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Masmindo
                            </a>
                            <ul class="dropdown-menu border-0"
                                style="background-color:rgba(255, 255, 255, 0.9); padding: 10px;">
                                <li><a class="dropdown-item {{ Request::is('user/kebijakanPerusahaan') ? 'active-bg' : '' }} fw-bold"
                                        style="color: #B6812C" href="{{ route('user.kebijakan') }}">Kebijakan
                                        Keberlanjutan</a></li>
                                <li><a class="dropdown-item {{ Request::is('user/lingkungan') ? 'active-bg' : '' }} fw-bold"
                                        style="color: #B6812C" href="{{ route('user.lingkungan') }}">Lingkungan</a>
                                </li>
                                <li><a class="dropdown-item {{ Request::is('user/sosial') ? 'active-bg' : '' }} fw-bold"
                                        style="color: #B6812C" href="{{ route('user.sosial') }}">Sosial</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto fw-bold">
                        <li class="nav-item">
                            <a style="color: #FFDF8F"
                                class="nav-link {{ Request::is('user/kontak') ? 'active-bg' : '' }}"
                                href="{{ route('user.kontak') }}">Kontak <i class="fa-solid fa-phone"></i></a>
                        </li>
                        <li class="nav-item">
                            <a style="color: #FFDF8F" class="nav-link" href="#">Karir <i
                                    class="fa-solid fa-user-tie"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>
