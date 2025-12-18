<nav id="sidebarMenu" class="sidebar d-lg-block bg-gray-800 text-white collapse" data-simplebar>
  <div class="sidebar-inner px-2 pt-3">
    <div class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
      <div class="d-flex align-items-center">
        <div class="avatar-lg me-4">
          <img src="/assets/img/team/profile-picture-3.jpg" class="card-img-top rounded-circle border-white"
            alt="Bonnie Green">
        </div>
        <div class="d-block">
          <h2 class="h5 mb-3">{{ __('Hi,') }} {{ Auth::User()->name }}</h2>
          <a href="/login" class="btn btn-secondary btn-sm d-inline-flex align-items-center">
            <svg class="icon icon-xxs me-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
            {{ __('Sign Out') }}
          </a>
        </div>
      </div>
      <div class="collapse-close d-md-none">
        <a href="#sidebarMenu" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu"
          aria-expanded="true" aria-label="Toggle navigation">
          <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
    <ul class="nav flex-column pt-3 pt-md-0">
      <li class="nav-item">
        <a href="{{ route('login') }}" class="d-flex align-items-center justify-content-center mb-3 mt-2">
          <span class="sidebar-icon me-3">
            <img src="{{ '/storage/'. json_decode(App\Models\Option::where('key', 'site_settings')->first()->value)->site_logo }}" height="16" width="20" alt="Volt Logo">
          </span>
        </a>
      </li>
      @if (Auth::user()->user_type == 'admin')
      <li class="nav-item {{ Request::segment(2) == 'dashboard' ? 'active' : '' }}">
        <a href="{{ route('admin.dashboard') }}" class="nav-link">
          <span class="sidebar-icon"> <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg></span></span>
          <span class="sidebar-text">{{ __('Dashboard') }}</span>
        </a>
      </li>
      <li class="menu-header">Plan Management</li>
      <li class="nav-item">
        <span class="nav-link collapsed d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
          data-bs-target="#plan" aria-expanded="true">
          <span>
            <span class="sidebar-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-break-fill" viewBox="0 0 16 16">
                <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V9H2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM2 12h12v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z"/>
              </svg>
            </span>
            <span class="sidebar-text ml-5">{{ __('Manage Plan') }}</span>
          </span>
          <span class="link-arrow"><svg class="icon icon-sm" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg></span>
        </span>
        <div class="multi-level collapse {{ in_array(Request::segment(2), ['plan']) ? 'show' : '' }}" role="list" id="plan" aria-expanded="false">
          <ul class="flex-column nav">
            <li class="nav-item {{ Request::is('admin/plan/create') ? 'active' : '' }}">
              <a href="{{ route('admin.plan.create') }}" class="nav-link">
                <span class="sidebar-text">{{ __('Add New') }}</span>
              </a>
            </li>
            <li class="nav-item {{ Request::is('admin/plan/index') ? 'active' : '' }}">
              <a href="{{ route('admin.plan.index') }}" class="nav-link">
                <span class="sidebar-text">{{ __('Manage Plan') }}</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item {{ Request::segment(2) == 'transaction' ? 'active' : '' }}">
        <a href="{{ route('admin.transaction.index') }}" class="nav-link">
          <span class="sidebar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gender-trans" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1.707L3.5 2.793l.646-.647a.5.5 0 1 1 .708.708l-.647.646.822.822A3.99 3.99 0 0 1 8 3c1.18 0 2.239.51 2.971 1.322L14.293 1H11.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 0 1-3.05-5.814l-.95-.949-.646.647a.5.5 0 1 1-.708-.708l.647-.646L1 1.707V3.5a.5.5 0 0 1-1 0v-3zm5.49 4.856a3 3 0 1 0 5.02 3.288 3 3 0 0 0-5.02-3.288z"/>
            </svg>
          </span></span>
          <span class="sidebar-text ml-5">{{ __('All Transactions') }}</span>
        </a>
      </li>
      <li class="nav-item {{ Request::segment(2) == 'gateway' ? 'active' : '' }}">
        <a href="{{ route('admin.gateway.index') }}" class="nav-link">
          <span class="sidebar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
              <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
            </svg>
          </span></span>
          <span class="sidebar-text ml-5">{{ __('Payment Gateway') }}</span>
        </a>
      </li>
      <li class="menu-header">Page & Blog Management</li>
      <li class="nav-item">
        <span class="nav-link collapsed d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
          data-bs-target="#page" aria-expanded="true">
          <span>
            <span class="sidebar-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-break-fill" viewBox="0 0 16 16">
                <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V9H2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM2 12h12v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z"/>
              </svg>
            </span>
            <span class="sidebar-text ml-5">{{ __('Manage Page') }}</span>
          </span>
          <span class="link-arrow"><svg class="icon icon-sm" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg></span>
        </span>
        <div class="multi-level collapse {{ in_array(Request::segment(2), ['page']) ? 'show' : '' }}" role="list" id="page" aria-expanded="false">
          <ul class="flex-column nav">
            <li class="nav-item {{ Request::is('admin/page/create') ? 'active' : '' }}">
              <a href="{{ route('admin.page.create') }}" class="nav-link">
                <span class="sidebar-text">{{ __('Add New') }}</span>
              </a>
            </li>
            <li class="nav-item {{ Request::is('admin/page') ? 'active' : '' }}">
              <a href="{{ route('admin.page.index') }}" class="nav-link">
                <span class="sidebar-text">{{ __('Manage Page') }}</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <span class="nav-link collapsed d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
          data-bs-target="#blog" aria-expanded="true">
          <span>
            <span class="sidebar-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-break-fill" viewBox="0 0 16 16">
                <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V9H2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM2 12h12v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z"/>
              </svg>
            </span>
            <span class="sidebar-text ml-5">{{ __('Manage Blog') }}</span>
          </span>
          <span class="link-arrow"><svg class="icon icon-sm" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg></span>
        </span>
        <div class="multi-level collapse {{ in_array(Request::segment(2), ['blog']) ? 'show' : '' }}" role="list" id="blog" aria-expanded="false">
          <ul class="flex-column nav">
            <li class="nav-item {{ Request::is('admin/blog/create') ? 'active' : '' }}">
              <a href="{{ route('admin.blog.create') }}" class="nav-link">
                <span class="sidebar-text">{{ __('Add New') }}</span>
              </a>
            </li>
            <li class="nav-item {{ Request::is('admin/blog') ? 'active' : '' }}">
              <a href="{{ route('admin.blog.index') }}" class="nav-link">
                <span class="sidebar-text">{{ __('Manage Blog') }}</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="menu-header">User Management</li>
      <li class="nav-item">
        <span class="nav-link collapsed d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
          data-bs-target="#user" aria-expanded="true">
          <span>
            <span class="sidebar-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
            </span>
            <span class="sidebar-text ml-5">{{ __('Manage User') }}</span>
          </span>
          <span class="link-arrow"><svg class="icon icon-sm" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg></span>
        </span>
        <div class="multi-level collapse {{ in_array(Request::segment(2), ['user']) ? 'show' : '' }}" role="list" id="user" aria-expanded="false">
            <ul class="flex-column nav">
              <li class="nav-item {{ Request::is('admin/user/create') ? 'active' : '' }}">
                <a href="{{ route('admin.user.create') }}" class="nav-link">
                  <span class="sidebar-text">{{ __('Add New') }}</span>
                </a>
              </li>
              <li class="nav-item {{ Request::is('admin/user') ? 'active' : '' }}">
                <a href="{{ route('admin.user.index') }}" class="nav-link">
                  <span class="sidebar-text">{{ __('Manage User') }}</span>
                </a>
              </li>
            </ul>
        </div>
      </li>
      <li class="menu-header">Menu, SEO, Language Management</li>
      <li class="nav-item">
        <span class="nav-link collapsed d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
          data-bs-target="#menu" aria-expanded="true">
          <span>
            <span class="sidebar-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-menu-button-wide-fill" viewBox="0 0 16 16">
                <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0l-.396-.396zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </span>
            <span class="sidebar-text ml-5">{{ __('Manage Menu') }}</span>
          </span>
          <span class="link-arrow"><svg class="icon icon-sm" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg></span>
        </span>
        <div class="multi-level collapse {{ in_array(Request::segment(2), ['menu']) ? 'show' : '' }}" role="list" id="menu" aria-expanded="false">
          <ul class="flex-column nav">
            <li class="nav-item {{ Request::is('admin/menu/create') ? 'active' : '' }}">
              <a href="{{ route('admin.menu.create') }}" class="nav-link">
                <span class="sidebar-text">{{ __('Add New') }}</span>
              </a>
            </li>
            <li class="nav-item {{ Request::is('admin/menu') ? 'active' : '' }}">
              <a href="{{ route('admin.menu.index') }}" class="nav-link">
                <span class="sidebar-text">{{ __('Manage Menu') }}</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <span class="nav-link collapsed d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
          data-bs-target="#lang" aria-expanded="true">
          <span>
            <span class="sidebar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
                  </svg>
            </span>
            <span class="sidebar-text ml-5">{{ __('Manage Language') }}</span>
          </span>
          <span class="link-arrow"><svg class="icon icon-sm" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg></span>
        </span>
        <div class="multi-level collapse {{ in_array(Request::segment(2), ['lang']) ? 'show' : '' }}" role="list" id="lang" aria-expanded="false">
          <ul class="flex-column nav">
            <li class="nav-item {{ Request::is('admin/lang/create') ? 'active' : '' }}">
              <a href="{{ route('admin.lang.create') }}" class="nav-link">
                <span class="sidebar-text">{{ __('Add New') }}</span>
              </a>
            </li>
            <li class="nav-item {{ Request::is('admin/lang') ? 'active' : '' }}">
              <a href="{{ route('admin.lang.index') }}" class="nav-link">
                <span class="sidebar-text">{{ __('Manage Language') }}</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item {{ Request::segment(2) == 'seo' ? 'active' : '' }}">
        <a href="{{ route('admin.seo.index') }}" class="nav-link">
          <span class="sidebar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </span></span>
          <span class="sidebar-text ml-5">{{ __('Manage SEO') }}</span>
        </a>
      </li>
      <li class="menu-header">Website Management</li>
      <li class="nav-item">
        <span class="nav-link collapsed d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
          data-bs-target="#site_settings" aria-expanded="true">
          <span>
            <span class="sidebar-icon">

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
              </svg>
            </span>
            <span class="sidebar-text ml-5">{{ __('Site Settings') }}</span>
          </span>
          <span class="link-arrow"><svg class="icon icon-sm" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg></span>
        </span>
        <div class="multi-level collapse {{ in_array(Request::segment(2), ['settings']) ? 'show' : '' }}" role="list" id="site_settings" aria-expanded="false">
          <ul class="flex-column nav">
            <li class="nav-item {{ Request::is('admin/settings') ? 'active' : '' }}">
              <a href="{{ route('admin.settings.index') }}" class="nav-link">
                <span class="sidebar-text">{{ __('Basic Settings') }}</span>
              </a>
            </li>
            <li class="nav-item {{ Request::is('admin/settings/hero') ? 'active' : '' }}">
              <a href="{{ route('admin.settings.hero') }}" class="nav-link">
                <span class="sidebar-text">{{ __('Hero Section') }}</span>
              </a>
            </li>
            <li class="nav-item {{ Request::is('admin/settings/brand') ? 'active' : '' }}">
                <a href="{{ route('admin.brand.index') }}" class="nav-link">
                  <span class="sidebar-text">{{ __('Manage Brand') }}</span>
                </a>
            </li>
            <li class="nav-item {{ Request::is('admin/settings/usecase') ? 'active' : '' }}">
              <a href="{{ route('admin.usecase.index') }}" class="nav-link">
                <span class="sidebar-text">{{ __('Manage UseCases') }}</span>
              </a>
            </li>
            <li class="nav-item {{ Request::is('admin/settings/howitwoks') ? 'active' : '' }}">
                <a href="{{ route('admin.howitwoks.index') }}" class="nav-link">
                  <span class="sidebar-text">{{ __('How It Works') }}</span>
                </a>
            </li>
            <li class="nav-item {{ Request::is('admin/settings/level') ? 'active' : '' }}">
                <a href="{{ route('admin.level.index') }}" class="nav-link">
                  <span class="sidebar-text">{{ __('Level Up') }}</span>
                </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item {{ Request::segment(2) == 'system' ? 'active' : '' }}">
        <a href="{{ route('admin.system.index') }}" class="nav-link">
          <span class="sidebar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plugin" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 1 2.898 5.673c-.167-.121-.216-.406-.002-.62l1.8-1.8a3.5 3.5 0 0 0 4.572-.328l1.414-1.415a.5.5 0 0 0 0-.707l-.707-.707 1.559-1.563a.5.5 0 1 0-.708-.706l-1.559 1.562-1.414-1.414 1.56-1.562a.5.5 0 1 0-.707-.706l-1.56 1.56-.707-.706a.5.5 0 0 0-.707 0L5.318 5.975a3.5 3.5 0 0 0-.328 4.571l-1.8 1.8c-.58.58-.62 1.6.121 2.137A8 8 0 1 0 0 8a.5.5 0 0 0 1 0Z"/>
              </svg>
          </span></span>
          <span class="sidebar-text ml-5">{{ __('System Settings') }}</span>
        </a>
      </li>
      @endif
    </ul>
  </div>
</nav>

