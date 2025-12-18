<?php

namespace App\Http\Livewire\Admin\Seo;

use App\Models\Term;
use Livewire\Component;
use App\Models\Termmeta;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Jantinnerezo\LivewireAlert\LivewireAlert;

class Edit extends Component
{
    public $site_title, $meta_tag, $twitter_title, $meta_description, $status = 'approved',$page_type = 'home', $seo;

    public $pages;

    use LivewireAlert;

    public function mount($id)
    {
        $seo = Term::find($id);
        $data = json_decode($seo->seometa->value ?? '');
        $this->seo = $seo;
        $this->fill([
            'site_title' => $seo->name,
            'meta_tag' => $data->meta_tag ?? '',
            'twitter_title' => $data->twitter_title ?? '',
            'meta_description' => $data->meta_description ?? ''
        ]);

        $this->page_type = $seo->slug;

        $this->status = $seo->status;

        $this->pages = [
            'home' => 'Home',
            'pricing' => 'Pricing',
            'blogs' => 'Blogs',
            'contact' => 'Contact'
        ];
    }

    public function update($id)
    {
        $this->validate([
            'site_title' => 'required',
            'meta_tag' => 'required',
            'twitter_title' => 'required',
            'meta_description' => 'required',
            'status' => 'required',
            'page_type' => 'required'
        ]);

        $page = Term::where('slug', $this->page_type)->first();

        if($page)
        {
            if($page->id != $this->seo->id)
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
        }


        // DB::beginTransaction();

        // try {

            $seo = Term::find($id);
            $seo->name = $this->site_title ?? $seo->name;
            $seo->slug = $this->page_type ?? $seo->slug;
            $seo->status = $this->status ?? $seo->status;
            $seo->save();

            $seometa = Termmeta::where('term_id',$seo->id)->first();
            $data = json_decode($seometa->value);

            $data = [
                'meta_tag' => $this->meta_tag ?? $data->meta_tag,
                'twitter_title' => $this->twitter_title ?? $data->twitter_title,
                'meta_description' => $this->meta_description ?? $data->meta_description
            ];


            $seometa->value = json_encode($data);
            $seometa->save();

        //     DB::commit();
        // } catch (\Exception $e) {
        //     DB::rollback();
        // }


        return redirect()->route('admin.seo.index');


    }

    public function render()
    {
        return view('livewire.admin.seo.edit');
    }
}
