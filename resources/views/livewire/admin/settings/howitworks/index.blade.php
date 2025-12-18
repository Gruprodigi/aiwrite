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
                    <li class="breadcrumb-item active" aria-current="page">{{ __('How It Works') }}</li>
                </ol>
            </nav>
            <h2 class="h4">{{ __('How It Works') }}</h2>
            <p class="mb-0">{{ __('Here you can create a new page for your website.') }}</p>
        </div>
        <div class="btn-toolbar mb-2 mb-md-0">

        </div>
    </div>
    <div>
        <div class="col-lg-12">
            <div class="card card-body border-0 shadow mb-4" x-data="{ isUploading: false, progress: 0, isUploaded: false, progrs: 0 }">
                <h2 class="h5 mb-4">{{ __('Step One') }}</h2>
                <form wire:submit.prevent="update">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="step1_title">{{ __('Title') }}</label>
                                <input class="form-control @error('step1_title') error @enderror" id="step1_title" type="text" placeholder="Enter Your Title" wire:model.lazy="step1_title">
                                @error('step1_title') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div
                            x-on:livewire-upload-start="isUploading = true"
                            x-on:livewire-upload-finish="isUploading = false"
                            x-on:livewire-upload-error="isUploading = false"
                            x-on:livewire-upload-progress="progress = $event.detail.progress">
                                <label for="step1_image" class="w-full">{{ __('Image') }} <span class="custom-percentage" x-show="isUploading" x-text="'(' +progress + '%)'"></span></label>
                                <input class="form-control @error('step1_image') error @enderror" id="step1_image" type="file" placeholder="Enter Name" wire:model.lazy="step1_image">
                                @error('step1_image') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-12 mb-3">
                            <div>
                                <label for="step1_des">{{ __('Description') }}</label>
                                <textarea wire:model.lazy="step1_des" id="step1_des" cols="30" rows="5" class="form-control " spellcheck="false"></textarea>
                                @error('step1_des') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                    </div>
                    <h2 class="h5 mt-5 mb-4">{{ __('Step Two') }}</h2>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="step2_title">{{ __('Title') }}</label>
                                <input class="form-control @error('step2_title') error @enderror" id="step2_title" type="text" placeholder="Enter Your Title" wire:model.lazy="step2_title">
                                @error('step2_title') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div
                            x-on:livewire-upload-start="isUploaded = true"
                            x-on:livewire-upload-finish="isUploaded = false"
                            x-on:livewire-upload-error="isUploaded = false"
                            x-on:livewire-upload-progress="progrs = $event.detail.progrs">
                                <label for="step2_image" class="w-full">{{ __('Image') }}</label>
                                <input class="form-control @error('step2_image') error @enderror" id="step2_image" type="file" placeholder="Enter Name" wire:model.lazy="step2_image">
                                @error('step2_image') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-12 mb-3">
                            <div>
                                <label for="step2_des">{{ __('Description') }}</label>
                                <textarea wire:model.lazy="step2_des" id="step2_des" cols="30" rows="5" class="form-control " spellcheck="false"></textarea>
                                @error('step2_des') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                    </div>
                    <h2 class="h5 mt-5 mb-4">{{ __('Step Three') }}</h2>
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <div>
                                <label for="step3_title">{{ __('Title') }}</label>
                                <input class="form-control @error('step3_title') error @enderror" id="step3_title" type="text" placeholder="Enter Your Title" wire:model.lazy="step3_title">
                                @error('step3_title') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-12 mb-3">
                            <div>
                                <label for="step3_des">{{ __('Description') }}</label>
                                <textarea wire:model.lazy="step3_des" id="step3_des" cols="30" rows="5" class="form-control " spellcheck="false"></textarea>
                                @error('step3_des') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="f-right">
                            <button x-show="isUploading && isUploaded" disabled type="submit" class="btn btn-gray-300 mt-2 animate-up-2">{{ __('Submit') }}</button>
                            <button x-show="!isUploading && !isUploaded" type="submit" class="btn btn-gray-800 mt-2 animate-up-2">{{ __('Submit') }}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
