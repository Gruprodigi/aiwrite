<?php

namespace App\Http\Livewire\Admin\Blog;

use Livewire\Component;
use App\Models\Term;
use App\Models\Termmeta;
use DB;
use Illuminate\Support\Str;
use Livewire\WithFileUploads;

class Edit extends Component
{

    public $name, $short_content, $description, $status, $blog, $image;

    use WithFileUploads;

    public function mount($id)
    {
        $blog = Term::find($id);
        $data = json_decode($blog->blogmeta->value ?? '');
        $this->blog = $blog;
        $this->fill([
            'name' => $blog->name,
            'short_content' => $data->short_content ?? '',
            'description' => $data->description ?? ''
        ]);

        $this->status = $blog->status;
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

            $blog = Term::find($id);

            if($this->image)
            {
                $this->image->store('blog','public');

                $image = $this->image->hashName();
            }else{
                $image = json_decode($blog->blogmeta->value)->preview;
            }


            $blog->name = $this->name ?? $blog->name;
            $blog->slug = Str::slug($this->name ?? $blog->name);
            $blog->status = $this->status ?? $blog->status;
            $blog->save();

            $blogmeta = Termmeta::where('term_id',$blog->id)->first();
            $data = json_decode($blogmeta->value);

            $data = [
                'short_content' => $this->short_content ?? $data->short_content,
                'description' => $this->description ?? $data->description,
                'preview' => $image
            ];

            $blogmeta->value = json_encode($data);
            $blogmeta->save();

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
        }


        return redirect()->route('admin.blog.index');


    }

    public function render()
    {
        return view('livewire.admin.blog.edit');
    }
}
