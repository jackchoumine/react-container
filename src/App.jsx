import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import { createBrowserHistory } from 'history'

import { Progress, Header } from './components'

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))
const DashboardLazy = lazy(() => import('./components/DashboardApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
})

const history = createBrowserHistory()

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(window.sessionStorage.getItem('isSignedIn') === 'true')
  const [user, setUser] = useState(JSON.parse(window.sessionStorage.getItem('user')))

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard')
    }
  }, [isSignedIn])

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => {
              window.sessionStorage.removeItem('isSignedIn')
              window.sessionStorage.removeItem('user')
              window.sessionStorage.removeItem('user')
              setIsSignedIn(false)
            }}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path='/auth'>
                <AuthLazy
                  onSignIn={(user) => {
                    setUser(user)
                    // 使用本地存储
                    window.sessionStorage.setItem('user', JSON.stringify(user))
                    window.sessionStorage.setItem('user', JSON.stringify(user))
                    window.sessionStorage.setItem('isSignedIn', JSON.stringify(true))
                    setIsSignedIn(true)
                  }}
                />
              </Route>
              <Route path='/dashboard'>
                {/* {!isSignedIn && <Redirect to='/' />} */}
                <DashboardLazy user={user} isSignedIn={isSignedIn} />
              </Route>
              <Route path='/' component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
}
