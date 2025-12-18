<!DOCTYPE html>
<html lang="en">
<head>

    <title>{{ __('Dashboard') }}</title>
    @php
        $site_info = json_decode(App\Models\Option::where('key', 'site_settings')->first()->value);
    @endphp

    <link rel="icon" type="image/x-icon" href="{{ Storage::url($site_info->site_favicon) }}">
    <!-- Apex Charts -->
    <link type="text/css" href="{{ asset('vendor/apexcharts/apexcharts.css') }}" rel="stylesheet">

    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
    <!-- Datepicker -->
    <link rel="stylesheet" href="{{ asset('css/datepicker.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/datepicker-bs4.min.css') }}">
    <script defer src="{{ asset('js/alpine.min.js') }}"></script>
    <!-- Fontawesome -->
    <link type="text/css" href="{{ asset('vendor/fontawesome-free/css/all.min.css') }}" rel="stylesheet">

    <!-- Sweet Alert -->
    <link type="text/css" href="{{ asset('vendor/sweetalert2/sweetalert2.min.css') }}" rel="stylesheet">

    <!-- Notyf -->
    <link type="text/css" href="{{ asset('vendor/notyf/notyf.min.css') }}" rel="stylesheet">

    <!-- Volt CSS -->
    <link type="text/css" href="{{ asset('css/volt.css?v=1.0.0') }}" rel="stylesheet">

    @livewireStyles

    @livewireScripts

    <script src="{{ asset('admin/js/jquery-3.6.0.min.js') }}"></script>
    <!-- Core -->
    <script src="{{ asset('admin/js/popper.min.js') }}"></script>
    <script src="{{ asset('admin/js/bootstrap.min.js') }}"></script>

    <!-- Vendor JS -->
    <script src="{{ asset('assets/js/on-screen.umd.min.js') }}"></script>

    <!-- Slider -->
    <script src="{{ asset('assets/js/nouislider.min.js') }}"></script>

    <!-- Smooth scroll -->
    <script src="{{ asset('assets/js/smooth-scroll.polyfills.min.js') }}"></script>

    <!-- Apex Charts -->
    <script src="{{ asset('vendor/apexcharts/apexcharts.min.js') }}"></script>

    <!-- Charts -->
    <script src="{{ asset('assets/js/chartist.min.js') }}"></script>
    <script src="{{ asset('assets/js/chartist-plugin-tooltip.min.js') }}"></script>

    <!-- Datepicker -->
    <script src="{{ asset('admin/js/datepicker.min.js') }}"></script>

    <!-- Sweet Alerts 2 -->
    <script src="{{ asset('assets/js/sweetalert2.all.min.js') }}"></script>

    <!-- Moment JS -->
    <script src="{{ asset('admin/js/moment.min.js') }}"></script>

    <!-- Notyf -->
    <script src="{{ asset('vendor/notyf/notyf.min.js') }}"></script>

    <!-- Simplebar -->
    <script src="{{ asset('assets/js/simplebar.min.js') }}"></script>

    <!-- Github buttons -->
    <script async defer src="{{ asset('admin/js/buttons.js') }}"></script>

    <!-- Volt JS -->
    <script src="{{ asset('assets/js/volt.js') }}"></script>

</head>

<body>

    {{ $slot }}

</body>

</html>
