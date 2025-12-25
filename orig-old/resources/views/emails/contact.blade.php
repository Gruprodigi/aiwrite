<x-mail::message>
# You got a message from {{ $data['name'] }}

## Email: {{ $data['email'] }}

## Message: <br>
{{ $data['message'] }}

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
