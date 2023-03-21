import { Navigate, Route, Routes } from 'react-router-dom'
import { useCheckAuth } from '../hooks';
import { HomePage, ProductPage, ProductsPage, UserPage } from '../yizuz/pages'



export const AppRouter = () => {

  useCheckAuth();

  return (
    <>
        <Routes>
            <Route path='/' element={ <HomePage />} />
            <Route path='/products' element={ <ProductsPage />} />
            <Route path='products/:id' element={ <ProductPage />} />
            <Route path='/user' element={ <UserPage />} />

            <Route path='/*' element={ <Navigate to='/'/> } />
        </Routes>
    </>
  )
}
