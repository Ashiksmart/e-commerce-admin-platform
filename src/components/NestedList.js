import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { isEmpty } from "lodash";

import {
  AccountBox,
  Analytics,
  Category,
  Chat,
  Dashboard,
  Feedback,
  GraphicEq,
  Inventory,
  ManageAccounts,
  Report,
  Settings,
  StarBorder,
} from "@mui/icons-material";
import Constant from "@/constants";
import { usePathname, useRouter } from "next/navigation";

export default function NestedList() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(true);
  const [selectedPath, setSelectedPath] = React.useState(pathname);
  const routerList = Constant.ROUTER;

  React.useEffect(() => {
    console.log("ROUTE : ", pathname);
  }, [pathname]);

  const iconMap = {
    AccountBox,
    Analytics,
    Category,
    Chat,
    Dashboard,
    Feedback,
    GraphicEq,
    Inventory,
    ManageAccounts,
    Report,
    Settings,
    StarBorder,
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = (path) => {
    if (path) {
      setSelectedPath(path);
      router.push(path);
    }
  };

  const ListComponent = ({ displayName, childList, path, icon }) => {
    const IconComponent = iconMap[icon];

    return (
      <>
        {!path && !isEmpty(childList) ? (
          <>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <ManageAccounts />
              </ListItemIcon>
              <ListItemText primary={displayName} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {childList.map(
                  ({ displayName, position, children, path, icon }) => (
                    <ListComponent
                      key={position}
                      displayName={displayName}
                      position={position}
                      childList={children}
                      path={path}
                      icon={icon}
                    />
                  )
                )}
              </List>
            </Collapse>
          </>
        ) : (
          <ListItemButton
            selected={selectedPath === path}
            onClick={() => handleListItemClick(path)}
          >
            <ListItemIcon>
              <IconComponent />
            </ListItemIcon>
            <ListItemText primary={displayName} />
          </ListItemButton>
        )}
      </>
    );
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {routerList.map(({ displayName, position, children, path, icon }) => (
        <ListComponent
          key={position}
          displayName={displayName}
          childList={children}
          path={path}
          icon={icon}
        />
      ))}
    </List>
  );
}
