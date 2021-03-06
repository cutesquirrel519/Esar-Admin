import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import DashboardPage from "./components/dashboard/DashboardPage"
import LoginPage from "./components/login/LoginForm";
import SignUpPage from "./components/login/SignUpPage";
import history from './history';


import Activity_NotificationsPage from "./components/activity_notifications/Activity_NotificationsPage"
import Activity_NotificationsAddUpdatePage from "./components/activity_notifications/Activity_NotificationsAddUpdatePage"
import Activity_RequestsPage from "./components/activity_requests/Activity_RequestsPage"
import Activity_RequestsAddUpdatePage from "./components/activity_requests/Activity_RequestsAddUpdatePage"
import Additional_FeaturesPage from "./components/additional_features/Additional_FeaturesPage"
import Additional_FeaturesAddUpdatePage from "./components/additional_features/Additional_FeaturesAddUpdatePage"
import Admin_RolePage from "./components/admin_role/Admin_RolePage"
import Admin_RoleAddUpdatePage from "./components/admin_role/Admin_RoleAddUpdatePage"
import AdminsPage from "./components/admins/AdminsPage"
import AdminsAddUpdatePage from "./components/admins/AdminsAddUpdatePage"
import Android_VersionsPage from "./components/android_versions/Android_VersionsPage"
import Android_VersionsAddUpdatePage from "./components/android_versions/Android_VersionsAddUpdatePage"
import Archived_PricesPage from "./components/archived_prices/Archived_PricesPage"
import Archived_PricesAddUpdatePage from "./components/archived_prices/Archived_PricesAddUpdatePage"
import Book_InstantliesPage from "./components/book_instantlies/Book_InstantliesPage"
import Book_InstantliesAddUpdatePage from "./components/book_instantlies/Book_InstantliesAddUpdatePage"
import Car_AirportsPage from "./components/car_airports/Car_AirportsPage"
import Car_AirportsAddUpdatePage from "./components/car_airports/Car_AirportsAddUpdatePage"
import Car_AvailablesPage from "./components/car_availables/Car_AvailablesPage"
import Car_AvailablesAddUpdatePage from "./components/car_availables/Car_AvailablesAddUpdatePage"
import Car_FaqsPage from "./components/car_faqs/Car_FaqsPage"
import Car_FaqsAddUpdatePage from "./components/car_faqs/Car_FaqsAddUpdatePage"
import Car_FeaturesPage from "./components/car_features/Car_FeaturesPage"
import Car_FeaturesAddUpdatePage from "./components/car_features/Car_FeaturesAddUpdatePage"
import Car_ImagesPage from "./components/car_images/Car_ImagesPage"
import Car_ImagesAddUpdatePage from "./components/car_images/Car_ImagesAddUpdatePage"
import Car_InsurancesPage from "./components/car_insurances/Car_InsurancesPage"
import Car_InsurancesAddUpdatePage from "./components/car_insurances/Car_InsurancesAddUpdatePage"
import Car_RegistrationsPage from "./components/car_registrations/Car_RegistrationsPage"
import Car_RegistrationsAddUpdatePage from "./components/car_registrations/Car_RegistrationsAddUpdatePage"
import Car_RestrictionsPage from "./components/car_restrictions/Car_RestrictionsPage"
import Car_RestrictionsAddUpdatePage from "./components/car_restrictions/Car_RestrictionsAddUpdatePage"
import Car_UnlistedsPage from "./components/car_unlisteds/Car_UnlistedsPage"
import Car_UnlistedsAddUpdatePage from "./components/car_unlisteds/Car_UnlistedsAddUpdatePage"
import CarsPage from "./components/cars/CarsPage"
import CarsAddUpdatePage from "./components/cars/CarsAddUpdatePage"
import Chat_MessagesPage from "./components/chat_messages/Chat_MessagesPage"
import Chat_MessagesAddUpdatePage from "./components/chat_messages/Chat_MessagesAddUpdatePage"
import ChatsPage from "./components/chats/ChatsPage"
import ChatsAddUpdatePage from "./components/chats/ChatsAddUpdatePage"
import Country_CurrenciesPage from "./components/country_currencies/Country_CurrenciesPage"
import Country_CurrenciesAddUpdatePage from "./components/country_currencies/Country_CurrenciesAddUpdatePage"
import Country_ListsPage from "./components/country_lists/Country_ListsPage"
import Country_ListsAddUpdatePage from "./components/country_lists/Country_ListsAddUpdatePage"
import Coupon_UserPage from "./components/coupon_user/Coupon_UserPage"
import Coupon_UserAddUpdatePage from "./components/coupon_user/Coupon_UserAddUpdatePage"
import CouponsPage from "./components/coupons/CouponsPage"
import CouponsAddUpdatePage from "./components/coupons/CouponsAddUpdatePage"
import CurrenciesPage from "./components/currencies/CurrenciesPage"
import CurrenciesAddUpdatePage from "./components/currencies/CurrenciesAddUpdatePage"
import Custom_PricesPage from "./components/custom_prices/Custom_PricesPage"
import Custom_PricesAddUpdatePage from "./components/custom_prices/Custom_PricesAddUpdatePage"
import Driver_LicencesPage from "./components/driver_licences/Driver_LicencesPage"
import Driver_LicencesAddUpdatePage from "./components/driver_licences/Driver_LicencesAddUpdatePage"
import Error_LogsPage from "./components/error_logs/Error_LogsPage"
import Error_LogsAddUpdatePage from "./components/error_logs/Error_LogsAddUpdatePage"
import Esar_AirportsPage from "./components/esar_airports/Esar_AirportsPage"
import Esar_AirportsAddUpdatePage from "./components/esar_airports/Esar_AirportsAddUpdatePage"
import Esar_CarsPage from "./components/esar_cars/Esar_CarsPage"
import Esar_CarsAddUpdatePage from "./components/esar_cars/Esar_CarsAddUpdatePage"
import Failed_JobsPage from "./components/failed_jobs/Failed_JobsPage"
import Failed_JobsAddUpdatePage from "./components/failed_jobs/Failed_JobsAddUpdatePage"
import Favorite_CarsPage from "./components/favorite_cars/Favorite_CarsPage"
import Favorite_CarsAddUpdatePage from "./components/favorite_cars/Favorite_CarsAddUpdatePage"
import I_D__CardsPage from "./components/i_d__cards/I_D__CardsPage"
import I_D__CardsAddUpdatePage from "./components/i_d__cards/I_D__CardsAddUpdatePage"
import Ios_TokenPage from "./components/ios_token/Ios_TokenPage"
import Ios_TokenAddUpdatePage from "./components/ios_token/Ios_TokenAddUpdatePage"
import Ios_VersionsPage from "./components/ios_versions/Ios_VersionsPage"
import Ios_VersionsAddUpdatePage from "./components/ios_versions/Ios_VersionsAddUpdatePage"
import JobsPage from "./components/jobs/JobsPage"
import JobsAddUpdatePage from "./components/jobs/JobsAddUpdatePage"
import MigrationsPage from "./components/migrations/MigrationsPage"
import MigrationsAddUpdatePage from "./components/migrations/MigrationsAddUpdatePage"
import Pending_EmailsPage from "./components/pending_emails/Pending_EmailsPage"
import Pending_EmailsAddUpdatePage from "./components/pending_emails/Pending_EmailsAddUpdatePage"
import Permission_RolePage from "./components/permission_role/Permission_RolePage"
import Permission_RoleAddUpdatePage from "./components/permission_role/Permission_RoleAddUpdatePage"
import Permission_UserPage from "./components/permission_user/Permission_UserPage"
import Permission_UserAddUpdatePage from "./components/permission_user/Permission_UserAddUpdatePage"
import PermissionsPage from "./components/permissions/PermissionsPage"
import PermissionsAddUpdatePage from "./components/permissions/PermissionsAddUpdatePage"
import ProfilesPage from "./components/profiles/ProfilesPage"
import ProfilesAddUpdatePage from "./components/profiles/ProfilesAddUpdatePage"
import Recently_Viewed_CarsPage from "./components/recently_viewed_cars/Recently_Viewed_CarsPage"
import Recently_Viewed_CarsAddUpdatePage from "./components/recently_viewed_cars/Recently_Viewed_CarsAddUpdatePage"
import Rental_CalculatorsPage from "./components/rental_calculators/Rental_CalculatorsPage"
import Rental_CalculatorsAddUpdatePage from "./components/rental_calculators/Rental_CalculatorsAddUpdatePage"
import ReportsPage from "./components/reports/ReportsPage"
import ReportsAddUpdatePage from "./components/reports/ReportsAddUpdatePage"
import Response_MessagesPage from "./components/response_messages/Response_MessagesPage"
import Response_MessagesAddUpdatePage from "./components/response_messages/Response_MessagesAddUpdatePage"
import Review_MessagesPage from "./components/review_messages/Review_MessagesPage"
import Review_MessagesAddUpdatePage from "./components/review_messages/Review_MessagesAddUpdatePage"
import ReviewsPage from "./components/reviews/ReviewsPage"
import ReviewsAddUpdatePage from "./components/reviews/ReviewsAddUpdatePage"
import RolesPage from "./components/roles/RolesPage"
import RolesAddUpdatePage from "./components/roles/RolesAddUpdatePage"
import Sent_EmailsPage from "./components/sent_emails/Sent_EmailsPage"
import Sent_EmailsAddUpdatePage from "./components/sent_emails/Sent_EmailsAddUpdatePage"
import Social_ConnectionsPage from "./components/social_connections/Social_ConnectionsPage"
import Social_ConnectionsAddUpdatePage from "./components/social_connections/Social_ConnectionsAddUpdatePage"
import SocialsPage from "./components/socials/SocialsPage"
import SocialsAddUpdatePage from "./components/socials/SocialsAddUpdatePage"
import SupportsPage from "./components/supports/SupportsPage"
import SupportsAddUpdatePage from "./components/supports/SupportsAddUpdatePage"
import Temp_MessagesPage from "./components/temp_messages/Temp_MessagesPage"
import Temp_MessagesAddUpdatePage from "./components/temp_messages/Temp_MessagesAddUpdatePage"
import Temp_Profile_DatasPage from "./components/temp_profile_datas/Temp_Profile_DatasPage"
import Temp_Profile_DatasAddUpdatePage from "./components/temp_profile_datas/Temp_Profile_DatasAddUpdatePage"
import Temp_TripsPage from "./components/temp_trips/Temp_TripsPage"
import Temp_TripsAddUpdatePage from "./components/temp_trips/Temp_TripsAddUpdatePage"
import Transaction_LogsPage from "./components/transaction_logs/Transaction_LogsPage"
import Transaction_LogsAddUpdatePage from "./components/transaction_logs/Transaction_LogsAddUpdatePage"
import Trip_Bill_HistoriesPage from "./components/trip_bill_histories/Trip_Bill_HistoriesPage"
import Trip_Bill_HistoriesAddUpdatePage from "./components/trip_bill_histories/Trip_Bill_HistoriesAddUpdatePage"
import Trip_BillsPage from "./components/trip_bills/Trip_BillsPage"
import Trip_BillsAddUpdatePage from "./components/trip_bills/Trip_BillsAddUpdatePage"
import Trip_CancellationsPage from "./components/trip_cancellations/Trip_CancellationsPage"
import Trip_CancellationsAddUpdatePage from "./components/trip_cancellations/Trip_CancellationsAddUpdatePage"
import Trip_CarsPage from "./components/trip_cars/Trip_CarsPage"
import Trip_CarsAddUpdatePage from "./components/trip_cars/Trip_CarsAddUpdatePage"
import Trip_HistoriesPage from "./components/trip_histories/Trip_HistoriesPage"
import Trip_HistoriesAddUpdatePage from "./components/trip_histories/Trip_HistoriesAddUpdatePage"
import Trip_ImagesPage from "./components/trip_images/Trip_ImagesPage"
import Trip_ImagesAddUpdatePage from "./components/trip_images/Trip_ImagesAddUpdatePage"
import Trip_NotesPage from "./components/trip_notes/Trip_NotesPage"
import Trip_NotesAddUpdatePage from "./components/trip_notes/Trip_NotesAddUpdatePage"
import TripsPage from "./components/trips/TripsPage"
import TripsAddUpdatePage from "./components/trips/TripsAddUpdatePage"
import User_AvailablesPage from "./components/user_availables/User_AvailablesPage"
import User_AvailablesAddUpdatePage from "./components/user_availables/User_AvailablesAddUpdatePage"
import User_NotesPage from "./components/user_notes/User_NotesPage"
import User_NotesAddUpdatePage from "./components/user_notes/User_NotesAddUpdatePage"
import UsersPage from "./components/users/UsersPage"
import UsersAddUpdatePage from "./components/users/UsersAddUpdatePage"


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                <Route path="/" exact component={LoginPage}/>
                <Route path="/signup" exact component={SignUpPage}/>
                <Route path="/dashboard" exact component={DashboardPage}/>
                <Route path="/activity_notifications" exact component={Activity_NotificationsPage}/>
