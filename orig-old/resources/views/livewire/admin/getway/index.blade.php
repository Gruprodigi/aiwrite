<div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div class="d-block mb-4 mb-md-0">
            <nav aria-label="breadcrumb" class="d-none d-md-inline-block">
                <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
                    <li class="breadcrumb-item">
                        <a href="#">
                            <svg class="icon icon-xxs" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                ></path>
                            </svg>
                        </a>
                    </li>
                    <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}">{{ env('APP_NAME') }}</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ __('Gateway List') }}</li>
                </ol>
            </nav>
            <h2 class="h4">{{ __('Gateway List') }}</h2>
            <p class="mb-0">{{ __('Show All Gateway List') }}</p>
        </div>
    </div>
    <div>
        @if (session()->has('message'))
            <div class="alert alert-danger">
                {{ session('message') }}
            </div>
        @endif
    </div>
    <div class="table-settings mb-4">
        <div class="row justify-content-between align-items-center">
            <div class="col-9 col-lg-8 d-md-flex">
                <div class="input-group me-2 me-lg-3 fmxw-300">
                    <span class="input-group-text">
                        <svg class="icon icon-xs" x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                        </svg>
                    </span>
                    <input type="text" class="form-control" wire:model="search" placeholder="Search Getways" />
                </div>
                <select class="form-select fmxw-200 d-none d-md-inline" aria-label="Message select example 2" wire:model="filter_status">
                    <option value="all" selected="selected">{{ __('All') }}</option>
                    <option value="approved">{{ __('Active') }}</option>
                    <option value="pending">{{ __('Pending') }}</option>
                    <option value="darft">{{ __('Darft') }}</option>
                </select>
            </div>
            <div class="col-3 col-lg-4 d-flex justify-content-end">

            </div>
        </div>
    </div>
    <div class="card card-body shadow border-0 table-wrapper table-responsive">
        <form wire:submit.prevent="change_status">
            <div class="d-flex mb-3">
                <select class="form-select fmxw-200" aria-label="Message select example" wire:model="status">
                    <option selected="selected">{{ __('Select Action') }}</option>
                    <option value="pending">{{ __('Move To Pending') }}</option>
                    <option value="draft">{{ __('Move To Draft') }}</option>
                    <option value="approved">{{ __('Move To Active') }}</option>
                    <option value="delete">{{ __('Delete Permanently') }}</option>
                </select>
                <button type="submit" class="btn btn-sm px-3 btn-secondary ms-3">{{ __('Apply') }}</button>
            </div>
            <table class="table user-table table-hover align-items-center">
                <thead>
                    <tr>
                        <th class="border-bottom"></th>
                        <th class="border-bottom">{{ __('Image') }}</th>
                        <th class="border-bottom">{{ __('Name') }}</th>
                        <th class="border-bottom">{{ __('Rate') }}</th>
                        <th class="border-bottom">{{ __('Charge') }}</th>
                        <th class="border-bottom">{{ __('Status') }}</th>
                        <th class="border-bottom">{{ __('Date Created') }}</th>
                        <th class="border-bottom">{{ __('Action') }}</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($gateways as $getway)
                    <tr>
                        <td>
                            <div class="form-check dashboard-check">
                                <input class="form-check-input" type="checkbox" wire:model="checklistId" value="{{ $getway->id }}" />
                            </div>
                        </td>
                        <td>
                            <img class="gateway-img" src="{{ $getway->logo }}" alt="">
                        </td>
                        <td>
                            {{ $getway->name }}
                        </td>
                        <td>
                            {{ $getway->rate }}
                        </td>
                        <td>
                            {{ $getway->charge }}
                        </td>
                        <td>
                            @if ($getway->status == 'approved')
                            <span class="fw-normal text-success">
                                {{ __('Active') }}
                            </span>
                            @elseif($getway->status  == 'pending')
                            <span class="fw-normal text-danger">
                                {{ __('InActive') }}
                            </span>
                            @elseif($getway->status == 'draft')
                            <span class="fw-normal text-danger">
                                {{ __('Draft') }}
                            </span>
                            @endif
                        </td>
                        <td><span class="fw-normal">{{ $getway->created_at }}</span></td>
                        <td>
                            <a href="{{ route('admin.gateway.edit',$getway->id) }}" class="btn btn-sm btn-primary">{{ __('Edit') }}</a>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </form>
    </div>
</div>


<script src="{{ asset('assets/js/script.js') }}"></script>
