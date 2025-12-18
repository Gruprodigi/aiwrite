<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\AccountController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\DocumentController as UserDocumentController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Livewire\Admin\Seo\Edit as SeoEdit;
use App\Http\Livewire\Admin\Blog\Edit as BlogEdit;
use App\Http\Livewire\Admin\Page\Edit as EditPage;
use App\Http\Livewire\Admin\Seo\Index as SeoIndex;
use App\Http\Livewire\Admin\User\Edit as EditUser;
use App\Http\Livewire\Admin\Blog\Index as BlogIndex;
use App\Http\Livewire\Admin\Page\Index as PageIndex;
use App\Http\Livewire\Admin\Seo\Create as SeoCreate;
use App\Http\Livewire\Admin\User\Index as UserIndex;
use App\Http\Livewire\Admin\Blog\Create as BlogCreate;
use App\Http\Livewire\Admin\Page\Create as PageCreate;
use App\Http\Livewire\Admin\User\Create as UserCreate;
use App\Http\Livewire\Admin\Getway\Edit as GatewayEdit;
use App\Http\Livewire\Admin\Getway\Index as GatewayIndex;
use App\Http\Livewire\Admin\Settings\Hero as HeroSettings;
use App\Http\Livewire\Admin\Getway\Create as GatewayCreate;
use App\Http\Livewire\Admin\Settings\Index as SettingsIndex;
use App\Http\Livewire\Admin\Lang\Create as LangCreate;
use App\Http\Livewire\Admin\Lang\Customize as LangCustomize;
use App\Http\Livewire\Admin\Lang\Edit as LangEdit;
use App\Http\Livewire\Admin\Lang\Index as LangIndex;
use App\Http\Livewire\Admin\Menu\Builder as MenuBuilder;
use App\Http\Livewire\Admin\Menu\Create as MenuCreate;
use App\Http\Livewire\Admin\Menu\Edit as MenuEdit;
use App\Http\Livewire\Admin\Menu\Index as MenuIndex;
use App\Http\Livewire\Admin\Settings\Footer as FooterSettings;
use App\Http\Livewire\Admin\Transcation\Index as TranscationIndex;
use App\Http\Livewire\Admin\Settings\Profile\Index as SettingsProfileIndex;
use App\Http\Controllers\Admin\MenuOrderController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PricingController;
use App\Http\Controllers\User\BillingController;
use App\Http\Controllers\User\PlanController;
use App\Http\Livewire\Admin\Dashboard;
use App\Http\Livewire\Admin\Plan\Create as PlanCreate;
use App\Http\Livewire\Admin\Plan\Edit as PlanEdit;
use App\Http\Livewire\Admin\Plan\Index as PlanIndex;
use App\Http\Livewire\Admin\Settings\Usecase\Create as UseCaseCreate;
use App\Http\Livewire\Admin\Settings\Usecase\Edit as UseCaseEdit;
use App\Http\Livewire\Admin\Settings\Usecase\Index as UseCaseIndex;
use App\Http\Livewire\Admin\Settings\Brand\Create as BrandCreate;
use App\Http\Livewire\Admin\Settings\Brand\Edit as BrandEdit;
use App\Http\Livewire\Admin\Settings\Brand\Index as BrandIndex;
use App\Http\Livewire\Admin\Settings\Howitworks\Index as HowItWoksIndex;
use App\Http\Livewire\Admin\Settings\Level\Index as LevelIndex;
use App\Http\Livewire\Admin\Settings\System\Index as SystemIndex;
use App\Http\Livewire\Auth\Login;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('admin/menu/order',[MenuOrderController::class, 'order'])->name('admin.menu.order');
/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/
Route::group(['as'=>'admin.','prefix'=>'admin','middleware'=>['auth', 'admin']],function () {
    Route::get('dashboard', Dashboard::class)->name('dashboard');

    Route::get('transaction',TranscationIndex::class)->name('transaction.index');
    Route::get('user',UserIndex::class)->name('user.index');
    Route::get('profile/settings',SettingsProfileIndex::class)->name('profile.settings');
    Route::get('settings',SettingsIndex::class)->name('settings.index');
    Route::get('settings/hero',HeroSettings::class)->name('settings.hero');
    Route::get('settings/footer', FooterSettings::class)->name('settings.footer');
    Route::get('seo',SeoIndex::class)->name('seo.index');
    Route::get('page',PageIndex::class)->name('page.index');
    Route::get('page/create',PageCreate::class)->name('page.create');
    Route::get('page/edit/{id}',EditPage::class)->name('page.edit');
    Route::get('blog',BlogIndex::class)->name('blog.index');
    Route::get('blog/edit/{id}',BlogEdit::class)->name('blog.edit');
    Route::get('user/create',UserCreate::class)->name('user.create');
    Route::get('user/edit/{id}',EditUser::class)->name('user.edit');
    Route::get('blog/create',BlogCreate::class)->name('blog.create');


    // Menu Settings
    Route::get('menu',MenuIndex::class)->name('menu.index');
    Route::get('menu/create',MenuCreate::class)->name('menu.create');
    Route::get('menu/edit/{id}',MenuEdit::class)->name('menu.edit');
    Route::get('menu/builder/{id}',MenuBuilder::class)->name('menu.builder');

    // getway Routes
    Route::get('gateway',GatewayIndex::class)->name('gateway.index');
    Route::get('gateway/create',GatewayCreate::class)->name('gateway.create');
    Route::get('gateway/edit/{id}',GatewayEdit::class)->name('gateway.edit');

    // Seo Routes
    Route::get('seo',SeoIndex::class)->name('seo.index');
    Route::get('seo/create',SeoCreate::class)->name('seo.create');
    Route::get('seo/edit/{id}',SeoEdit::class)->name('seo.edit');

    // Languages Routes
    Route::get('lang',LangIndex::class)->name('lang.index');
    Route::get('lang/create',LangCreate::class)->name('lang.create');
    Route::get('lang/edit/{id}',LangEdit::class)->name('lang.edit');
    Route::get('lang/cutomize/{id}',LangCustomize::class)->name('lang.customize');

    // Plan Routes
    Route::get('plan/index', PlanIndex::class)->name('plan.index');
    Route::get('plan/create', PlanCreate::class)->name('plan.create');
    Route::get('plan/edit/{id}', PlanEdit::class)->name('plan.edit');

    // UseCase Routes
    Route::get('settings/usecase', UseCaseIndex::class)->name('usecase.index');
    Route::get('settings/usecase/create', UseCaseCreate::class)->name('usecase.create');
    Route::get('settings/usecase/{id}/edit', UseCaseEdit::class)->name('usecase.edit');


    // Brand Routes
    Route::get('settings/brand', BrandIndex::class)->name('brand.index');
    Route::get('settings/brand/create', BrandCreate::class)->name('brand.create');
    Route::get('settings/brand/{id}/edit', BrandEdit::class)->name('brand.edit');

    // HowItWorks Routes
    Route::get('settings/howitwoks', HowItWoksIndex::class)->name('howitwoks.index');

    // Level Routes
    Route::get('settings/level', LevelIndex::class)->name('level.index');

    // System Settings Route
    Route::get('system/settings', SystemIndex::class)->name('system.index');

});

