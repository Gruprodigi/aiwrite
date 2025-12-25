
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
                    <li class="breadcrumb-item active" aria-current="page">{{ __('Menuitems List') }}</li>
                </ol>
            </nav>
            <h2 class="h4">{{ __('Menuitems List') }}</h2>
            <p class="mb-0">{{ __('Show All Menuitems List') }}</p>
        </div>
        <div class="btn-toolbar mb-2 mb-md-0">
            <a href="javascript:void(0)" wire:click="type('0','store')" class="btn btn-sm btn-gray-800 d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#menuitem_create">
                <svg class="icon icon-xs me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                {{ __('New Menuitem') }}
            </a>
        </div>
    </div>
    <div class="card card-body shadow border-0 table-wrapper table-responsive">
        <form wire:submit.prevent="change_status">
            <div class="dd">
                <ol class="dd-list">
                    @foreach ($submenus as $item)
                    <li class="dd-item" data-id="{{ $item->id }}">
                        <div class="dd-handle builder-lists">
                            <div class="builder-name">
                                <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18 11V8l4 4-4 4v-3h-5v5h3l-4 4-4-4h3v-5H6v3l-4-4 4-4v3h5V6H8l4-4 4 4h-3v5z"/></svg> {{ $item->name }}</h2>
                            </div>
                        </div>
                        <div class="builder-action">
                            <a href="#" wire:click="type('{{ $item->id }}','update')" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#menuitem_create">Edit</a>
                            <a href="#" class="btn btn-danger" wire:click="delete('{{ $item->id }}')">{{ __('Delete') }}</a>
                        </div>
                        @if (!$item->childs->isEmpty())
                        <ol class="dd-list">
                            @foreach ($item->childs as $child)
                            <li class="dd-item" data-id="{{ $child->id }}">
                                <div class="dd-handle builder-lists">
                                    <div class="builder-name">
                                        <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18 11V8l4 4-4 4v-3h-5v5h3l-4 4-4-4h3v-5H6v3l-4-4 4-4v3h5V6H8l4-4 4 4h-3v5z"/></svg> {{ $child->name }}</h2>
                                    </div>
                                    <div class="builder-action">
                                        <a href="#" wire:click="type('{{ $child->id }}','update')" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#menuitem_create">Edit</a>
                                        <a href="#" class="btn btn-danger" wire:click="delete('{{ $child->id }}')">{{ __('Delete') }}</a>
                                    </div>
                                </div>
                            </li>
                            @endforeach
                        </ol>
                        @endif
                    </li>
                    @endforeach
                </ol>
            </div>
        </form>
    </div>
    <div wire:ignore.self class="modal fade" id="menuitem_create" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{ __('Create MenuItem') }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form wire:submit.prevent="store">
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="name" class="col-form-label">{{ __('Name') }}:</label>
                            <input type="text" class="form-control" id="name" wire:model="name">
                            @error('name') <span class="error">{{ $message }}</span> @enderror
                        </div>
                        <div class="mb-3">
                            <label for="url" class="col-form-label">{{ __('Url:') }}</label>
                            <input type="text" class="form-control" id="url" wire:model="url">
                            @error('url') <span class="error">{{ $message }}</span> @enderror
                        </div>
                        <div class="mb-3">
                            <label for="target" class="col-form-label">{{ __('Target:') }}</label>
                            <select wire:model="target" id="target" class="form-control">
                                <option value="_self">{{ __('_Self') }}</option>
                                <option value="_blank">{{ __('_Blank') }}</option>
                            </select>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ __('Close') }}</button>
                        <button type="submit" class="btn btn-primary">{{ __('Save & Update') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<link rel="stylesheet" href="{{ asset('css/jquery.nestable.min.css') }}">

<script src="{{ asset('assets/js/jquery.nestable.min.js') }}"></script>
<script src="{{ asset('assets/js/script.js') }}"></script>

<script>
    "use strict";
    $('.dd').nestable({ maxDepth: 2 });
    $('.dd').on('change', function (e) {
        $.post('{{ route('admin.menu.order',$menu) }}', {
            order: JSON.stringify($('.dd').nestable('serialize')),
            _token: '{{ csrf_token() }}'
        }, function (data) {

        });
    });
</script>
