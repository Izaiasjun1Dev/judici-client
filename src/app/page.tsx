import dynamic from 'next/dynamic';
import { ThemeProvider } from "@mui/material/styles";
import theme from './theme';
import { CssBaseline } from '@mui/material';


const DynamicLoginComponent = dynamic(() => import('@/components/Login/Login'), {
  ssr: false, // Indica ao Next.js para não renderizar este componente no lado do servidor (server-side)
});

const DynamicRegisterComponent = dynamic(() => import('@/components/Cadastro/Cadastro'), {
  ssr: false // Indica ao Next.js para não renderizar este componente no lado do servidor (server-side)
});


export default function Home() {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DynamicRegisterComponent/>
    </ThemeProvider>
  )
}
