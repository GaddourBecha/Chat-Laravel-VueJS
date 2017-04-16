<?php


use App\Events\Posted;


Route::get('/', function () {
    return view('welcome');
});


Route::get('/chat', function () {
    return view('chat');
})->middleware('auth');
Auth::routes();

Route::get('/messages',function (){
    return App\Message::with('user')->get();

})->middleware('auth');

Route::post('/messages',function (){
    $user= Auth::user();
    $message=$user->messages()->create([
       'message'=> request()->get('message')
]);

    event(new Posted($message,$user));
});

Route::get('/home', 'HomeController@index');
