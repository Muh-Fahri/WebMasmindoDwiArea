@extends('layout')
@include('Admin.navSide')
@section('konten')


@if (session('success'))
<section>
    <div class="modal fade" id="gagalModal" tabindex="-1" aria-labelledby="gagalModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-success" id="gagalModalLabel">Success <i class="bi bi-exclamation-triangle"></i></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style="border: none">
                    {{ session('success') }}
                </div>
                <div class="modal-footer">
                    <button type="button" style="width: 30%" class="btn btn-secondary rounded-5" data-bs-dismiss="modal">Tutup</button>
                </div>
            </div>
        </div>
    </div>

</section>

@endif


<section>
    <div class="content-wrapper">
        <div class="container p-5">
            <div class="card">
                <div class="card-body">
                    <form action="{{ route('admin.submitImage') }}" method="POST" enctype="multipart/form-data">
                       @csrf
                       <label for="">Input Image Carousel</label>
                       <input type="file" placeholder="Input image" name="image_proyek" class="form-control">
                       <button class="btn mt-5 btn-primary">submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
