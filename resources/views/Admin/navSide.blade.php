<!-- Sidebar -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="#" class="brand-link">
        <span class="brand-text font-weight-light">
            <h5 class="fw-bold text-center">Admin Dashboard</h5>
        </span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="{{ asset('img/depositphotos_144724361-stock-illustration-builder-construction-avatar-icon.jpg') }}"
                    class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <a href="{{ route('admin.account') }}"
                    class="d-block  {{ Request::is('admin/account') ? 'text-secondary' : '' }}">Admin</a>
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                <li class="nav-item menu-open">
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.dashboard') }}" class="nav-link">
                                <i class="bi bi-ui-radios-grid"></i>
                                <p>Dashboard Admin</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-bs-toggle="collapse"
                                data-bs-target="#portofolioMenu" aria-expanded="false">
                                <i class="bi bi-collection-fill"></i>
                                <p>Portofolio Page <i class="bi bi-chevron-down float-end"></i></i></p>
                            </a>
                            <ul id="portofolioMenu" class="collapse list-unstyled">
                                <li class="nav-item">
                                    <a href="{{ route('admin.galeri') }}" class="nav-link">
                                        <p>Galeri</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="{{ route('admin.video') }}" class="nav-link">

                                        <p>Video</p>
                                    </a>
                                </li>
                            </ul>
                        </li>


                        <li class="nav-item">
                            <a href="#" class="nav-link" data-bs-toggle="collapse" data-bs-target="#masmindoMenu">
                                <i class="bi bi-collection-fill"></i>
                                <i class="bi bi-chevron-down float-end"></i>
                                <p>Masmindo Page</p>
                            </a>
                            <ul id="masmindoMenu" class="collapse list-unstyled">
                                <li class="nav-item">
                                    <a href="{{ route('admin.program') }}" class="nav-link">
                                        <p>Program</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.media') }}" class="nav-link">
                                <i class="bi bi-newspaper"></i>
                                <p>Media</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="bi bi-person-fill"></i>
                                <p>Manajemen</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.kontak') }}"
                                class="nav-link d-flex justify-content-between align-items-center">
                                <div>
                                    <i class="bi bi-envelope-fill"></i>
                                    <span>Pesan</span>
                                </div>
                                <span id="badge-pesan" class="badge bg-danger d-none"></span>
                            </a>
                        </li>

                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</aside>
