<?php

namespace App\Http\Livewire\Admin\Seo;

use DB;
use Auth;
use App\Models\Term;
use Livewire\Component;
use App\Models\Termmeta;
use Illuminate\Support\Str;
use Livewire\WithFileUploads;
use Jantinnerezo\LivewireAlert\LivewireAlert;

class Create extends Component
{
    public $site_title, $meta_tag, $twitter_title, $meta_description, $status = 'approved',$page_type = 'home';

    public $pages;

    public function mount()
    {
        $this->pages = [
            'home' => 'Home',
            'pricing' => 'Pricing',
            'blogs' => 'Blogs',
            'contact' => 'Contact'
        ];
    }

    use WithFileUploads;
    use LivewireAlert;



    public function store()
    {


        $this->validate([
            'site_title' => 'required',
            'meta_tag' => 'required',
            'twitter_title' => 'required',
            'meta_description' => 'required'
        ]);

        $page = Term::where('slug', $this->page_type)->first();

        if($page)
        {

            $this->alert('error',  "It's Already Exists!", [
                'position' => 'top-end',
                'timer' => 3000,
                'toast' => true,
                'timerProgressBar' => true,
                'text' => '',
            ]);
            return back();
        }

        DB::beginTransaction();

        try {

            $page = new Term();
            $page->user_id = Auth::User()->id;
            $page->name = $this->site_title;
            $page->slug = $this->page_type;
            $page->status = $this->status ?? 'approved';
            $page->type = 'seo';
            $page->save();

            $data = [
                'meta_tag' => json_encode($this->meta_tag),
                'twitter_title' => $this->twitter_title,
                'meta_description' => $this->meta_description
            ];

            $pagemeta = new Termmeta();
            $pagemeta->term_id = $page->id;
            $pagemeta->key = 'seometa';
            $pagemeta->value = json_encode($data);
            $pagemeta->save();

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
        }



        return redirect()->route('admin.seo.index');

    }

    public function render()
    {
        return view('livewire.admin.seo.create');
    }
}
