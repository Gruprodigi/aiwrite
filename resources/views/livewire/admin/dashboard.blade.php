<div>
    <div class="pt-4"></div>
    <div class="row">
        <div class="col-12 mb-4">
            <div class="card border-0 shadow bg-fac0b9">
                <div class="card-header d-sm-flex flex-row align-items-center flex-0">
                    <div class="d-block mb-3 mb-sm-0">
                        <div class="fs-5 fw-normal mb-2">{{ __('Total Revenue') }}</div>
                        <h2 class="fs-3 fw-extrabold">{{ $currency }}{{ $total_revenue }}</h2>
                    </div>
                </div>
                <div class="card-body p-2">
                    <div class="ct-chart-sales-value ct-double-octave ct-series-g"></div>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-xl-4 mb-4">
            <div class="card border-0 shadow">
                <div class="card-body">
                    <div class="row d-block d-xl-flex align-items-center">
                        <div class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                            <div class="icon-shape icon-shape-success rounded me-4 me-sm-0">
                                <svg class="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                            </div>
                            <div class="d-sm-none">
                                <h2 class="h5">{{ __('Monthly Customers') }}</h2>
                                <h3 class="fw-extrabold mb-1">{{ $monthly_customers }}</h3>
                            </div>
                        </div>
                        <div class="col-12 col-xl-7 px-xl-0">
                            <div class="d-none d-sm-block">
                                <h2 class="h5">{{ __('Monthly Customers') }}</h2>
                                <h3 class="fw-extrabold mb-1">{{ $monthly_customers }}</h3>
                            </div>
                            <small class="d-flex align-items-center">{{ Carbon\Carbon::now()->subMonth()->isoFormat('MMM') }} 01 - {{ Carbon\Carbon::now()->isoFormat('MMM') }} 01</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-xl-4 mb-4">
            <div class="card border-0 shadow">
                <div class="card-body">
                    <div class="row d-block d-xl-flex align-items-center">
                        <div class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                            <div class="icon-shape icon-shape-secondary rounded me-4 me-sm-0">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                                  </svg>
                            </div>
                            <div class="d-sm-none">
                                <h2 class="fw-extrabold h5">{{ __('Monthly Revenue') }}</h2>
                                <h3 class="mb-1">{{ $currency }} {{ $revenue_monthly }}</h3>
                            </div>
                        </div>
                        <div class="col-12 col-xl-7 px-xl-0">
                            <div class="d-none d-sm-block">
                                <h2 class="h5">{{ __('Monthly Revenue') }}</h2>
                                <h3 class="fw-extrabold mb-2">{{ $currency }}{{ $revenue_monthly }}</h3>
                            </div>
                            <small class="d-flex align-items-center">{{ Carbon\Carbon::now()->subMonth()->isoFormat('MMM') }} 01 - {{ Carbon\Carbon::now()->isoFormat('MMM') }} 01</small>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-xl-4 mb-4">
            <div class="card border-0 shadow">
                <div class="card-body">
                    <div class="row d-block d-xl-flex align-items-center">
                        <div class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                            <div class="icon-shape icon-shape-tertiary rounded me-4 me-sm-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
                                  </svg>
                            </div>
                            <div class="d-sm-none">
                                <h2 class="fw-extrabold h5"> {{ __('Monthly Transaction') }}</h2>
                                <h3 class="mb-1">{{ $monthly_transaction }}</h3>
                            </div>
                        </div>
                        <div class="col-12 col-xl-7 px-xl-0">
                            <div class="d-none d-sm-block">
                                <h2 class="h5"> {{ __('Monthly Transaction') }}</h2>
                                <h3 class="fw-extrabold mb-2">{{ $monthly_transaction }}</h3>
                            </div>
                            <small class="d-flex align-items-center">{{ Carbon\Carbon::now()->subMonth()->isoFormat('MMM') }} 01 - {{ Carbon\Carbon::now()->isoFormat('MMM') }} 01</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 col-xl-12">
            <div class="row">
                <div class="col-8 mb-4">
                    <div class="card border-0 shadow">
                        <div class="card-header">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h2 class="fs-5 fw-bold mb-0">{{ __('Latest Transactions') }}</h2>
                                </div>
                                <div class="col text-end">
                                    <a href="{{ url('admin/transaction') }}" class="btn btn-sm btn-primary">{{ __('See all') }}</a>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table user-table table-hover align-items-center">
                                <thead>
                                    <tr>
                                        <th class="border-bottom">{{ __('Trx Id') }}</th>
                                        <th class="border-bottom">{{ __('Payment Method') }}</th>
                                        <th class="border-bottom">{{ __('Amount') }}</th>
                                        <th class="border-bottom">{{ __('Status') }}</th>
                                        <th class="border-bottom">{{ __('Created At') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($all_transactions as $transaction)
                                    <tr>
                                        <td>
                                            <span class="fw-bold">{{ $transaction->trx_id }}</span>
                                        </td>
                                        <td>
                                            <span class="fw-bold">{{ $transaction->payment_method }}</span>
                                        </td>
                                        <td>
                                            <span class="fw-bold">{{ $transaction->amount }}</span>
                                        </td>
                                        <td>
                                            @if ($transaction->status == 'approved')
                                            <span class="fw-normal text-success">
                                                {{ __('Paid') }}
                                            </span>
                                            @elseif($transaction->status == 'pending')
                                            <span class="fw-normal text-danger">
                                                {{ __('Unpaid') }}
                                            </span>
                                            @endif
                                        </td>
                                        <td>
                                            <span class="fw-bold">{{ $transaction->created_at->toDateString() }}</span>
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xxl-4 mb-4">
                    <div class="card border-0 shadow">
                        <div class="card-header border-bottom"><h2 class="fs-5 fw-bold mb-0">Recent Customers</h2></div>
                        <div class="card-body py-0">
                            <ul class="list-group list-group-flush">
                                @foreach ($all_customers as $customer)
                                <li class="list-group-item bg-transparent border-bottom py-3 px-0">
                                    <div class="row align-items-center">

                                        <div class="col-auto">
                                            <h4 class="fs-6 text-dark mb-0">{{ $customer->name }}</h4>
                                            <span class="small">{{ $customer->email }}</span>
                                        </div>
                                        <div class="col text-end"><span class="fs-6 fw-bolder text-dark">{{ $customer->created_at->isoFormat('ll') }}</span></div>
                                    </div>
                                </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<script>
    "use strict";
    if (d.querySelector('.ct-chart-sales-value')) {
    //Chart 5
    var monthly_sales = $('#monthly_sales').val();
    new Chartist.Line('.ct-chart-sales-value', {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'Octobor', 'November', 'December'],
        series: [
            {{ $monthly_revenue }}
        ]
    }, {
        low: 0,
        showArea: true,
        fullWidth: true,
        plugins: [
            Chartist.plugins.tooltip()
        ],
        axisX: {
            // On the x-axis start means top and end means bottom
            position: 'end',
            showGrid: true
        },
        axisY: {
            // On the y-axis start means left and end means right
            showGrid: false,
            showLabel: false,
            labelInterpolationFnc: function(value) {
                return '$' + (value / 1) + 'k';
            }
        }
    });
    }
</script>
