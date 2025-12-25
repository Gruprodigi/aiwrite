import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ResetPassword from "@/pages/auth/ResetPassword";
import Dashboard from "@/pages/user/Dashboard";
import DocumentEditor from "@/pages/user/DocumentEditor";
import Templates from "@/pages/user/Templates";
import Plans from "@/pages/user/Plans";
import Profile from "@/pages/user/Profile";
import Account from "@/pages/user/Account";
import History from "@/pages/user/History";
import Settings from "@/pages/user/Settings";
import PaymentSuccess from "@/pages/payment/Success";
import PaymentFailed from "@/pages/payment/Failed";
import PaymentSelect from "@/pages/payment/SelectPayment";
import PaymentHistory from "@/pages/payment/PaymentHistory";
import AdminDashboard from "@/pages/admin/Dashboard";
import AnalyticsOverview from "@/pages/admin/analytics/Overview";
import AnalyticsUsers from "@/pages/admin/analytics/Users";
import AnalyticsRevenue from "@/pages/admin/analytics/Revenue";
import AnalyticsContent from "@/pages/admin/analytics/Content";
import UsersList from "@/pages/admin/users/UsersList";
import UserCreate from "@/pages/admin/users/UserCreate";
import UserEdit from "@/pages/admin/users/UserEdit";
import UserView from "@/pages/admin/users/UserView";
import PlansList from "@/pages/admin/plans/PlansList";
import PlanCreate from "@/pages/admin/plans/PlanCreate";
import PlanEdit from "@/pages/admin/plans/PlanEdit";
import AdminPaymentSettings from "@/pages/admin/settings/Payment";
import AdminPaymentHistory from "@/pages/admin/settings/PaymentHistory";
import TransactionsList from "@/pages/admin/transactions/TransactionsList";
import TransactionDetail from "@/pages/admin/transactions/TransactionDetail";
import BlogPostsList from "@/pages/admin/blog/PostsList";
import BlogPostForm from "@/pages/admin/blog/PostForm";
import BlogCategoriesList from "@/pages/admin/blog/CategoriesList";
import BlogTagsList from "@/pages/admin/blog/TagsList";
import PagesList from "@/pages/admin/pages/PagesList";
import PageForm from "@/pages/admin/pages/PageForm";
import MenusList from "@/pages/admin/menus/MenusList";
import MenuBuilder from "@/pages/admin/menus/MenuBuilder";

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-500 mt-2">Em construção...</p>
      <a href="/user/dashboard" className="text-primary hover:underline mt-4 block">Voltar ao Dashboard</a>
    </div>
  </div>
);

function Router() {
  return (
    <Switch>
      <Route path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />
      
      {/* User Routes */}
      <Route path="/user/dashboard" component={Dashboard} />
      <Route path="/user/document/:id" component={DocumentEditor} />
      <Route path="/user/documents" component={() => <PlaceholderPage title="Meus Documentos" />} />
      <Route path="/user/templates" component={Templates} />
      <Route path="/user/profile" component={Profile} />
      <Route path="/user/account" component={Account} />
      <Route path="/user/settings" component={Settings} />
      <Route path="/user/plans" component={Plans} />
      <Route path="/user/history" component={History} />

      {/* Payment Routes */}
      <Route path="/payment/select" component={PaymentSelect} />
      <Route path="/payment/success" component={PaymentSuccess} />
      <Route path="/payment/failed" component={PaymentFailed} />
      <Route path="/payment/history" component={PaymentHistory} />

      {/* Admin Routes */}
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/analytics/overview" component={AnalyticsOverview} />
      <Route path="/admin/analytics/users" component={AnalyticsUsers} />
      <Route path="/admin/analytics/revenue" component={AnalyticsRevenue} />
      <Route path="/admin/analytics/content" component={AnalyticsContent} />
      
      {/* Admin Users Routes */}
      <Route path="/admin/users" component={UsersList} />
      <Route path="/admin/users/create" component={UserCreate} />
      <Route path="/admin/users/:id/edit" component={UserEdit} />
      <Route path="/admin/users/:id" component={UserView} />
      
      {/* Admin Plans Routes */}
      <Route path="/admin/plans" component={PlansList} />
      <Route path="/admin/plans/create" component={PlanCreate} />
      <Route path="/admin/plans/:id/edit" component={PlanEdit} />
      
      {/* Admin Settings Routes */}
      <Route path="/admin/settings/payment" component={AdminPaymentSettings} />
      <Route path="/admin/settings/payment-history" component={AdminPaymentHistory} />
      
      {/* Admin Transactions Routes */}
      <Route path="/admin/transactions" component={TransactionsList} />
      <Route path="/admin/transactions/:id" component={TransactionDetail} />
      
      {/* Admin Blog Routes */}
      <Route path="/admin/blog/posts" component={BlogPostsList} />
      <Route path="/admin/blog/posts/create" component={BlogPostForm} />
      <Route path="/admin/blog/posts/:id/edit" component={BlogPostForm} />
      <Route path="/admin/blog/categories" component={BlogCategoriesList} />
      <Route path="/admin/blog/tags" component={BlogTagsList} />
      
      {/* Admin Pages Routes */}
      <Route path="/admin/pages" component={PagesList} />
      <Route path="/admin/pages/create" component={PageForm} />
      <Route path="/admin/pages/:id/edit" component={PageForm} />
      
      {/* Admin Menus Routes */}
      <Route path="/admin/menus" component={MenusList} />
      <Route path="/admin/menus/:id/edit" component={MenuBuilder} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-white">
          <Router />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
