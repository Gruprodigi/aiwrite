<?php

namespace App\Http\Livewire\Admin\User;

use Livewire\Component;
use App\Models\User;
use Jantinnerezo\LivewireAlert\LivewireAlert;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;
    use LivewireAlert;

    protected $paginationTheme = 'bootstrap';

    public $status;
    public $checklistId = [];
    public $search;
    public $filter_status;


    public function change_status()
    {
        if($this->status)
        {
            if($this->status == 'delete')
            {
                foreach($this->checklistId as $value)
                {
                    User::find($value)->delete();
                    $this->checklistId = [];
                }
            }elseif($this->status == 'featured')
            {
                foreach($this->checklistId as $value)
                {
                    $user = User::find($value);
                    $user->featured = 1;
                    $user->save();
                    $this->checklistId = [];
                }

                $this->alert('success', 'Successfully Featured!', [
                    'position' => 'top-end',
                    'timer' => 3000,
                    'toast' => true,
                    'timerProgressBar' => true,
                    'text' => '',
                ]);

            }elseif($this->status == 'unfeatured')
            {
                foreach($this->checklistId as $value)
                {
                    $user = User::find($value);
                    $user->featured = 0;
                    $user->save();
                    $this->checklistId = [];
                }

                $this->alert('success', 'Successfully Unfeatured!', [
                    'position' => 'top-end',
                    'timer' => 3000,
                    'toast' => true,
                    'timerProgressBar' => true,
                    'text' => '',
                ]);

            }else{
                foreach($this->checklistId as $value)
                {
                    $page = User::find($value);
                    $page->status = $this->status;
                    $page->save();
                    $this->checklistId = [];
                }
            }
        }
    }

    public function render()
    {

        $searchTerm = '%'.$this->search.'%';
        if($this->filter_status)
        {
            if($this->filter_status == 'all')
            {
                $users = User::where([
                    ['name','like', $searchTerm],
                    ['email','like', $searchTerm],
                ])->latest()->paginate(20);
            }else{
                $users = User::where([
                    ['name','like', $searchTerm],
                    ['email','like', $searchTerm],
                    ['status', $this->filter_status],
                ])->latest()->paginate(20);
            }

        }else{
            $users = User::where([
                ['name','like', $searchTerm],
                ['email','like', $searchTerm],
            ])->latest()->paginate(20);
        }

        return view('livewire.admin.user.index',[
            'users' => $users
        ]);
    }
}
