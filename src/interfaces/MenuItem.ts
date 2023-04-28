import { AppRoutes } from "../enums/AppEnums"


export default interface MenuItem {
    title: string
    route: AppRoutes
    icon?: string
}
