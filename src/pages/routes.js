import { HomePage } from './home'
import { TestPage } from './test'
import { NotFoundPage } from './not-found'
import { FinishPage } from './finish'

import { paths } from './paths'

export const routes = [
  {
    path: paths.home(),
    exact: true,
    component: HomePage
  },
  {
    path: paths.test(),
    exact: true,
    component: TestPage
  },
  {
    path: paths.finish(),
    exact: true,
    component: FinishPage
  },
  {
    path: '*',
    component: NotFoundPage
  }
]
