const Menu = [
  {
    title:"Users Management",
    group:"users",
    component:"users",
    icon:"group",
    items:[
      {name:"RoleManagement",title:"Role Management",component:"RoleManagement",children:[
        {name:"RoleList",title:"Role List",component:"RoleList"},
        {name:"RolePermission",title:"Role Permission",component:"RolePermission"},
      ]},
      {name:"UnitManagement",title:"UnitManagement",component:"UnitManagement"},
      {name:"Groups",title:"Groups",component:"Groups"},
      {name:"User",title:"User",component:"User"},
    ]
  },
  {
    title: "System Settings",
    group:"system",
    open:"true",
    component:"setup",
    icon:"build",
    items:[
    {name:"Setup",title:"Setup",component:"setup"},
    {name:"Menu",title:"Menu",component:"menu"},
    ]
  },

  {
    title: "Email",
    component:"Email",
    icon:"mail"
    
  }
  
  /*{
    title: "Widgets",
    group: "widgets",
    component: "widgets",
    icon: "widgets",
    items: [
      { name: "social", title: "Social", component: "SocialWidget" },
      {
        name: "statistic",
        title: "Statistic",
        badge: "new",
        component: "StatisticWidget"
      },
      { name: "chart", title: "Chart", component: "ChartWidget" },
      { name: "list", title: "List", component: "ListWidget" }
    ]
  },
  { header: "CMS" },
  {
    title: "List & Query",
    group: "layout",
    icon: "view_compact",
    items: [{ name: "Table", title: "Basic Table", component: "ListTable" }]
  },*/
  // {
  //   title: 'Forms & Controls',
  //   group: 'forms',
  //   component: 'forms',
  //   icon: 'edit',
  //   items: [
  //     { name: 'basic', title: 'General', component: 'components/basic-forms' },
  //   ]
  // },
  // { divider: true },
  // { header: 'Extras' },
  // {
  //   title: 'Pages',
  //   group: 'extra',
  //   icon: 'list',
  //   items: [
  //     { name: 'Login', title: 'Login', component: 'Login' },
  //     { name: '404', title: '404', component: 'NotFound' },
  //     { name: '403', title: '403', component: 'AccessDenied' },
  //     { name: '500', title: '500', component: 'ServerError' },
  //   ]
  // },
]
// reorder menu
/*Menu.forEach(item => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase()
      let textB = y.title.toUpperCase()
      return textA < textB ? -1 : textA > textB ? 1 : 0
    })
  }
})*/

export default Menu
