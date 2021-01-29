import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        {
          name: 'Reposts',
          path: 'dashboard/reposts',
          component: () => import('@/views/dashboard/Reposts'),
        },
        // Pages
        // other
        {
          name: 'User Profile',
          path: 'pages/lessons',
          component: () => import('@/views/dashboard/pages/other/Lessons'),
        },
        {
          name: 'List1',
          path: 'other/list1',
          component: () => import('@/views/dashboard/pages/other/List1'),
        },
        {
          name: 'List2',
          path: 'other/list2',
          component: () => import('@/views/dashboard/pages/other/List2'),
        },
        {
          name: 'Otmeni',
          path: 'other/otmeni',
          component: () => import('@/views/dashboard/pages/other/Otmeni'),
        },
        {
          name: 'Plans',
          path: 'other/plans',
          component: () => import('@/views/dashboard/pages/other/Plans'),
        },
        // Materials
        {
          name: 'Materials',
          path: 'components/materials',
          component: () => import('@/views/dashboard/pages/Materials'),
        },
        {
          name: 'Agile',
          path: 'materials/agile1',
          component: () => import('@/views/dashboard/pages/materials/agileindex'),
        },
        {
          name: 'Agiledone',
          path: 'materials/agiledone',
          component: () => import('@/views/dashboard/pages/materials/agiledone'),
        },
        {
          name: 'Agilearchive',
          path: 'materials/agilearchive',
          component: () => import('@/views/dashboard/pages/materials/agilearchive'),
        },
        {
          name: 'Assign',
          path: 'materials/assign',
          component: () => import('@/views/dashboard/pages/materials/materialassign'),
        },
        {
          name: 'Material',
          path: 'materials/user',
          component: () => import('@/views/dashboard/pages/materials/materialuser'),
        },
        // Costumers
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        {
          name: 'Nogroup',
          path: 'customers-nogroup',
          component: () => import('@/views/dashboard/pages/customers/nogroup'),
        },
        {
          name: 'Group',
          path: 'customers-group',
          component: () => import('@/views/dashboard/pages/customers/group'),
        },
        {
          name: 'Birthdays',
          path: 'customers-birthdays',
          component: () => import('@/views/dashboard/pages/customers/birthdays'),
        },
        {
            name: 'Archive',
            path: 'customers-archive',
            component: () => import('@/views/dashboard/pages/customers/archive'),
        },
        // groups
        {
          name: 'Group Tables',
          path: 'tables/group-tables',
          component: () => import('@/views/dashboard/tables/GroupTables'),
        },
        {
          name: 'Archive',
          path: 'groups-archive',
          component: () => import('@/views/dashboard/pages/groups/archive'),
      },
        // teachers
        {
          name: 'Teacher Tables',
          path: 'tables/teacher-tables',
          component: () => import('@/views/dashboard/tables/TeacherTables'),
        },
        {
          name: 'Archive',
          path: 'teacher-archive',
          component: () => import('@/views/dashboard/pages/teacher/archive'),
        },
        // Finance
        {
          name: 'Finance Tables',
          path: 'tables/finance-tables',
          component: () => import('@/views/dashboard/tables/Financetables'),
        },
        {
          name: 'Archive Finance',
          path: 'finance-archive',
          component: () => import('@/views/dashboard/pages/finance/archive'),
        },
        {
          name: 'Bill',
          path: 'finance-bill',
          component: () => import('@/views/dashboard/pages/finance/bill'),
        },
        // Leads
        {
          name: 'Leads',
          path: 'components/leads',
          component: () => import('@/views/dashboard/pages/Leads'),
        },
        {
          name: 'Leadarchive',
          path: 'lead-archive',
          component: () => import('@/views/dashboard/pages/lead/archive'),
        },
        {
          name: 'Leadassign',
          path: 'lead-assign',
          component: () => import('@/views/dashboard/pages/lead/assign'),
        },
        {
          name: 'Leadmode',
          path: 'lead-mode',
          component: () => import('@/views/dashboard/pages/lead/mode'),
        },
        {
          name: 'Modeassign',
          path: 'mode-assign',
          component: () => import('@/views/dashboard/pages/lead/mode-assign'),
        },
        {
          name: 'Modearchive',
          path: 'mode-archive',
          component: () => import('@/views/dashboard/pages/lead/mode-archive'),
        },
        // Company
        {
          name: 'Company Tables',
          path: 'tables/company-tables',
          component: () => import('@/views/dashboard/tables/CompanyTables'),
        },
        {
          name: 'Company Archive',
          path: 'company-archive',
          component: () => import('@/views/dashboard/pages/company/archive'),
        },
        // Call
        {
          name: 'Call Tables',
          path: 'tables/call-tables',
          component: () => import('@/views/dashboard/tables/CallTables'),
        },
        {
          name: 'Call1',
          path: 'call-1',
          component: () => import('@/views/dashboard/pages/call/call1'),
        },
        {
          name: 'Call2',
          path: 'call-2',
          component: () => import('@/views/dashboard/pages/call/call2'),
        },
        {
          name: 'Call3',
          path: 'call-3',
          component: () => import('@/views/dashboard/pages/call/call3'),
        },
        // Company2
        {
          name: 'Access Tables',
          path: 'tables/access-tables',
          component: () => import('@/views/dashboard/tables/AccessTables'),
        },
        {
          name: 'Access Archive',
          path: 'access-archive',
          component: () => import('@/views/dashboard/pages/company2/archive'),
        },
        {
          name: 'Access Role',
          path: 'access-role-index',
          component: () => import('@/views/dashboard/pages/company2/role-index'),
        },
        // Tariff
        {
          name: 'Tariff Tables',
          path: 'tables/tariff-tables',
          component: () => import('@/views/dashboard/tables/TariffTables'),
        },
        {
          name: 'Tariff Archive',
          path: 'tariff-archive',
          component: () => import('@/views/dashboard/pages/tariff/archive'),
        },
      ],
    },
  ],
})