<Route path="/activity_notifications/add" exact component={Activity_NotificationsAddUpdatePage}/>
<Route path="/activity_notifications/update/:id" exact component={Activity_NotificationsAddUpdatePage}/>
<Route path="/activity_requests" exact component={Activity_RequestsPage}/>
<Route path="/activity_requests/add" exact component={Activity_RequestsAddUpdatePage}/>
<Route path="/activity_requests/update/:id" exact component={Activity_RequestsAddUpdatePage}/>
<Route path="/additional_features" exact component={Additional_FeaturesPage}/>
<Route path="/additional_features/add" exact component={Additional_FeaturesAddUpdatePage}/>
<Route path="/additional_features/update/:id" exact component={Additional_FeaturesAddUpdatePage}/>
<Route path="/admin_role" exact component={Admin_RolePage}/>
<Route path="/admin_role/add" exact component={Admin_RoleAddUpdatePage}/>
<Route path="/admin_role/update/:id" exact component={Admin_RoleAddUpdatePage}/>
<Route path="/admins" exact component={AdminsPage}/>
<Route path="/admins/add" exact component={AdminsAddUpdatePage}/>
<Route path="/admins/update/:id" exact component={AdminsAddUpdatePage}/>
<Route path="/android_versions" exact component={Android_VersionsPage}/>
<Route path="/android_versions/add" exact component={Android_VersionsAddUpdatePage}/>
<Route path="/android_versions/update/:id" exact component={Android_VersionsAddUpdatePage}/>
<Route path="/archived_prices" exact component={Archived_PricesPage}/>
<Route path="/archived_prices/add" exact component={Archived_PricesAddUpdatePage}/>
<Route path="/archived_prices/update/:id" exact component={Archived_PricesAddUpdatePage}/>
<Route path="/book_instantlies" exact component={Book_InstantliesPage}/>
<Route path="/book_instantlies/add" exact component={Book_InstantliesAddUpdatePage}/>
<Route path="/book_instantlies/update/:id" exact component={Book_InstantliesAddUpdatePage}/>
<Route path="/car_airports" exact component={Car_AirportsPage}/>
<Route path="/car_airports/add" exact component={Car_AirportsAddUpdatePage}/>
<Route path="/car_airports/update/:id" exact component={Car_AirportsAddUpdatePage}/>
<Route path="/car_availables" exact component={Car_AvailablesPage}/>
<Route path="/car_availables/add" exact component={Car_AvailablesAddUpdatePage}/>
<Route path="/car_availables/update/:id" exact component={Car_AvailablesAddUpdatePage}/>
<Route path="/car_faqs" exact component={Car_FaqsPage}/>
<Route path="/car_faqs/add" exact component={Car_FaqsAddUpdatePage}/>
<Route path="/car_faqs/update/:id" exact component={Car_FaqsAddUpdatePage}/>
<Route path="/car_features" exact component={Car_FeaturesPage}/>
<Route path="/car_features/add" exact component={Car_FeaturesAddUpdatePage}/>
<Route path="/car_features/update/:id" exact component={Car_FeaturesAddUpdatePage}/>
<Route path="/car_images" exact component={Car_ImagesPage}/>
<Route path="/car_images/add" exact component={Car_ImagesAddUpdatePage}/>
<Route path="/car_images/update/:id" exact component={Car_ImagesAddUpdatePage}/>
<Route path="/car_insurances" exact component={Car_InsurancesPage}/>
<Route path="/car_insurances/add" exact component={Car_InsurancesAddUpdatePage}/>
<Route path="/car_insurances/update/:id" exact component={Car_InsurancesAddUpdatePage}/>
<Route path="/car_registrations" exact component={Car_RegistrationsPage}/>
<Route path="/car_registrations/add" exact component={Car_RegistrationsAddUpdatePage}/>
<Route path="/car_registrations/update/:id" exact component={Car_RegistrationsAddUpdatePage}/>
<Route path="/car_restrictions" exact component={Car_RestrictionsPage}/>
<Route path="/car_restrictions/add" exact component={Car_RestrictionsAddUpdatePage}/>
<Route path="/car_restrictions/update/:id" exact component={Car_RestrictionsAddUpdatePage}/>
<Route path="/car_unlisteds" exact component={Car_UnlistedsPage}/>
<Route path="/car_unlisteds/add" exact component={Car_UnlistedsAddUpdatePage}/>
<Route path="/car_unlisteds/update/:id" exact component={Car_UnlistedsAddUpdatePage}/>
<Route path="/cars" exact component={CarsPage}/>
<Route path="/cars/add" exact component={CarsAddUpdatePage}/>
<Route path="/cars/update/:id" exact component={CarsAddUpdatePage}/>
<Route path="/chat_messages" exact component={Chat_MessagesPage}/>
<Route path="/chat_messages/add" exact component={Chat_MessagesAddUpdatePage}/>
<Route path="/chat_messages/update/:id" exact component={Chat_MessagesAddUpdatePage}/>
<Route path="/chats" exact component={ChatsPage}/>
<Route path="/chats/add" exact component={ChatsAddUpdatePage}/>
<Route path="/chats/update/:id" exact component={ChatsAddUpdatePage}/>
<Route path="/country_currencies" exact component={Country_CurrenciesPage}/>
<Route path="/country_currencies/add" exact component={Country_CurrenciesAddUpdatePage}/>
<Route path="/country_currencies/update/:id" exact component={Country_CurrenciesAddUpdatePage}/>
<Route path="/country_lists" exact component={Country_ListsPage}/>
<Route path="/country_lists/add" exact component={Country_ListsAddUpdatePage}/>
<Route path="/country_lists/update/:id" exact component={Country_ListsAddUpdatePage}/>
<Route path="/coupon_user" exact component={Coupon_UserPage}/>
<Route path="/coupon_user/add" exact component={Coupon_UserAddUpdatePage}/>
<Route path="/coupon_user/update/:id" exact component={Coupon_UserAddUpdatePage}/>
<Route path="/coupons" exact component={CouponsPage}/>
<Route path="/coupons/add" exact component={CouponsAddUpdatePage}/>
<Route path="/coupons/update/:id" exact component={CouponsAddUpdatePage}/>
<Route path="/currencies" exact component={CurrenciesPage}/>
<Route path="/currencies/add" exact component={CurrenciesAddUpdatePage}/>
<Route path="/currencies/update/:id" exact component={CurrenciesAddUpdatePage}/>
<Route path="/custom_prices" exact component={Custom_PricesPage}/>
<Route path="/custom_prices/add" exact component={Custom_PricesAddUpdatePage}/>
<Route path="/custom_prices/update/:id" exact component={Custom_PricesAddUpdatePage}/>
<Route path="/driver_licences" exact component={Driver_LicencesPage}/>
<Route path="/driver_licences/add" exact component={Driver_LicencesAddUpdatePage}/>
<Route path="/driver_licences/update/:id" exact component={Driver_LicencesAddUpdatePage}/>
<Route path="/error_logs" exact component={Error_LogsPage}/>
<Route path="/error_logs/add" exact component={Error_LogsAddUpdatePage}/>
<Route path="/error_logs/update/:id" exact component={Error_LogsAddUpdatePage}/>
<Route path="/esar_airports" exact component={Esar_AirportsPage}/>
<Route path="/esar_airports/add" exact component={Esar_AirportsAddUpdatePage}/>
<Route path="/esar_airports/update/:id" exact component={Esar_AirportsAddUpdatePage}/>
<Route path="/esar_cars" exact component={Esar_CarsPage}/>
<Route path="/esar_cars/add" exact component={Esar_CarsAddUpdatePage}/>
<Route path="/esar_cars/update/:id" exact component={Esar_CarsAddUpdatePage}/>
<Route path="/failed_jobs" exact component={Failed_JobsPage}/>
<Route path="/failed_jobs/add" exact component={Failed_JobsAddUpdatePage}/>
<Route path="/failed_jobs/update/:id" exact component={Failed_JobsAddUpdatePage}/>
<Route path="/favorite_cars" exact component={Favorite_CarsPage}/>
<Route path="/favorite_cars/add" exact component={Favorite_CarsAddUpdatePage}/>
<Route path="/favorite_cars/update/:id" exact component={Favorite_CarsAddUpdatePage}/>
<Route path="/i_d__cards" exact component={I_D__CardsPage}/>
<Route path="/i_d__cards/add" exact component={I_D__CardsAddUpdatePage}/>
<Route path="/i_d__cards/update/:id" exact component={I_D__CardsAddUpdatePage}/>
<Route path="/ios_token" exact component={Ios_TokenPage}/>
<Route path="/ios_token/add" exact component={Ios_TokenAddUpdatePage}/>
<Route path="/ios_token/update/:id" exact component={Ios_TokenAddUpdatePage}/>
<Route path="/ios_versions" exact component={Ios_VersionsPage}/>
<Route path="/ios_versions/add" exact component={Ios_VersionsAddUpdatePage}/>
<Route path="/ios_versions/update/:id" exact component={Ios_VersionsAddUpdatePage}/>
<Route path="/jobs" exact component={JobsPage}/>
<Route path="/jobs/add" exact component={JobsAddUpdatePage}/>
<Route path="/jobs/update/:id" exact component={JobsAddUpdatePage}/>
<Route path="/migrations" exact component={MigrationsPage}/>
<Route path="/migrations/add" exact component={MigrationsAddUpdatePage}/>
<Route path="/migrations/update/:id" exact component={MigrationsAddUpdatePage}/>
<Route path="/pending_emails" exact component={Pending_EmailsPage}/>
<Route path="/pending_emails/add" exact component={Pending_EmailsAddUpdatePage}/>
<Route path="/pending_emails/update/:id" exact component={Pending_EmailsAddUpdatePage}/>
<Route path="/permission_role" exact component={Permission_RolePage}/>
<Route path="/permission_role/add" exact component={Permission_RoleAddUpdatePage}/>
<Route path="/permission_role/update/:id" exact component={Permission_RoleAddUpdatePage}/>
<Route path="/permission_user" exact component={Permission_UserPage}/>
<Route path="/permission_user/add" exact component={Permission_UserAddUpdatePage}/>
<Route path="/permission_user/update/:id" exact component={Permission_UserAddUpdatePage}/>
<Route path="/permissions" exact component={PermissionsPage}/>
<Route path="/permissions/add" exact component={PermissionsAddUpdatePage}/>
<Route path="/permissions/update/:id" exact component={PermissionsAddUpdatePage}/>
<Route path="/profiles" exact component={ProfilesPage}/>
<Route path="/profiles/add" exact component={ProfilesAddUpdatePage}/>
<Route path="/profiles/update/:id" exact component={ProfilesAddUpdatePage}/>
<Route path="/recently_viewed_cars" exact component={Recently_Viewed_CarsPage}/>
<Route path="/recently_viewed_cars/add" exact component={Recently_Viewed_CarsAddUpdatePage}/>
<Route path="/recently_viewed_cars/update/:id" exact component={Recently_Viewed_CarsAddUpdatePage}/>
<Route path="/rental_calculators" exact component={Rental_CalculatorsPage}/>
<Route path="/rental_calculators/add" exact component={Rental_CalculatorsAddUpdatePage}/>
<Route path="/rental_calculators/update/:id" exact component={Rental_CalculatorsAddUpdatePage}/>
<Route path="/reports" exact component={ReportsPage}/>
<Route path="/reports/add" exact component={ReportsAddUpdatePage}/>
<Route path="/reports/update/:id" exact component={ReportsAddUpdatePage}/>
<Route path="/response_messages" exact component={Response_MessagesPage}/>
<Route path="/response_messages/add" exact component={Response_MessagesAddUpdatePage}/>
<Route path="/response_messages/update/:id" exact component={Response_MessagesAddUpdatePage}/>
<Route path="/review_messages" exact component={Review_MessagesPage}/>
<Route path="/review_messages/add" exact component={Review_MessagesAddUpdatePage}/>
<Route path="/review_messages/update/:id" exact component={Review_MessagesAddUpdatePage}/>
<Route path="/reviews" exact component={ReviewsPage}/>
<Route path="/reviews/add" exact component={ReviewsAddUpdatePage}/>
<Route path="/reviews/update/:id" exact component={ReviewsAddUpdatePage}/>
<Route path="/roles" exact component={RolesPage}/>
<Route path="/roles/add" exact component={RolesAddUpdatePage}/>
<Route path="/roles/update/:id" exact component={RolesAddUpdatePage}/>
<Route path="/sent_emails" exact component={Sent_EmailsPage}/>
<Route path="/sent_emails/add" exact component={Sent_EmailsAddUpdatePage}/>
<Route path="/sent_emails/update/:id" exact component={Sent_EmailsAddUpdatePage}/>
<Route path="/social_connections" exact component={Social_ConnectionsPage}/>
<Route path="/social_connections/add" exact component={Social_ConnectionsAddUpdatePage}/>
<Route path="/social_connections/update/:id" exact component={Social_ConnectionsAddUpdatePage}/>
<Route path="/socials" exact component={SocialsPage}/>
<Route path="/socials/add" exact component={SocialsAddUpdatePage}/>
<Route path="/socials/update/:id" exact component={SocialsAddUpdatePage}/>
<Route path="/supports" exact component={SupportsPage}/>
<Route path="/supports/add" exact component={SupportsAddUpdatePage}/>
<Route path="/supports/update/:id" exact component={SupportsAddUpdatePage}/>
<Route path="/temp_messages" exact component={Temp_MessagesPage}/>
<Route path="/temp_messages/add" exact component={Temp_MessagesAddUpdatePage}/>
<Route path="/temp_messages/update/:id" exact component={Temp_MessagesAddUpdatePage}/>
<Route path="/temp_profile_datas" exact component={Temp_Profile_DatasPage}/>
<Route path="/temp_profile_datas/add" exact component={Temp_Profile_DatasAddUpdatePage}/>
<Route path="/temp_profile_datas/update/:id" exact component={Temp_Profile_DatasAddUpdatePage}/>
<Route path="/temp_trips" exact component={Temp_TripsPage}/>
<Route path="/temp_trips/add" exact component={Temp_TripsAddUpdatePage}/>
<Route path="/temp_trips/update/:id" exact component={Temp_TripsAddUpdatePage}/>
<Route path="/transaction_logs" exact component={Transaction_LogsPage}/>
<Route path="/transaction_logs/add" exact component={Transaction_LogsAddUpdatePage}/>
<Route path="/transaction_logs/update/:id" exact component={Transaction_LogsAddUpdatePage}/>
<Route path="/trip_bill_histories" exact component={Trip_Bill_HistoriesPage}/>
<Route path="/trip_bill_histories/add" exact component={Trip_Bill_HistoriesAddUpdatePage}/>
<Route path="/trip_bill_histories/update/:id" exact component={Trip_Bill_HistoriesAddUpdatePage}/>
<Route path="/trip_bills" exact component={Trip_BillsPage}/>
<Route path="/trip_bills/add" exact component={Trip_BillsAddUpdatePage}/>
<Route path="/trip_bills/update/:id" exact component={Trip_BillsAddUpdatePage}/>
<Route path="/trip_cancellations" exact component={Trip_CancellationsPage}/>
<Route path="/trip_cancellations/add" exact component={Trip_CancellationsAddUpdatePage}/>
<Route path="/trip_cancellations/update/:id" exact component={Trip_CancellationsAddUpdatePage}/>
<Route path="/trip_cars" exact component={Trip_CarsPage}/>
<Route path="/trip_cars/add" exact component={Trip_CarsAddUpdatePage}/>
<Route path="/trip_cars/update/:id" exact component={Trip_CarsAddUpdatePage}/>
<Route path="/trip_histories" exact component={Trip_HistoriesPage}/>
<Route path="/trip_histories/add" exact component={Trip_HistoriesAddUpdatePage}/>
<Route path="/trip_histories/update/:id" exact component={Trip_HistoriesAddUpdatePage}/>
<Route path="/trip_images" exact component={Trip_ImagesPage}/>
<Route path="/trip_images/add" exact component={Trip_ImagesAddUpdatePage}/>
<Route path="/trip_images/update/:id" exact component={Trip_ImagesAddUpdatePage}/>
<Route path="/trip_notes" exact component={Trip_NotesPage}/>
<Route path="/trip_notes/add" exact component={Trip_NotesAddUpdatePage}/>
<Route path="/trip_notes/update/:id" exact component={Trip_NotesAddUpdatePage}/>
<Route path="/trips" exact component={TripsPage}/>
<Route path="/trips/add" exact component={TripsAddUpdatePage}/>
<Route path="/trips/update/:id" exact component={TripsAddUpdatePage}/>
<Route path="/user_availables" exact component={User_AvailablesPage}/>
<Route path="/user_availables/add" exact component={User_AvailablesAddUpdatePage}/>
<Route path="/user_availables/update/:id" exact component={User_AvailablesAddUpdatePage}/>
<Route path="/user_notes" exact component={User_NotesPage}/>
<Route path="/user_notes/add" exact component={User_NotesAddUpdatePage}/>
<Route path="/user_notes/update/:id" exact component={User_NotesAddUpdatePage}/>
<Route path="/users" exact component={UsersPage}/>
<Route path="/users/add" exact component={UsersAddUpdatePage}/>
<Route path="/users/update/:id" exact component={UsersAddUpdatePage}/>

                </Switch>
            </Router>
        )
    }
}
