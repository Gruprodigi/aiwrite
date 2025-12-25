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
                    <li class="breadcrumb-item active" aria-current="page">{{ __('transcations List') }}</li>
                </ol>
            </nav>
            <h2 class="h4">{{ __('Transcations List') }}</h2>
            <p class="mb-0">{{ __('Show All Transcations List') }}</p>
        </div>

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
                    <input type="text" class="form-control" wire:model="search" placeholder="Search transcationss" />
                </div>
                <select class="form-select fmxw-200 d-none d-md-inline" aria-label="Message select example 2" wire:model="filter_status">
                    <option value="all" selected="selected">{{ __('All') }}</option>
                    <option value="approved">{{ __('Paid') }}</option>
                    <option value="pending">{{ __('Unpaid') }}</option>
                </select>
            </div>
            <div class="col-3 col-lg-4 d-flex justify-content-end">

            </div>
        </div>
    </div>
    <div class="card card-body shadow border-0 table-wrapper table-responsive">
        <form wire:submit.prevent="change_status">

            <table class="table user-table table-hover align-items-center">
                <thead>
                    <tr>
                        <th class="border-bottom">

                        </th>
                        <th class="border-bottom">{{ __('Trx Id') }}</th>
                        <th class="border-bottom">{{ __('Payment Method') }}</th>
                        <th class="border-bottom">{{ __('Amount') }}</th>
                        <th class="border-bottom">{{ __('Date Created') }}</th>
                        <th class="border-bottom">{{ __('Status') }}</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($transcations as $transcation)
                    <tr>
                        <td>
                            <div class="form-check dashboard-check">
                                <input class="form-check-input" type="checkbox" wire:model="checklistId" value="{{ $transcation->id }}" />
                            </div>
                        </td>
                        <td>
                            <span class="fw-bold">{{ $transcation->trx_id }}</span>
                        </td>
                        <td>
                            <span class="fw-bold">{{ $transcation->payment_method }}</span>
                        </td>
                        <td>
                            <span class="fw-bold">{{ $transcation->amount }}</span>
                        </td>
                        <td><span class="fw-normal">{{ $transcation->created_at->isoFormat('ll') }}</span></td>
                        <td>
                            @if ($transcation->status == 'approved')
                            <span class="fw-normal text-success">
                                {{ __('Paid') }}
                            </span>
                            @else
                            <span class="fw-normal text-danger">
                                {{ __('Unpaid') }}
                            </span>
                            @endif
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </form>
        <div class="card-footer px-3 border-0 d-flex flex-column flex-lg-row align-items-center justify-content-end">
            {{ $transcations->links() }}
        </div>
    </div>
</div>


<script src="{{ asset('assets/js/script.js') }}"></script>
