import { lazy, Suspense } from 'react'
import './App.css'

function App() {

  const PropsTitle = lazy(() => import('./page/PropsTitle'))
  const Props1 = lazy(() => import('./page/Props1'))
  const Props2 = lazy(() => import('./page/Props2'))
  const Props3 = lazy(() => import('./page/Props3'))
  const User = lazy(() => import('./page/User'))

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <div className='container'>
     <PropsTitle/>
     <Props1/>
     <Props2/>
     <Props3/>
     <User/>
     </div>
     </Suspense>
    </>
  )
}

export default App
