import Image from 'next/image'
import styles from './page.module.css'
import Login from '@/components/Login/Login'
import dynamic from 'next/dynamic';

const DynamicLoginComponent = dynamic(() => import('@/components/Login/Login'), {
  ssr: false // Indica ao Next.js para não renderizar este componente no lado do servidor (server-side)
});

export default function Home() {
  return (
    <>
      <DynamicLoginComponent />
    </>
  )
}
