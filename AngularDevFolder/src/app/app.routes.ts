import { HomeComponent } from "./pages/home/home.component";
import { GraphsComponent } from './pages/graphs/graphs.component';
import { InputComponent } from './pages/input/input.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EditComponent } from './pages/edit/edit.component';
import { ExportRawComponent } from './pages/exportRaw/exportRaw.component';

export const appRoutes=[
    // TODO: Add 404 page
    {
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
    }
];