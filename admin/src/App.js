import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Resetpassword from './pages/Resetpassword';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Enquiries from './pages/Enquiries';
import Bloglist from './pages/Bloglist';
import BlogCatList from './pages/BlogCatList';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import ColorList from './pages/ColorList';
import CategoryList from './pages/CategoryList';
import BrandList from './pages/BrandList';
import ProductList from './pages/ProductList';
import AddBlog from './pages/AddBlog';
import AddBlogCat from './pages/AddBlogCat';
import AddColor from './pages/AddColor';
import AddCat from './pages/AddCat';
import AddBrand from './pages/AddBrand';
import AddProduct from './pages/AddProduct';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/reset-password" element={<Resetpassword />} />
                <Route path="/forgot-password" element={<Forgotpassword />} />
                <Route path="/admin" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="enquiries" element={<Enquiries />} />
                    <Route path="blog-list" element={<Bloglist />} />
                    <Route path="blog" element={<AddBlog />} />
                    <Route path="blog-category" element={<AddBlogCat />} />
                    <Route path="blog-category-list" element={<BlogCatList />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="color" element={<AddColor />} />
                    <Route path="list-color" element={<ColorList />} />
                    <Route path="category" element={<AddCat />} />
                    <Route path="list-category" element={<CategoryList />} />
                    <Route path="brand" element={<AddBrand />} />
                    <Route path="list-brand" element={<BrandList />} />
                    <Route path="product" element={<AddProduct />} />
                    <Route path="list-product" element={<ProductList />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
