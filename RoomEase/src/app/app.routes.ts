import { Routes } from '@angular/router';
import { IndexOneComponent } from './pages/index/index-one/index-one.component';
import { IndexTwoComponent } from './pages/index/index-two/index-two.component';
import { IndexThreeComponent } from './pages/index/index-three/index-three.component';
import { IndexFourComponent } from './pages/index/index-four/index-four.component';
import { IndexFiveComponent } from './pages/index/index-five/index-five.component';
import { IndexSixComponent } from './pages/index/index-six/index-six.component';
import { IndexSevenComponent } from './pages/index/index-seven/index-seven.component';
import { IndexEightComponent } from './pages/index/index-eight/index-eight.component';
import { IndexNineComponent } from './pages/index/index-nine/index-nine.component';
import { IndexTenComponent } from './pages/index/index-ten/index-ten.component';
import { IndexElevenComponent } from './pages/index/index-eleven/index-eleven.component';
import { VideoComponent } from './pages/index/video/video.component';
import { MapComponent } from './pages/index/map/map.component';
import { ListLayoutNewComponent } from './pages/property/list-layout-new/list-layout-new.component';
import { ListLayoutNew3Component } from './pages/property/list-layout-new-3/list-layout-new-3.component';
import { ListLayoutNew2Component } from './pages/property/list-layout-new-2/list-layout-new-2.component';
import { ListLayoutWithMapComponent } from './pages/property/list-layout-with-map/list-layout-with-map.component';
import { ListLayoutFullComponent } from './pages/property/list-layout-full/list-layout-full.component';
import { GridLayoutWithSidebarComponent } from './pages/property/grid-layout-with-sidebar/grid-layout-with-sidebar.component';
import { ClassicalLayoutWithSidebarComponent } from './pages/property/classical-layout-with-sidebar/classical-layout-with-sidebar.component';
import { GridLayoutWithMapComponent } from './pages/property/grid-layout-with-map/grid-layout-with-map.component';
import { GridComponent } from './pages/property/grid/grid.component';
import { ClassicalPropertyComponent } from './pages/property/classical-property/classical-property.component';
import { ClassicalLayoutWithMapComponent } from './pages/property/classical-layout-with-map/classical-layout-with-map.component';
import { HalfMapComponent } from './pages/property/half-map/half-map.component';
import { HalfMap2Component } from './pages/property/half-map-2/half-map-2.component';
import { SingleProperty1Component } from './pages/property/single-property-1/single-property-1.component';
import { SingleProperty2Component } from './pages/property/single-property-2/single-property-2.component';
import { SingleProperty3Component } from './pages/property/single-property-3/single-property-3.component';
import { SingleProperty4Component } from './pages/property/single-property-4/single-property-4.component';
import { AgentsComponent } from './pages/agent/agents/agents.component';
import { AgentPageComponent } from './pages/agent/agent-page/agent-page.component';
import { AddAgentComponent } from './pages/agent/add-agent/add-agent.component';
import { EditAgentComponent } from './pages/agent/edit-agent/edit-agent.component';
import { AgenciesComponent } from './pages/agencie/agencies/agencies.component';
import { AgencyPageComponent } from './pages/agencie/agency-page/agency-page.component';
import { ComparePropertyComponent } from './pages/property/compare-property/compare-property.component';
import { SubmitPropertyComponent } from './pages/property/submit-property/submit-property.component';
import { BlogComponent } from './pages/blog/blog/blog.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';
import { ComponentComponent } from './pages/component/component.component';
import { PricingsComponent } from './pages/pricings/pricings.component';
import { ErrorComponent } from './pages/error/error.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { PaymentComponent } from './pages/admin/payment/payment.component';
import { MyProfileComponent } from './pages/admin/my-profile/my-profile.component';
import { MyPropertyComponent } from './pages/admin/my-property/my-property.component';
import { BookmarkListComponent } from './pages/admin/bookmark-list/bookmark-list.component';
import { ChangePasswordComponent } from './pages/admin/change-password/change-password.component';
import { FaqComponent } from './pages/faq/faq.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { SubmitPropertyDashboardComponent } from './pages/admin/submit-property-dashboard/submit-property-dashboard.component';

