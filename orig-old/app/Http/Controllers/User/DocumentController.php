<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Document;
use App\Models\Option;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Auth;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Models\Lang;
use Illuminate\Support\Facades\Http;


class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $document = new Document();
        $document->name = 'New Document';
        $document->slug = Str::slug('New Document') . Str::random(5);
        $document->user_id = Auth::User()->id;
        $document->data = $request->data;
        $document->save();

        return redirect()->route('user.file.show', $document->slug);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $user = Auth::User();
        $data = json_decode($user->data);

        if($request->type)
        {
            $current_word = $data->current_word ?? 0;
        }else{
            $current_word = ($data->current_word ?? 0) + ($request->wordCount ?? 0);
        }

        $info = [
            'current_word' => $current_word,
            'wordCount' => $data->wordCount,
            'customerSupport' => $data->customerSupport
        ];

        $user->data = $info;
        $user->save();

        if($request->fileId)
        {
            $document = Document::findOrFail($request->fileId);
            $document->data = $request->data;
            $document->count = $request->wordCount;
            $document->save();

            return redirect()->back();

        }else{
            $document = new Document();
            $document->user_id = Auth::User()->id;
            $document->name = 'New Document';
            $document->slug = Str::slug('New Document') . Str::random(5);
            $document->data = $request->data;
            $document->count = $request->wordCount ?? 0;
            $document->save();

            return redirect()->route('user.file.show', $document->slug);
        }



    }


    public function favorite(Request $request)
    {
        $document = Document::findOrFail($request->id);

        if($document->is_favourite == 0)
        {
            $document->is_favourite = 1;
        }else{
            $document->is_favourite = 0;
        }
        $document->save();

        return redirect()->back();
    }


    public function rename(Request $request,$id)
    {
        $document = Document::findOrFail($id);
        $document->name = $request->name;
        $document->save();

        return redirect()->back();
    }

    public function generator(Request $request)
    {

        ini_set('max_execution_time', 180);

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer '.env('OPENAI_API_KEY')
        ])->post('https://api.openai.com/v1/completions', [
            'model' => 'text-davinci-003',
            'prompt' => $request->prompt,
            'max_tokens' => $request->max_tokens,
            'temperature' => $request->temperature
        ]);

        return $response;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $document = Document::where('slug',$slug)->first();
        if(!$document)
        {
            return abort(404);
        }

        $settings = json_decode(Option::where('key', 'site_settings')->first()->value);
        $langs = Lang::where('status', 'approved')->get();

        return Inertia::render('User/DocumentShow',[
            'document' => $document,
            'openAi_api_key' => env('OPENAI_API_KEY'),
            'logo' => $settings->site_logo,
            'langs' => $langs
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Document::findOrFail($id)->delete();

        return redirect()->back();
    }
}
