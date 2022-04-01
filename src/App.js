import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { theme } from './theme'
import { ThemeProvider } from '@mui/material'
import Spinner from './shared/Spinner/Spinner'
import { Box } from '@mui/material'
import PrivateRoutes from './backOffice/PrivateRoutes'

const ToysCampaign = lazy(() => import('../src/Campaigns/Toys/ToysCampaign'))
const SchoolCampaign = lazy(() =>
  import('../src/Campaigns/School/SchoolCampaign'),
)
const BackOficce = lazy(() =>
  import('./backOffice/components/index/Backoffice'),
)
const Routes = lazy(() => import('./Components/Home/Routes'))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense
          fallback={
            <Box
              sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Spinner color="#000" height={80} width={800} />
            </Box>
          }
        >
          <Switch>
            <PrivateRoutes
              rol="Admin"
              path="/backoffice"
              component={BackOficce}
            />
            <Route exact path="/school-campaign" component={SchoolCampaign} />
            <Route exact path="/toys-campaign" component={ToysCampaign} />
            <Route path="/" component={Routes} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
