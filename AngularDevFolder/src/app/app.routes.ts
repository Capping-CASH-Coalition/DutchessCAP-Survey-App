import { HomeComponent } from "./pages/home/home.component";
import { GraphsComponent } from './pages/graphs/graphs.component';
import { InputComponent } from './pages/input/input.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { EditComponent } from './pages/edit/edit.component';
import { ExportRawComponent } from './pages/exportRaw/exportRaw.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SurveyLandingComponent } from './pages/survey-landing/survey-landing.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

// path refers to the end of the url after .org such as www.dutchesscap.org/
export const appRoutes=[
    {   // When path is empty, redirect to the home page
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'graphs',
        component: GraphsComponent
        //canActivate: [AuthGuard]
    },
    {
        path: 'input',
        component: InputComponent,
    },
    {
        path: 'exportRaw',
        component: ExportRawComponent,
    },
    {
        path: 'edit',
        component: EditComponent,
    },
    {
        path: 'surveyhome',
        component: SurveyLandingComponent,
    },
    {
        path: 'survey',
        component: SurveyComponent,
    },
    {   // When path does not match one of the declared paths, redirect to 404 page
        path: '**',
        component: NotFoundComponent,
    }
];