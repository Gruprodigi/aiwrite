<x-layouts.base>

    {{-- Nav --}}
    @include('layouts.nav')
    {{-- SideNav --}}
    @include('layouts.sidenav')
    <main class="content">
        {{-- TopBar --}}
        @include('layouts.topbar')
        {{ $slot }}
        {{-- Footer --}}
        @include('layouts.footer')
    </main>

    <script src="{{ asset('frontend/js/sweetalert2@11.js') }}"></script>
  
    <x-livewire-alert::scripts />

</x-layouts.base>