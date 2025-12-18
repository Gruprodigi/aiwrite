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
                    <li class="breadcrumb-item active" aria-current="page">{{ __('System Settings') }}</li>
                </ol>
            </nav>
            <h2 class="h4">{{ __('System Settings') }}</h2>
            <p class="mb-0">{{ __('Here you can create a new page for your website.') }}</p>
        </div>
        <div class="btn-toolbar mb-2 mb-md-0">

        </div>
    </div>
    <div>
        <div class="col-lg-12">
            <div class="card card-body border-0 shadow mb-4">
                <h2 class="h5 mb-4">{{ __('OPENAI API KEY') }}</h2>
                <form wire:submit.prevent="update">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="openai_api_key">{{ __('OpenAi Api Key') }}</label>
                                <input class="form-control @error('openai_api_key') error @enderror" id="openai_api_key" type="text" placeholder="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" wire:model.lazy="openai_api_key">
                                @error('openai_api_key') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="app_name">{{ __('APP_NAME') }}</label>
                                <input class="form-control @error('app_name') error @enderror" id="app_name" type="text" placeholder="" wire:model.lazy="app_name">
                                @error('app_name') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                    </div>
                    <h2 class="h5 mt-5 mb-4">{{ __('MAIL CONFIGURATION') }}</h2>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="MAIL_MAILER">{{ __('MAIL_MAILER') }}</label>
                                <input class="form-control @error('MAIL_MAILER') error @enderror" id="MAIL_MAILER" placeholder="smtp" type="text" wire:model.lazy="MAIL_MAILER">
                                @error('MAIL_MAILER') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="MAIL_HOST">{{ __('MAIL_HOST') }}</label>
                                <input class="form-control @error('MAIL_HOST') error @enderror" id="MAIL_HOST" type="text" placeholder="smtp.mailtrap.io" wire:model.lazy="MAIL_HOST">
                                @error('MAIL_HOST') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-12 mb-3">
                            <div>
                                <label for="MAIL_PORT">{{ __('MAIL_PORT') }}</label>
                                <input class="form-control @error('MAIL_PORT') error @enderror" id="MAIL_PORT" type="text" placeholder="2525" wire:model.lazy="MAIL_PORT">
                                @error('MAIL_PORT') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="MAIL_USERNAME">{{ __('MAIL_USERNAME') }}</label>
                                <input class="form-control @error('MAIL_USERNAME') error @enderror" id="MAIL_USERNAME" type="text"  wire:model.lazy="MAIL_USERNAME">
                                @error('MAIL_USERNAME') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="MAIL_PASSWORD">{{ __('MAIL_PASSWORD') }}</label>
                                <input class="form-control @error('MAIL_PASSWORD') error @enderror" id="MAIL_PASSWORD" type="text"  wire:model.lazy="MAIL_PASSWORD">
                                @error('MAIL_PASSWORD') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="MAIL_ENCRYPTION">{{ __('MAIL_ENCRYPTION') }}</label>
                                <input class="form-control @error('MAIL_ENCRYPTION') error @enderror" id="MAIL_ENCRYPTION" type="text" placeholder="tls" wire:model.lazy="MAIL_ENCRYPTION">
                                @error('MAIL_ENCRYPTION') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="MAIL_FROM_ADDRESS">{{ __('MAIL_FROM_ADDRESS') }}</label>
                                <input class="form-control @error('MAIL_FROM_ADDRESS') error @enderror" id="MAIL_FROM_ADDRESS" type="text" wire:model.lazy="MAIL_FROM_ADDRESS">
                                @error('MAIL_FROM_ADDRESS') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="MAIL_FROM_NAME">{{ __('MAIL_FROM_NAME') }}</label>
                                <input class="form-control @error('MAIL_FROM_NAME') error @enderror" id="MAIL_FROM_NAME" type="text" placeholder="{{ env('APP_NAME') }}" wire:model.lazy="MAIL_FROM_NAME">
                                @error('MAIL_FROM_NAME') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="MAIL_TO">{{ __('MAIL_TO') }}</label>
                                <input class="form-control @error('MAIL_TO') error @enderror" id="MAIL_TO" type="text" wire:model.lazy="MAIL_TO">
                                @error('MAIL_TO') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="f-right">
                            <button type="submit" class="btn btn-gray-800 mt-2 animate-up-2">{{ __('Submit') }}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
