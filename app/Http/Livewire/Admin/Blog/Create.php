<?php

namespace App\Http\Livewire\Admin\Blog;

use Livewire\Component;
use App\Models\Term;
use App\Models\Termmeta;
use DB;
use Auth;
use Illuminate\Support\Str;
use Livewire\WithFileUploads;

class Create extends Component
{
    public $name, $short_content, $description, $status, $image;

    use WithFileUploads;

    public function store()
    {
        $this->validate([
            'name' => 'required',
            'short_content' => 'required',
            'description' => 'required',
            'image' => 'required|image'
        ]);

        DB::beginTransaction();

        try {

            $this->image->store('blog','public');

            $page = new Term();
            $page->user_id = Auth::User()->id;
            $page->name = $this->name;
            $page->slug = Str::slug($this->name);
            $page->status = $this->status ?? 'approved';
            $page->type = 'blog';
            $page->save();

            $data = [
                'short_content' => $this->short_content,
                'description' => $this->description,
                'preview' => $this->image->hashName()
            ];

            $pagemeta = new Termmeta();
            $pagemeta->term_id = $page->id;
            $pagemeta->key = 'blogmeta';
            $pagemeta->value = json_encode($data);
            $pagemeta->save();

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
        }

        return redirect()->route('admin.blog.index');

    }

    public function render()
    {
        return view('livewire.admin.blog.create');
    }
}