Route::get('/', [WelcomeController::class, 'index']);
Route::get('/page/{slug}', [WelcomeController::class, 'page']);
Route::get('/blogs', [BlogController::class, 'index']);
Route::get('/blog/{slug}', [BlogController::class, 'show']);
Route::get('/about', [WelcomeController::class, 'index']);
Route::get('/pricing', [PricingController::class, 'index']);
Route::get('contact', [ContactController::class, 'index']);
Route::post('contact', [ContactController::class, 'store']);
Route::get('admin/login', Login::class)->name('admin.login');
Route::get('logout', function(){
    Auth::logout();
    return redirect()->back();
});

// User Panel Routes
Route::group(['as'=>'user.', 'prefix' => 'user', 'middleware' => 'auth'], function(){
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('file/{slug}', [UserDocumentController::class, 'show'])->name('file.show');

    Route::post('file/create', [UserDocumentController::class, 'store']);
    Route::get('document/create', [UserDocumentController::class, 'create']);
    Route::post('file/favorite/{id}', [UserDocumentController::class, 'favorite']);
    Route::put('rename/{id}/file', [UserDocumentController::class, 'rename']);
    Route::delete('file/delete/{id}', [UserDocumentController::class, 'destroy']);
    Route::get('account', [AccountController::class, 'index']);
    Route::post('account', [AccountController::class, 'store']);
    Route::get('plan', [PlanController::class, 'index']);
    Route::get('plan/check', [PlanController::class, 'check']);
    Route::post('ai/generate', [UserDocumentController::class, 'generator']);
    Route::get('payment/history', [BillingController::class, 'index'])->name('payment.history');
    Route::get('select/payment/{id}', [BillingController::class, 'payment']);
    Route::get('payment/success', [BillingController::class, 'success']);
    Route::get('payment/failed', [BillingController::class, 'failed']);
    Route::get('payment/cancel', [BillingController::class, 'cancel']);
    Route::get('dropdown', function(){
        return Inertia::render('User/Dropdown');
    });
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
