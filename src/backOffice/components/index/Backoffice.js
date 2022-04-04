import React, { lazy, useState } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom' //acomodar fran
import Error404 from '../../../shared/Error404/Error404'
import LayoutOficce from './LayoutOficce'

const ActivitiesForm = lazy(() => import('../Activities/ActivitiesForm'))

const CategoriesForm = lazy(() => import('../Categories/CategoriesForm'))

const Categories = lazy(() => import('../Categories/Categories'))

const NewsForm = lazy(() => import('../NewsList/NewsForm'))

const SlidesForm = lazy(() => import('../Slides/SlidesForm'))

const TestimonialForm = lazy(() => import('../Testimonials/TestimonialsForm'))

const Testimonials = lazy(() => import('../Testimonials/Testimonials'))

const UserForm = lazy(() => import('../Users/UsersForm'))

const MembersForm = lazy(() =>
  import('../../../Components/Members/MembersForm'),
)

const ProjectsForm = lazy(() => import('../Projects/ProjectsForm'))

const Slides = lazy(() => import('../Slides/SlidesBackOffice'))

const ScreenDashboard = lazy(() => import('./ScreenDashboard'))

const OrganizationScreen = lazy(() =>
  import('../Organization/OrganizationScreen'),
)
const ActivitiesList = lazy(() => import('../Activities/ActivitiesList'))

const MemberList = lazy(() => import('../MemberList/MemberList'))

const NewsList = lazy(() => import('../NewsList/NewsList'))

const OrganizationForm = lazy(() => import('../Organization/OrganizationForm'))

const UsersList = lazy(() => import('../Users/UsersList'))

function BackOficce() {
  let match = useRouteMatch()

  const [open, setOpen] = useState(false)

  return (
    <>
      <LayoutOficce>
        <Switch>
          <Route exact path={`${match.path}/news`} component={NewsList} />
          <Route
            exact
            path={`${match.path}/news/create-news`}
            component={NewsForm}
          />
          <Route
            exact
            path={`${match.path}/news/edit-news`}
            component={NewsForm}
          />
          <Route exact path={`${match.path}`} component={ScreenDashboard} />

          <Route
            exact
            path={`${match.path}/categories/create`}
            component={CategoriesForm}
          />

          <Route
            exact
            path={`${match.path}/slides/create`}
            component={SlidesForm}
          />

          <Route exact path={`${match.path}/slides/edit/:id`} component={SlidesForm} />

          <Route exact path={`${match.path}/testimonials/create`} component={TestimonialForm} />
          <Route
            exact
            path={`${match.path}/testimonials/create`}
            component={TestimonialForm}
          />

          <Route
            exact
            path={`${match.path}/testimonials/edit/:id`}
            component={TestimonialForm}
          />

          <Route
            exact
            path={`${match.path}/testimonials`}
            component={Testimonials}
          />

          <Route
            exact
            path={`${match.path}/users/create-user`}
            component={UserForm}
          />

          <Route
            exact
            path={`${match.path}/members/create`}
            component={MembersForm}
          />

          <Route
            exact
            path={`${match.path}/members/edit/:id`}
            component={MembersForm}
          />
          <Route
            exact
            path={`${match.path}/users/edit-user/:id`}
            component={UserForm}
          />

          <Route
            exact
            path={`${match.path}/members/edit`}
            component={MembersForm}
          />

          <Route
            exact
            path={`${match.path}/create-project`}
            component={ProjectsForm}
          />

          <Route exact path={`${match.path}/slides`} component={Slides} />

          <Route
            exact
            path={`${match.path}/organization`}
            component={OrganizationScreen}
          />

          <Route
            exact
            path={`${match.path}/organization/edit`}
            component={OrganizationForm}
          />

          <Route exact path={`${match.path}/categories`} component={Categories} />

          <Route
            exact
            path={`${match.path}/activities`}
            component={ActivitiesList}
          />

          <Route
            exact
            path={`${match.path}/activities/create-activity`}
            component={ActivitiesForm}
          />

          <Route
            exact
            path={`${match.path}/activities/edit-activity`}
            component={ActivitiesForm}
          />

          <Route exact path={`${match.path}/users`} component={UsersList} />

          <Route exact path={`${match.path}/members`} component={MemberList} />

          <Route exact path={`${match.path}/categories/edit/:id`} component={CategoriesForm} />

          <Route path="*" component={Error404} />
        </Switch>
      </LayoutOficce>

    </>
  )
}
export default BackOficce

