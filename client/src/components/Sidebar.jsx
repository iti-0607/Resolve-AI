import {
  MessageSquare,
  Ticket,
  LayoutDashboard,
  Bot,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {

  const items = [

    {
      name: "Chats",
      icon: MessageSquare,
      path: "/",
    },

    {
      name: "Tickets",
      icon: Ticket,
      path: "/tickets",
    },

    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },

  

  ];

  return (

    <div className="w-72 bg-slate-950 text-white flex flex-col">

      {/* Logo */}

      <div className="p-7 border-b border-slate-800">

        <h1 className="text-4xl font-bold">
          ResolveAI
        </h1>

        <p className="text-slate-400 mt-2">
          Customer Care Platform
        </p>

      </div>

      {/* Navigation */}

      <div className="flex-1 p-5">

        <div className="space-y-2">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <NavLink

                key={item.name}

                to={item.path}

                className={({ isActive }) =>

                  `flex
                  items-center
                  gap-4
                  px-4
                  py-3
                  rounded-xl
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-blue-600 shadow-lg"
                      : "hover:bg-slate-800 hover:translate-x-2"
                  }`

                }

              >

                <Icon size={20} />

                <span className="font-medium">
                  {item.name}
                </span>

              </NavLink>

            );

          })}

        </div>

      </div>

      {/* Bottom */}

      <div className="p-5 border-t border-slate-800">

        <div className="bg-slate-900 rounded-xl p-4 flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">

            <Bot size={22} />

          </div>

          <div>

            <p className="font-semibold">
              ResolveAI
            </p>

            <p className="text-green-400 text-sm">
              ● AI Online
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Sidebar;