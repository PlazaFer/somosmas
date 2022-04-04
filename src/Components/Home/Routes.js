import React, { lazy } from "react";
import {
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import LayoutHome from "./LayoutHome";
import Error404 from "../../shared/Error404/Error404";
import PrivateRoutes from "../../backOffice/PrivateRoutes";
import { Testimonials } from "../Testimonials/Testimonials";
import { TestimonialDetail } from "../Testimonials/testimonialDetail/TestimonialDetail";
const Donacion = lazy(() => import("../Donations/Donacion"));
const Home = lazy(() => import("./Index"));
const Activities = lazy(() => import("../Activities/Actividades"));
const News = lazy(() => import("../News/News"));
const NewsDetail = lazy(() => import("../News/Detail/NewsDetail"));
const Nosotros = lazy(() => import("../About/Nosotros"));
const Contacto = lazy(() => import("../Contact/Contacto"));
const DetalleActividad = lazy(() =>
  import("../Activities/Detail/DetalleActividad")
);
// const Testimonials = lazy(() => import('../Testimonials/Testimonials'));
// const TestimonialsDetail = lazy(() => import('../Testimonials/testimonialDetail/TestimonialDetail'));
const RegisterForm = lazy(() => import("../Auth/RegisterForm"));
const LoginForm = lazy(() => import("../Auth/LoginForm"));
const Gracias = lazy(() => import("../Donations/Gracias"));

export default function Routes() {
  let match = useRouteMatch();
  return (
    <LayoutHome>
      <Switch>
        <Route exact path={`${match.path}`} component={Home} />
        <Route exact path={`${match.path}nosotros`} component={Nosotros} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/activities/:id" component={DetalleActividad} />
        <Route exact path="/news/:id" component={NewsDetail} />
        <Route exact path="/news" component={News} />
        <Route exact path="/testimonios" component={Testimonials} />
        <Route exact path='/testimonios/:id' component={TestimonialDetail} />
        <PrivateRoutes exact path="/contacto" component={Contacto} />
        <PrivateRoutes exact path="/login" component={LoginForm} />
        <PrivateRoutes exact path="/register" component={RegisterForm} />
        <Route exact path="/gracias" component={Gracias} />
        <Route exact path="/donation" component={Donacion} />
        <Route path="*" component={Error404} />
      </Switch>
    </LayoutHome>
  );
}
