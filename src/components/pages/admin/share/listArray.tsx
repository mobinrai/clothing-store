import { get, type FieldErrors } from "react-hook-form";
import type { FormFieldConfig } from "../products/shared";
import type { SideLinkListType } from "../types";
import { AddModerator, FormatListBulleted, FormatListBulletedAdd, Inventory2, Person, PersonAdd, Receipt, Security } from "@mui/icons-material";


export function getFormFieldArray(errors:FieldErrors):FormFieldConfig{
    return [
        {
            name:'name',
            placeHolder:'Enter product name',
            label:"Name",
            error:get(errors, 'name')
        },
        {
            name:'brand',
            placeHolder:'Enter product brand',
            label:"Brand",
            error:get(errors, 'brand')
        },
        {
            name:'tag',
            placeHolder:'Enter product tags',
            label:"Tags",
            error:get(errors, 'tag')
        },
        {
            name:'material',
            placeHolder:'Enter product materials',
            label:"Materials",
            error:get(errors, 'material')
        },
        {
            name:'basePrice',
            placeHolder:'Enter product base price',
            label:"BasePrice",
            error:get(errors, 'basePrice'),
            type:"number"
        },
       
        {
            name:'discount',
            placeHolder:'Enter product discounts',
            label:"Discount Percentage",
            error:get(errors, 'discount'),
            type:'number'
        },
        {
            name:'description',
            placeHolder:'Enter product description',
            label:"Description",
            error:get(errors, 'description'),
            multiline:true
        }
    ]
}


export const AdminSideList:SideLinkListType = {
    'Category':
      [{
        title:'All Categories',
        icon:<FormatListBulleted/>,
        linkTo:'/admin/categories'
        },
        {
            title:'Add new Categories',
            icon:<FormatListBulletedAdd/>,
            linkTo:'/admin/categories/new'
        }]
    ,'Orders': [
        {
            title:'All Orders',
            icon:<Receipt/>,
            linkTo:'/admin/orders'
        }],
    'Products':[
        {
            title:'All Products',
            icon:<Inventory2/>,
            linkTo:'/admin/products'
        
        },
        {
            title:'Add Products',
            icon:<Inventory2/>,
            linkTo:'/admin/products/new'
        }],
        'Roles':[
        {
            title:'All Roles',
            icon:<Security/>,
            linkTo:'/admin/roles'
        
        },
        {
            title:'Add Roles',
            icon:<AddModerator/>,
            linkTo:'/admin/roles/new'
        }],
        'Users':[
            {
                title:'All Users',
                icon:<Person/>,
                linkTo:'/admin/all-users'
            },
            {
                title:'Add Users',
                icon:<PersonAdd/>,
                linkTo:'/admin/all-users'
            }
    ]
}


export function getColors(){
    return [
        { "name": "Red", "value": "#FF0000" },
        { "name": "Blue", "value": "#0000FF" },
        { "name": "Green", "value": "#00FF00" },
        { "name": "Yellow", "value": "#FFFF00" },
        { "name": "Orange", "value": "#FFA500" },
        { "name": "Purple", "value": "#800080" },
        { "name": "Pink", "value": "#FFC0CB" },
        { "name": "Brown", "value": "#A52A2A" },
        { "name": "Black", "value": "#000000" },
        { "name": "White", "value": "#FFFFFF" },
        { "name": "Gray", "value": "#808080" },
        { "name": "Cyan", "value": "#00FFFF" },
        { "name": "Magenta", "value": "#FF00FF" },
        { "name": "Teal", "value": "#008080" },
        { "name": "Lime", "value": "#00FF01" },
        { "name": "Indigo", "value": "#4B0082" },
        { "name": "Violet", "value": "#EE82EE" },
        { "name": "Gold", "value": "#FFD700" },
        { "name": "Silver", "value": "#C0C0C0" },
        { "name": "Maroon", "value": "#800000" },
        { "name": "Olive", "value": "#808000" },
        { "name": "Navy", "value": "#000080" },
        { "name": "Coral", "value": "#FF7F50" },
        { "name": "Salmon", "value": "#FA8072" },
        { "name": "Khaki", "value": "#F0E68C" },
        { "name": "Turquoise", "value": "#40E0D0" },
        { "name": "Plum", "value": "#DDA0DD" },
        { "name": "Orchid", "value": "#DA70D6" },
        { "name": "Lavender", "value": "#E6E6FA" }
    ]
}