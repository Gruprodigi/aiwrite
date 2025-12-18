<footer class="p-5 mb-4">
    <div class="container">
        <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="col-12 col-md-4 mb-4 mb-md-0 text-lg-center">
                <!-- List -->
                <p class="mb-0 text-center">© {{ date('Y') }}-<span class="current-year"></span> <a
                        class="text-primary fw-normal" href="{{ url('/') }}" target="_blank">{{ env('APP_NAME') }}</a></p>
            </div>
        </div>
    </div>
</footer>