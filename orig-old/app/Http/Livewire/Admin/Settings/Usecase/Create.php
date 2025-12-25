<?php

namespace App\Http\Livewire\Admin\Settings\Usecase;

use App\Models\Term;
use App\Models\Termmeta;
use Livewire\Component;
use Livewire\WithFileUploads;
use DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class Create extends Component
{

    public $title, $description, $status, $icon;

    use WithFileUploads;

    public function store()
    {
        $this->validate([
            'title' => 'required',
            'description' => 'required',
            'icon' => 'required',
        ]);

        DB::beginTransaction();

        try {

            $page = new Term();
            $page->user_id = Auth::User()->id;
            $page->name = $this->title;
            $page->slug = Str::slug($this->title);
            $page->status = $this->status ?? 'approved';
            $page->type = 'useCase';
            $page->save();

            $data = [
                'description' => $this->description,
                'icon' => $this->icon
            ];

            $pagemeta = new Termmeta();
            $pagemeta->term_id = $page->id;
            $pagemeta->key = 'useCaseMeta';
            $pagemeta->value = json_encode($data);
            $pagemeta->save();

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
        }

        return redirect()->route('admin.usecase.index');

    }

    public function render()
    {
        return view('livewire.admin.settings.usecase.create');
    }
}
