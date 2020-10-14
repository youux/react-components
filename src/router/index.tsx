import React from 'react'

export interface routerType {
	path?: string
	name?: string
	component: React.LazyExoticComponent<() => JSX.Element>
	routes?: any
}

const routes: routerType[] = [
	{
		path: '/login',
		name: 'login',
		component: React.lazy(() => import('../views/Login/index'))
	},
	{
		path: '/home',
		name: 'home',
		component: React.lazy(() => import('../views/Home/index'))
	}
]

export default routes
