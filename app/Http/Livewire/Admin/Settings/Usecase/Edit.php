<?php

namespace App\Http\Livewire\Admin\Settings\Usecase;

use App\Models\Term;
use App\Models\Termmeta;
use Livewire\Component;
use DB;
use Illuminate\Support\Str;

class Edit extends Component
{
    public $title, $description, $useCase, $status, $icon;

    public function mount($id)
    {
        $useCase = Term::find($id);
        $data = json_decode($useCase->useCaseMeta->value ?? '');
        $this->useCase = $useCase;
        $this->fill([
            'title' => $useCase->name,
            'description' => $data->description ?? '',
            'icon' => $data->icon ?? ''
        ]);

        $this->status = $useCase->status;
    }

    public function update($id)
    {
        $this->validate([
            'title' => 'required',
            'description' => 'required',
            'icon' => 'required',
        ]);

        DB::beginTransaction();

        try {

            $useCase = Term::find($id);

            $useCase->name = $this->title ?? $useCase->name;
            $useCase->slug = Str::slug($this->title ?? $useCase->name);
            $useCase->status = $this->status ?? $useCase->status;
            $useCase->save();

            $useCasemeta = Termmeta::where('term_id',$useCase->id)->first();
            $data = json_decode($useCasemeta->value);

            $data = [
                'description' => $this->description ?? $data->description,
                'icon' => $this->icon ?? $data->icon
            ];

            $useCasemeta->value = json_encode($data);
            $useCasemeta->save();

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
        }


        return redirect()->route('admin.usecase.index');
    }

    public function render()
    {
        return view('livewire.admin.settings.usecase.edit');
    }
}
