//auth components
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import ForgotPassword from '../components/auth/ForgotPassword';
import ResetPassword from '../components/auth/ResetPassword';


//home
import Home from '../components/views/home/Home';
//cart
import Cart from '../components/views/cart/Cart';
//checkout
import Checkout from '../components/views/checkout/Checkout';
//page not found
import NotFound from '../components/NotFound';
//designer
import Designer from '../components/views/designer/Designer';
import DesignerProducts from '../components/views/designer/Products';
//supplier
//import Supplier from '../components/views/supplier/Supplier';


//pages
//Dashboard
import Dashboard from '../components/dashboard/Dashboard';
// profile
import Profile from '../components/profile/Profile';
import ChangePassword from '../components/profile/ChangePassword';
// product
import Product from '../components/product/Product';
import ProductCreate from '../components/product/ProductCreate';
import ProductEdit from '../components/product/ProductEdit';
// orders
import Order from '../components/order/Order';
// invitation
import Invitation from '../components/invitation/Invitation';
import InvitationSend from '../components/invitation/InvitationSend';

//detail
import Detail from '../components/views/detail/Detail';
import Variant from '../components/views/detail/Variant';

const routes = [
  {
    path: '/',
    exact: true,
    auth: true,
    component: Home,
    fallback: Login,
  },
  {
    path: '/login',
    exact: true,
    auth: false,
    component: Login,
  },
  {
    path: '/register',
    exact: true,
    auth: false,
    component: Register,
  },
  {
    path: '/forgot-password',
    exact: true,
    auth: false,
    component: ForgotPassword,
  },
  {
    path: '/reset-password',
    exact: true,
    auth: false,
    component: ResetPassword,
  },
  {
    path: '/cart',
    exact: true,
    auth: true,
    component: Cart,
  },
  {
    path: '/checkout',
    exact: true,
    auth: true,
    component: Checkout,
  },
  {
    path: '/designers',
    exact: true,
    auth: true,
    component: Designer,
  },
  {
    path: '/designer/products/:slug',
    exact: true,
    auth: false,
    component: DesignerProducts,
  },
  {
    path: '/dashboard',
    exact: true,
    auth: true,
    component: Dashboard,
  },
  {
    path: '/profile',
    exact: true,
    auth: true,
    component: Profile,
  },
  {
    path: '/profile/change-password',
    exact: true,
    auth: true,
    component: ChangePassword,
  },
  {
    path: '/product',
    exact: true,
    auth: true,
    component: Product,
  },
  {
    path: '/product/create',
    exact: true,
    auth: true,
    component: ProductCreate,
  },
  {
    path: '/product/edit/:id',
    exact: true,
    auth: true,
    component: ProductEdit,
  },
  {
    path: '/order',
    exact: true,
    auth: true,
    component: Order,
  },
  {
    path: '/invitation',
    exact: true,
    auth: true,
    component: Invitation,
  },
  {
    path: '/invitation/send',
    exact: true,
    auth: true,
    component: InvitationSend,
  },
  {
    path: '/product/detail/:id',
    exact: true,
    auth: true,
    component: Detail,
  },
  {
    path: '/product/detail/:id/v/:vid',
    exact: true,
    auth: true,
    component: Variant,
  },
  {
    path: '',
    exact: false,
    auth: false,
    component: NotFound,
  },
];


export default routes;