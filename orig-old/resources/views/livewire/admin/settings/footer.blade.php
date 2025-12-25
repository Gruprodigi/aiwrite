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
            <h2 class="h4">{{ __('Footer Section') }}</h2>
            <p class="mb-0">{{ __('Here you can create a new page for your website.') }}</p>
        </div>
        <div class="btn-toolbar mb-2 mb-md-0">
            
        </div>
    </div>
    <div>
        <div class="col-lg-12">
            <div class="card card-body border-0 shadow mb-4">
                <h2 class="h5 mb-4">{{ __('Footer Section') }}</h2>
                <form wire:submit.prevent="update">
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <div>
                                <label for="newsletter_title">{{ __('Newsletter Title') }}</label>
                                <input class="form-control @error('newsletter_title') error @enderror" id="newsletter_title" type="text" wire:model.lazy="newsletter_title">
                                @error('newsletter_title') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-12 mb-3">
                            <div>
                                <label for="newsletter_des">{{ __('Newsletter Description') }}</label>
                                <textarea wire:model.lazy="newsletter_des" id="newsletter_des" cols="30" rows="5" class="form-control @error('newsletter_des') error @enderror"></textarea>
                                @error('newsletter_des') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-12 mb-3">
                            <div>
                                <label for="address">{{ __('Website Address') }}</label>
                                <textarea wire:model.lazy="address" id="address" cols="30" rows="5" class="form-control @error('address') error @enderror"></textarea>
                                @error('address') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="col-md-12 mb-3">
                            <div>
                                <label for="copyright">{{ __('Copyright') }}</label>
                                <input class="form-control @error('copyright') error @enderror" id="copyright" type="text" wire:model.lazy="copyright">
                                @error('copyright') <span class="error">{{ $message }}</span> @enderror
                            </div>
                        </div>

                        <div class="form-group field_wrapper">
                            <div class="row mt-5 mb-3">
                                <div class="col-lg-12">
                                    <h4>{{ __('Social Links') }}</h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-5">
                                    <label for="">{{ __('Iconify Icon') }}</label> <br>
                                </div>
                                <div class="col-md-6">
                                    <label for="">{{ __('Link') }}</label><br>
                                </div>
                                <div class="col-md-1">
                                    <a href="javascript:" class="text-xxs mr-2 btn btn-primary mb-0 btn-sm  text-xxs" wire:click.prevent="add({{$i}})">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path></svg>
                                    </a>
                                </div>
                            </div>
                            @foreach($inputs as $key => $value)
                            <div class="row">
                                <div class="col-md-5">
                                    <br>
                                    <input type="text" required="" class="form-control" wire:model="icon.{{ $value }}" value="">
                                </div>
                                <div class="col-md-6">
                                    <br>
                                    <input type="text" required="" class="form-control" wire:model="link.{{ $value }}">
                                </div>
                                <div class="col-md-1">
                                    <a href="javascript:void(0);" wire:click.prevent="remove({{$key}})" class="remove_button text-xxs mr-2 btn btn-danger mb-0 btn-sm mt-4 text-xxs" title="Add field">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                                        </svg>
                                    </a>
                                </div>
                            <div>
                            </div>
                        </div>
                        @endforeach
                        </div>
                    </div>
                    <div class="mt-5">
                        <div class="f-right">
                            <button type="submit" class="btn btn-gray-800 mt-2 animate-up-2">{{ __('Update') }}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script src="{{ asset('admin/js/script.js') }}"></script>