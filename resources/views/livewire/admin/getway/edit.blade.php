<div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div class="d-block mb-4 mb-md-0">
            <nav aria-label="breadcrumb" class="d-none d-md-inline-block">
                <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
                    <li class="breadcrumb-item">
                        <a href="{{ route('admin.dashboard') }}">
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
                    <li class="breadcrumb-item active" aria-current="page">{{ __('Edit Gateway') }}</li>
                </ol>
            </nav>
            <h2 class="h4">{{ __('Edit Gateway') }}</h2>
            <p class="mb-0">{{ __('Here you can Edit a Gateway for your website.') }}</p>
        </div>
        <div class="btn-toolbar mb-2 mb-md-0">
            <a href="{{ route('admin.gateway.index') }}" class="btn btn-sm btn-gray-800 d-inline-flex align-items-center p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                  </svg>
                  <span class="ml-2">{{ __('Manage Gateway') }}</span>
            </a>
        </div>
    </div>
    <div>
        <div class="col-lg-12">
            <div class="card card-body border-0 shadow mb-4" x-data="{ isUploading: false, progress: 0 }"
            x-on:livewire-upload-start="isUploading = true"
            x-on:livewire-upload-finish="isUploading = false"
            x-on:livewire-upload-error="isUploading = false"
            x-on:livewire-upload-progress="progress = $event.detail.progress">
                <h2 class="h5 mb-4">{{ __('Edit Gateway') }}</h2>
                <form wire:submit.prevent="update()">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label class="form-label">{{ __('Gateway Name') }}</label>
                                <input type="text" wire:model="name" class="form-control" placeholder="{{ __('Enter Gateway Name') }}">
                                @error('name')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label class="form-label w-full">{{ __('Gateway Logo') }} <span class="custom-percentage" x-show="isUploading" x-text="'(' +progress + '%)'"></span></label>
                                <input type="file" wire:model="logo" class="form-control">

                                @error('logo')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror

                            </div>
                        </div>
                        <div class="col-md-12 mb-3">
                            <div class="form-group">
                                <label class="form-label">{{ __('Currency Name') }}</label>
                                <input type="text" wire:model="currency_name" class="form-control">
                                @error('currency_name')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                        </div>
                        @php
                            $data = json_decode($getway->data);
                        @endphp
                        @if ($data)
                        @foreach ($data as $key=>$item)
                        @if($key != 'PAYPAL_MODE')
                            <div class="col-md-12 mb-3">
                                <div class="form-group">
                                    <label class="form-label">{{ $key }}</label>
                                    <input type="text" wire:model="data.{{ $key }}" class="form-control">
                                    @error('data.'.$key)
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                            @endif
                        @endforeach
                        @endif
                        <div class="col-md-12 mb-3">
                            <div>
                                <label for="status">{{ __('Select Status') }}</label>
                                <select wire:model="status" id="status" class="form-control">
                                    <option value="approved">{{ __('Active') }}</option>
                                    <option value="pending">{{ __('InActive') }}</option>
                                </select>
                                @error('status') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>

                    </div>
                    <div class="mt-3">
                        <div class="f-right">
                            <button x-show="isUploading" disabled type="submit" class="btn btn-gray-300 mt-2 animate-up-2">{{ __('Submit') }}</button>
                            <button x-show="!isUploading" type="submit" class="btn btn-gray-800 mt-2 animate-up-2">{{ __('Submit') }}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
