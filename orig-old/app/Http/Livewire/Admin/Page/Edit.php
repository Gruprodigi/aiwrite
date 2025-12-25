<?php

namespace App\Http\Livewire\Admin\Page;

use App\Models\Term;
use Livewire\Component;
use App\Models\Termmeta;
use Auth;
use Illuminate\Support\Str;
use DB;

class Edit extends Component
{
    public $name, $short_content, $description, $status, $page; 

    public function mount($id)
    {
        $page = Term::find($id);
        $data = json_decode($page->pagemeta->value ?? '');
        $this->page = $page;
        $this->fill([
            'name' => $page->name,
            'short_content' => $data->short_content ?? '',
            'description' => $data->description ?? ''
        ]);
        $this->status = $page->status;
    }

    public function update($id)
    {
        $this->validate([
            'name' => 'required',
            'short_content' => 'required',
            'description' => 'required'
        ]);

        DB::beginTransaction();

        try {
           
            $page = Term::find($id);
            $page->name = $this->name ?? $page->name;
            $page->slug = Str::slug($this->name ?? $page->name);
            $page->status = $this->status ?? $page->status;
            $page->save();

            $pagemeta = Termmeta::where('term_id',$page->id)->first();
            $data = json_decode($pagemeta->value);

            $data = [
                'short_content' => $this->short_content ?? $data->short_content,
                'description' => $this->description ?? $data->description
            ];

            
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
        return view('livewire.admin.page.edit');
    }
}
