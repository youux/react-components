import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import routes, { routerType } from '../src/router/index'

const App = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={Loading}>
				<Switch>
					{routes.map((route, i) => (
						<SubRoutes key={i} {...route} />
					))}
				</Switch>
			</Suspense>
		</BrowserRouter>
	)
}

// 加载中效果
const Loading = () => {
	return <div>Loading……</div>
}

// 子页面
const SubRoutes = (route: routerType) => {
	return (
		<Route
			path={route.path}
			render={(props) => <route.component {...props} routes={route.routes} />}
		/>
	)
}

export default App
