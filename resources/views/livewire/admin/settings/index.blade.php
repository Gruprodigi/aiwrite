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
            <h2 class="h4">{{ __('Site Settings') }}</h2>
            <p class="mb-0">{{ __('Here you can create a new page for your website.') }}</p>
        </div>
        <div class="btn-toolbar mb-2 mb-md-0">

        </div>
    </div>
    <div>
        <div class="col-lg-12">
            <div class="card card-body border-0 shadow mb-4" x-data="{ isUploading: false, progress: 0 }">
                <h2 class="h5 mb-4">{{ __('Site Settings') }}</h2>
                <form wire:submit.prevent="update">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div
                            x-on:livewire-upload-start="isUploading = true"
                            x-on:livewire-upload-finish="isUploading = false"
                            x-on:livewire-upload-error="isUploading = false"
                            x-on:livewire-upload-progress="progress = $event.detail.progress">
                                <label for="name" class="w-full">{{ __('Site Logo') }} <span class="custom-percentage" x-show="isUploading" x-text="'(' +progress + '%)'"></span></label>
                                <input class="form-control @error('site_logo') error @enderror" id="site_logo" type="file" placeholder="Enter Name" wire:model.lazy="site_logo">
                                @error('site_logo') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div
                            x-on:livewire-upload-start="isUploading = true"
                            x-on:livewire-upload-finish="isUploading = false"
                            x-on:livewire-upload-error="isUploading = false"
                            x-on:livewire-upload-progress="progress = $event.detail.progress">
                                <label for="name" class="w-full">{{ __('Site Favicon') }} <span class="custom-percentage" x-show="isUploading" x-text="'(' +progress + '%)'"></span></label>
                                <input class="form-control @error('site_favicon') error @enderror" id="site_favicon" type="file" placeholder="Enter Name" wire:model.lazy="site_favicon">
                                @error('site_favicon') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="copyright">{{ __('Copyright') }}</label>
                                <input class="form-control @error('copyright') error @enderror" id="copyright" type="text" placeholder="Copyright © 2022. All Rights Reserved." wire:model.lazy="copyright">
                                @error('copyright') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="currency">{{ __('Currency Symbol') }}</label>
                                <input class="form-control @error('currency') error @enderror" id="currency" type="text" placeholder="$" wire:model.lazy="currency">
                                @error('currency') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                    </div>
                    <h2 class="h5 mt-5 mb-4">{{ __('Explore All Case') }}</h2>
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <div>
                                <label for="case_title">{{ __('Title') }}</label>
                                <input class="form-control @error('case_title') error @enderror" id="case_title" type="text" placeholder="Explore All Use Cases" wire:model.lazy="case_title">
                                @error('case_title') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-12 mb-3">
                            <div>
                                <label for="case_description">{{ __('Description') }}</label>
                                <textarea wire:model.lazy="case_description" id="case_description" cols="30" rows="5" class="form-control " spellcheck="false"></textarea>
                                @error('case_description') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                    </div>
                    <h2 class="h5 mt-5 mb-4">{{ __('How It Works') }}</h2>
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <div>
                                <label for="title">{{ __('Title') }}</label>
                                <input class="form-control @error('how_it_works_title') error @enderror" id="how_it_works_title" type="text" placeholder="How It Works" wire:model.lazy="how_it_works_title">
                                @error('how_it_works_title') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                    </div>
                    <h2 class="h5 mt-5 mb-4">{{ __('Brand Section') }}</h2>
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <div>
                                <label for="brand_title">{{ __('Brand Title') }}</label>
                                <input class="form-control @error('brand_title') error @enderror" id="brand_title" type="text" placeholder="Trusted by 1,000,000+ marketing teams, agencies and freelancers. 10,000+ 5-star ratings.
                                " wire:model.lazy="brand_title">
                                @error('brand_title') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                    </div>
                    <h2 class="h5 mt-5 mb-4">{{ __('Pricing Plan') }}</h2>
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <div>
                                <label for="plan_title">{{ __('Plan Title') }}</label>
                                <input class="form-control @error('plan_title') error @enderror" id="plan_title" type="text" placeholder="Pricing Plans" wire:model.lazy="plan_title">
                                @error('plan_title') <span class="error">{{ $message }}</span> @enderror
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
