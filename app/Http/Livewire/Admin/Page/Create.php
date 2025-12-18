<?php

namespace App\Http\Livewire\Admin\Page;

use App\Models\Term;
use App\Models\Termmeta;
use Livewire\Component;
use Auth;
use Illuminate\Support\Str;
use DB;


class Create extends Component
{
    public $name, $short_content, $description, $status;

    public function store()
    {
        $this->validate([
            'name' => 'required',
            'short_content' => 'required',
            'description' => 'required'
        ]);

        DB::beginTransaction();

        try {

            $page = new Term();
            $page->user_id = Auth::User()->id;
            $page->name = $this->name;
            $page->slug = Str::slug($this->name);
            $page->status = $this->status ?? 'approved';
            $page->type = 'page';
            $page->save();

            $data = [
                'short_content' => $this->short_content,
                'description' => $this->description
            ];

            $pagemeta = new Termmeta();
            $pagemeta->term_id = $page->id;
            $pagemeta->key = 'pagemeta';
            $pagemeta->value = json_encode($data);
            $pagemeta->save();

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
        }



        return redirect()->route('admin.page.index');

    }



    public function render()
    {
        return view('livewire.admin.page.create');
    }
}
