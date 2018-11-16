import { HomeComponent } from "./pages/home/home.component";
import { GraphsComponent } from './pages/graphs/graphs.component';
import { InputComponent } from './pages/input/input.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EditComponent } from './pages/edit/edit.component';
import { ExportRawComponent } from './pages/exportRaw/exportRaw.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// path refers to the end of the url after .org such as www.dutchesscap.org/
export const appRoutes=[
    {   // When path is empty, redirect to the home page
        path:'',
        redirectTo:'notFound',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'graphs',
        component: GraphsComponent,
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
        path: 'survey',
        component: SurveyComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];