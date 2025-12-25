<div>
    <div class="py-4"></div>
    <div class="row">
        <div class="col-12 col-xl-12">
            <div class="card card-body border-0 shadow mb-4">
                <h2 class="h5 mb-4">{{ __('General information') }}</h2>
                <form wire:submit.prevent="save" action="#" method="POST">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="name">{{ __('Name') }}</label>
                                <input wire:model="name" class="form-control" id="name" type="text"
                                    placeholder="Enter your name">
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="email">{{ __('Email') }}</label>
                                <input wire:model="email" class="form-control" id="email" type="email"
                                    placeholder="example@gmail.com">
                            </div>
                            @error('email') <div class="invalid-feedback">{{ $message }}</div> @enderror
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="current_password">{{ __('Current Password') }}</label>
                                <input wire:model="current_password" class="form-control" id="current_password" type="password"
                                    placeholder="Enter your Current Password">
                            </div>
                            @error('current_password') <div class="invalid-feedback">{{ $message }}</div> @enderror
                        </div>
                        <div class="col-md-6 mb-3">
                            <div>
                                <label for="password">{{ __('Password') }}</label>
                                <input wire:model="password" class="form-control" id="password" type="password"
                                    placeholder="Enter Your Password">
                            </div>
                            @error('password') <div class="invalid-feedback">{{ $message }}</div> @enderror
                        </div>
                        <div class="col-md-12 mb-3">
                            <div>
                                <label for="password_confirmation">{{ __('Confirm Password') }}</label>
                                <input wire:model="password_confirmation" class="form-control" id="password_confirmation" type="password"
                                    placeholder="Enter Your Confirm Password">
                            </div>
                            @error('password_confirmation') <div class="invalid-feedback">{{ $message }}</div> @enderror
                        </div>
                    </div>
                    <div class="mt-3 f-right">
                        <button type="submit" class="btn btn-gray-800 mt-2 animate-up-2">{{ __('Save All') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
