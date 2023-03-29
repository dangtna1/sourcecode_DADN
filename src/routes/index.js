// Layouts
// import { LayoutName } from '~/components/Layout'

import HomePage from '~/pages/Home'
import ReportPage from '~/pages/Report'
import ConfigPage from '~/pages/Config'

// Public routes, layout = null: No Layout || empty: DefaultLayout || others: LayoutName
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/report', component: ReportPage },
    { path: '/config', component: ConfigPage },
    // { path: '/test1', component: Page1, layout: LayoutName },
    // { path: '/test2', component: Page2, layout: null },

    


]; // No need login


const privateRoutes = [

]; // Have to login

export { publicRoutes, privateRoutes }