export const routes: Routes = [
    {path:'', component:IndexOneComponent},
    {path:'home-2', component:IndexTwoComponent},
    {path:'home-3', component:IndexThreeComponent},
    {path:'home-4', component:IndexFourComponent},
    {path:'home-5', component:IndexFiveComponent},
    {path:'home-6', component:IndexSixComponent},
    {path:'home-7', component:IndexSevenComponent},
    {path:'home-8', component:IndexEightComponent},
    {path:'home-9', component:IndexNineComponent},
    {path:'home-10', component:IndexTenComponent},
    {path:'home-11', component:IndexElevenComponent},
    {path:'video', component:VideoComponent},
    {path:'map', component:MapComponent},
    {path:'list-layout-new', component:ListLayoutNewComponent},
    {path:'list-layout-new-3', component:ListLayoutNew3Component},
    {path:'list-layout-new-2', component:ListLayoutNew2Component},
    {path:'list-layout-with-map', component:ListLayoutWithMapComponent},
    {path:'list-layout-full', component:ListLayoutFullComponent},
    {path:'grid-layout-with-sidebar', component:GridLayoutWithSidebarComponent},
    {path:'classical-layout-with-sidebar', component:ClassicalLayoutWithSidebarComponent},
    {path:'grid-layout-with-map', component:GridLayoutWithMapComponent},
    {path:'grid', component:GridComponent},
    {path:'classical-property', component:ClassicalPropertyComponent},
    {path:'classical-layout-with-map', component:ClassicalLayoutWithMapComponent},
    {path:'half-map', component:HalfMapComponent},
    {path:'half-map-2', component:HalfMap2Component},
    {path:'single-property-1', component:SingleProperty1Component},
    {path:'single-property-1/:id', component:SingleProperty1Component},
    {path:'single-property-2', component:SingleProperty2Component},
    {path:'single-property-2/:id', component:SingleProperty2Component},
    {path:'single-property-3', component:SingleProperty3Component},
    {path:'single-property-3/:id', component:SingleProperty3Component},
    {path:'single-property-4', component:SingleProperty4Component},
    {path:'single-property-4/:id', component:SingleProperty4Component},
    {path:'agents', component:AgentsComponent},
    {path:'agent-page', component:AgentPageComponent},
    {path:'agent-page/:id', component:AgentPageComponent},
    {path:'add-agent', component:AddAgentComponent},
    {path:'edit-agent', component:EditAgentComponent},
    {path:'agencies', component:AgenciesComponent},
    {path:'agency-page', component:AgencyPageComponent},
    {path:'agency-page/:id', component:AgencyPageComponent},
    {path:'compare-property', component:ComparePropertyComponent},
    {path:'submit-property', component:SubmitPropertyComponent},
    {path:'blog', component:BlogComponent},
    {path:'blog-detail', component:BlogDetailComponent},
    {path:'blog-detail/:id', component:BlogDetailComponent},
    {path:'component', component:ComponentComponent},
    {path:'pricing', component:PricingsComponent},
    {path:'404', component:ErrorComponent},
    {path:'contact', component:ContactComponent},
    {path:'about-us', component:AboutUsComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'payment', component:PaymentComponent},
    {path:'my-profile', component:MyProfileComponent},
    {path:'my-property', component:MyPropertyComponent},
    {path:'bookmark-list', component:BookmarkListComponent},
    {path:'change-password', component:ChangePasswordComponent},
    {path:'faq', component:FaqComponent},
    {path:'checkout', component:CheckoutComponent},
    {path:'create-account', component:CreateAccountComponent},
    {path:'submit-property-dashboard', component:SubmitPropertyDashboardComponent},
];
    