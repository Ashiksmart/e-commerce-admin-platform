const constant = {
  ROUTER: [
    {
      displayName: "DashBoard",
      position: 0,
      icon: "Dashboard",
      path: "/dashBoard",
    },
    {
      displayName: "Reports and Analytics",
      position: 1,
      icon: "Report",
      path: "/reports",
    },
    {
      displayName: "Management",
      position: 2,
      icon: "ManageAccounts",
      children: [
        {
          displayName: "Product",
          position: 2.0,
          icon: "StarBorder",
          path: "/management/product",
        },
        {
          displayName: "Category",
          position: 2.1,
          icon: "Category",
          path: "/management/category",
        },
        {
          displayName: "Inventory",
          position: 2.2,
          icon: "Inventory",
          path: "/management/inventory",
        },
        {
          displayName: "Customer",
          position: 2.3,
          icon: "Feedback",
          path: "/management/customer",
        },
        {
          displayName: "Order",
          position: 2.4,
          icon: "StarBorder",
          path: "/management/order",
        },
        {
          displayName: "User",
          position: 2.5,
          icon: "AccountBox",
          path: "/management/user",
        },
      ],
    },
    {
      displayName: "Performance Metrics",
      position: 3,
      icon: "GraphicEq",
      path: "/reports",
    },
    {
      displayName: "Communication Tools",
      position: 4,
      icon: "Chat",
      path: "/reports",
    },
    {
      displayName: "Settings",
      position: 5,
      icon: "Settings",
      path: "/reports",
    },
  ],
};

export default constant;
