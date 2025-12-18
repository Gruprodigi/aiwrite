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
                    <li class="breadcrumb-item active" aria-current="page">{{ __('Site Settings') }}</li>
                </ol>
            </nav>
            <h2 class="h4">{{ __('Hero Section') }}</h2>
            <p class="mb-0">{{ __('Here you can create a new page for your website.') }}</p>
        </div>
        <div class="btn-toolbar mb-2 mb-md-0">

        </div>
    </div>
    <div>
        <div class="col-lg-12">
            <div class="card card-body border-0 shadow mb-4" x-data="{ isUploading: false, progress: 0 }"
            x-on:livewire-upload-start="isUploading = true"
            x-on:livewire-upload-finish="isUploading = false"
            x-on:livewire-upload-error="isUploading = false"
            x-on:livewire-upload-progress="progress = $event.detail.progress">
                <h2 class="h5 mb-4">{{ __('Hero Section') }}</h2>
                <form wire:submit.prevent="update">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="name">{{ __('Hero Title') }}</label>
                                <input class="form-control @error('hero_title') error @enderror" id="hero_title" type="text" placeholder="Enter Name" wire:model.lazy="hero_title">
                                @error('hero_title') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="name" class="w-full">{{ __('Hero Image') }} <span class="custom-percentage" x-show="isUploading" x-text="'(' +progress + '%)'"></span></label>
                                <input class="form-control @error('hero_img') error @enderror" id="hero_img" type="file" placeholder="Enter Name" wire:model.lazy="hero_img">
                                @error('hero_img') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-12 mb-3">
                            <div>
                                <label for="description">{{ __('Description') }}</label>
                                <textarea wire:model.lazy="description" id="description" cols="30" rows="5" class="form-control @error('description') error @enderror"></textarea>
                                @error('description') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="button_title">{{ __('Button Title') }}</label>
                                <input class="form-control @error('button_title') error @enderror" id="button_title" type="text" placeholder="Enter Button Title" wire:model.lazy="button_title">
                                @error('button_title') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="button_url">{{ __('Button Url') }}</label>
                                <input class="form-control @error('button_url') error @enderror" id="button_url" type="text" wire:model.lazy="button_url">
                                @error('button_url') <span class="error">{{ $message }}</span> @enderror
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
