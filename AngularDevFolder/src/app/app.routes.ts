import {HomeComponent} from "./pages/home/home.component";

export const appRoutes=[
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
        path: 'input',
        loadChildren:'./pages/input/input.module#InputModule',
    },
    {
        path: 'edit',
        loadChildren:'./pages/edit/edit.module#EditModule',
    },
    {
        path: 'exportRaw',
        loadChildren:'./pages/exportRaw/exportRaw.module#ExportRawModule',
    },
    {
        path: 'graphs',
        loadChildren:'./pages/graphs/graphs.module#GraphsModule',
    },
    {
        path: 'survey',
        loadChildren:'./pages/survey/survey.module#SurveyModule',
    },
    {
      path: 'openEndedData',
      loadChildren:'./pages/openEndedData/openEndedData.module#OpenEndedDataModule',
  },
];