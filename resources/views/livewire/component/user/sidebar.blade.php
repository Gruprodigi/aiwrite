<div class="dashboard-sidebar-area">
    @php
        $data = json_decode($usermeta);
    @endphp
    <div class="dashboard-cover-img">
        <img class="img-fluid" src="{{ Storage::url('cover_image/'.$data->cover_image) }}" alt="">
    </div>
    <div class="dashboad-profile-img">
        @if (!$data->profile)
        <img class="img-fluid" src="{{ asset('frontend/img/profile.png') }}" alt="">
        @else   
        <img class="img-fluid" src="{{ Storage::url('profile/'.$data->profile ?? '') }}" alt="">
        @endif
    </div>
    <div class="dashboad-username">
        <h3>{{ Auth::User()->first_name }} {{ Auth::User()->last_name }}</h3>
        <p>{{ Auth::User()->username }}</p>
    </div>
    <div class="dashboard-menu-bar">
        <nav>
            <ul>
                <li class="{{ Request::is('user/dashboard') ? 'active' : '' }}"><a href="{{ url('user/dashboard') }}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-6-2h5V9.157l-6-5.454-6 5.454V19h5v-6h2v6z"/></svg> {{ __('Dashboard') }}</a></li>
                <li class="{{ Request::is('user/orders') ? 'active' : '' }}"><a href="{{ url('user/orders') }}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 10h5l-6 6-6-6h5V3h2v7zm-9 9h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7z"/></svg> {{ __('Downloads') }}</a></li>
                <li class="{{ Request::is('user/refunds') ? 'active' : '' }}"><a href="{{ url('user/refunds') }}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-6.383-2.302l-.244-.209.902-1.902a8 8 0 1 0-2.27-5.837l-.005.25h2.5l-2.706 5.716A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2zm1 4v2h2.5v2H10a.5.5 0 0 0-.09.992L10 11h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2H14a.5.5 0 0 0 .09-.992L14 13h-4a2.5 2.5 0 1 1 0-5h1V6h2z"/></svg> {{ __('Refund Request') }}</a></li>
                <li class="{{ Request::is('user/settings') ? 'active' : '' }}"><a href="{{ url('user/settings') }}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg> {{ __('Edit Profile') }}</a></li>
                <li><a href="{{ url('logout') }}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z"/></svg> {{ __('Logout') }}</a></li>
            </ul>
        </nav>
    </div>
</div>