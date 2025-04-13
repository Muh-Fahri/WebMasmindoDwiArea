<div id="navbar" style="z-index: 1000;"
    class="fixed top-0 w-full z-50 bg-white shadow transition-all ease-in-out duration-700">
    <div class="w-100 bg-atas-nav py-2" style="background-color: #E8C56B;">
        <div class="container d-flex justify-content-between">
            <a class="navbar-brand" href="{{ route('user.home') }}"><img style="width: 8em"
                    src="{{ asset('logo/logo-mda-white.png') }}" alt=""></a>
            <ul class="text-white navbar-nav fw-bolder d-flex flex-row align-items-center">
                <li class="nav-item mx-3">
                    <a class="nav-link d-flex align-items-center text-white" style="gap:5px" href="#">
                        <p class="mb-0">Karier</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path
                                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                        </svg>
                    </a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link d-flex align-items-center text-white" style="gap:5px"
                        href="{{ route('user.kontak') }}">
                        <p class="mb-0">Kontak</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="container">
        <nav style="height: 10vh" class="navbar navbar-expand-lg">
            <div class="row">
                <div class="col">
                    <div class="container">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse bg-bawah" id="navbarNav">
                            <ul class="menu-navbar fw-bold navbar-nav mx-auto">
                                <li class="nav-item">
                                    <a class="nav-link {{ Request::is('/') ? 'active' : '' }}"
                                        href="{{ route('user.home') }}">Beranda</a>

                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link {{ Request::is('user/portofolio') ? 'active' : '' }} "
                                        href="{{ route('user.portofolio') }}">Portofolio Kami</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link {{ Request::is('user/media') ? 'active' : '' }}"
                                        href="{{ route('user.media') }}">Media</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle
                                        {{ Request::is('user/sekilas', 'user/visiMisiNilai', 'user/manajemen') ? 'active' : '' }}"
                                        href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Tentang Kami
                                    </a>
                                    <ul class="dropdown-menu border-0"
                                        style="background-color:rgba(255, 255, 255, 0.514)">
                                        <li><a class="dropdown-item {{ Request::is('user/sekilas') ? 'active-bg' : '' }} fw-bold"
                                                style="color: #B6812C" href="{{ route('user.sekilas') }}">Sekilas
                                                Perusahaan</a></li>
                                        <li><a class="dropdown-item {{ Request::is('user/manajemen') ? 'active-bg' : '' }} fw-bold"
                                                style="color: #B6812C"
                                                href="{{ route('user.manajemen') }}">Manajemen</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle
                                        {{ Request::is('user/kebijakanPerusahaan', 'user/lingkungan', 'user/sosial') ? 'active' : '' }}"
                                        href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Masmindo
                                    </a>
                                    <ul class="dropdown-menu border-0"
                                        style="background-color:rgba(255, 255, 255, 0.514)">
                                        <li><a class="dropdown-item {{ Request::is('user/kebijakanPerusahaan') ? 'active-bg' : '' }} fw-bold"
                                                style="color: #B6812C" href="{{ route('user.kebijakan') }}">Kebijakan
                                                Keberlanjutan</a></li>
                                        <li><a class="dropdown-item {{ Request::is('user/lingkungan') ? 'active-bg' : '' }} fw-bold"
                                                style="color: #B6812C"
                                                href="{{ route('user.lingkungan') }}">Lingkungan</a></li>
                                        <li><a class="dropdown-item {{ Request::is('user/sosial') ? 'active-bg' : '' }} fw-bold"
                                                style="color: #B6812C" href="{{ route('user.sosial') }}">Sosial</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>

</div>
